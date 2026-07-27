import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const contentDir = path.join(root, "content", "posts");
const outputFile = path.join(root, "app", "data", "posts.generated.ts");

function parseValue(value) {
  const trimmed = value.trim();
  if (trimmed === "true") return true;
  if (trimmed === "false") return false;
  if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
    return JSON.parse(trimmed);
  }
  return trimmed.replace(/^["']|["']$/g, "");
}

function parseFrontmatter(source, filename) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) {
    throw new Error(`${filename}: frontmatter가 없습니다.`);
  }

  const data = {};
  for (const line of match[1].split(/\r?\n/)) {
    if (!line.trim() || line.trim().startsWith("#")) continue;
    const separator = line.indexOf(":");
    if (separator < 0) continue;
    data[line.slice(0, separator).trim()] = parseValue(line.slice(separator + 1));
  }
  return { data, markdown: match[2].trim() };
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function inlineMarkdown(value) {
  let html = escapeHtml(value);
  html = html.replace(/`([^`]+)`/g, "<code>$1</code>");
  html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  html = html.replace(
    /\[([^\]]+)\]\((https?:\/\/[^)\s]+|\/[^)\s]*)\)/g,
    '<a href="$2" target="_blank" rel="noreferrer">$1</a>',
  );
  return html;
}

function headingId(title, index) {
  const normalized = title
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/[^\p{Letter}\p{Number}\s-]/gu, "")
    .trim()
    .replace(/\s+/g, "-");
  return normalized || `section-${index + 1}`;
}

function renderMarkdown(markdown) {
  const lines = markdown.split(/\r?\n/);
  const html = [];
  const toc = [];
  let paragraph = [];
  let listItems = [];
  let quoteLines = [];
  let codeLines = [];
  let codeLanguage = "";
  let inCode = false;

  const flushParagraph = () => {
    if (!paragraph.length) return;
    html.push(`<p>${inlineMarkdown(paragraph.join(" "))}</p>`);
    paragraph = [];
  };
  const flushList = () => {
    if (!listItems.length) return;
    html.push(`<ul>${listItems.map((item) => `<li>${inlineMarkdown(item)}</li>`).join("")}</ul>`);
    listItems = [];
  };
  const flushQuote = () => {
    if (!quoteLines.length) return;
    html.push(`<blockquote>${inlineMarkdown(quoteLines.join(" "))}</blockquote>`);
    quoteLines = [];
  };

  for (const line of lines) {
    const codeFence = line.match(/^```(.*)$/);
    if (codeFence) {
      flushParagraph();
      flushList();
      flushQuote();
      if (!inCode) {
        inCode = true;
        codeLanguage = codeFence[1].trim();
        codeLines = [];
      } else {
        html.push(
          `<pre data-language="${escapeHtml(codeLanguage)}"><code>${escapeHtml(codeLines.join("\n"))}</code></pre>`,
        );
        inCode = false;
      }
      continue;
    }

    if (inCode) {
      codeLines.push(line);
      continue;
    }

    const heading = line.match(/^(##|###)\s+(.+)$/);
    if (heading) {
      flushParagraph();
      flushList();
      flushQuote();
      const depth = heading[1].length;
      const title = heading[2].trim();
      const id = headingId(title, toc.length);
      if (depth === 2) toc.push({ id, title: title.replace(/\*\*/g, "") });
      html.push(`<h${depth} id="${id}">${inlineMarkdown(title)}</h${depth}>`);
      continue;
    }

    const list = line.match(/^-\s+(.+)$/);
    if (list) {
      flushParagraph();
      flushQuote();
      listItems.push(list[1]);
      continue;
    }

    const quote = line.match(/^>\s?(.*)$/);
    if (quote) {
      flushParagraph();
      flushList();
      quoteLines.push(quote[1]);
      continue;
    }

    if (!line.trim()) {
      flushParagraph();
      flushList();
      flushQuote();
      continue;
    }

    flushList();
    flushQuote();
    paragraph.push(line.trim());
  }

  flushParagraph();
  flushList();
  flushQuote();
  if (inCode) {
    throw new Error("닫히지 않은 코드 블록이 있습니다.");
  }

  return { contentHtml: html.join("\n"), toc };
}

const required = [
  "slug",
  "title",
  "subtitle",
  "description",
  "date",
  "category",
  "tags",
  "cover",
  "readTime",
];
const allowedCategories = new Set(["Tech", "Troubleshooting", "Review", "Life"]);
const allowedCovers = new Set(["peach", "blue", "mint", "violet"]);
const files = (await readdir(contentDir)).filter((file) => file.endsWith(".md")).sort();
const posts = [];

for (const filename of files) {
  const source = await readFile(path.join(contentDir, filename), "utf8");
  const { data, markdown } = parseFrontmatter(source, filename);

  for (const key of required) {
    if (!data[key]) throw new Error(`${filename}: ${key} 값이 필요합니다.`);
  }
  if (!allowedCategories.has(data.category)) {
    throw new Error(`${filename}: 지원하지 않는 category입니다.`);
  }
  if (!allowedCovers.has(data.cover)) {
    throw new Error(`${filename}: 지원하지 않는 cover입니다.`);
  }
  if (!Array.isArray(data.tags)) {
    throw new Error(`${filename}: tags는 배열이어야 합니다.`);
  }

  const rendered = renderMarkdown(markdown);
  posts.push({
    ...data,
    displayDate: String(data.date).replaceAll("-", "."),
    ...rendered,
  });
}

posts.sort((a, b) => String(b.date).localeCompare(String(a.date)));

const output = `// 이 파일은 content/posts의 Markdown에서 자동 생성됩니다.
// 직접 수정하지 마세요. 대신 Markdown 원본을 수정한 뒤 npm run content를 실행하세요.

export type Post = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  displayDate: string;
  category: "Tech" | "Troubleshooting" | "Review" | "Life";
  tags: string[];
  cover: "peach" | "blue" | "mint" | "violet";
  readTime: string;
  contentHtml: string;
  toc: { id: string; title: string }[];
};

export const posts: Post[] = ${JSON.stringify(posts, null, 2)};
export const categories = ["All", "Tech", "Troubleshooting", "Review", "Life"] as const;
export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
`;

await writeFile(outputFile, output, "utf8");
console.log(`Generated ${posts.length} posts.`);

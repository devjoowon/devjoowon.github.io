import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("exports the finished blog home", async () => {
  const html = await readFile(
    new URL("../out/index.html", import.meta.url),
    "utf8",
  );
  assert.match(html, /<html lang="ko">/i);
  assert.match(html, /<title>뎁주의 테크블로그<\/title>/i);
  assert.match(html, /DEVJOO/);
  assert.match(html, /뎁주의 테크블로그를 새로 시작합니다/);
  assert.match(html, /https:\/\/github\.com\/devjoowon/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/i);
});

test("exports posts and removes disposable starter metadata", async () => {
  const [page, layout, packageJson, comments] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../app/components/Comments.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(page, /<BlogHome \/>/);
  assert.match(layout, /뎁주의 테크블로그/);
  assert.match(layout, /\/og\.png/);
  assert.match(comments, /https:\/\/utteranc\.es\/client\.js/);
  assert.match(comments, /devjoowon\/blog-comments/);
  assert.match(comments, /issue-term", "pathname"/);
  assert.doesNotMatch(layout, /codex-preview|Starter Project|_sites-preview/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  const postUrl = new URL(
    "../out/posts/hello-devjoowon-tech-blog/index.html",
    import.meta.url,
  );
  await access(postUrl);
  const postHtml = await readFile(postUrl, "utf8");
  assert.match(postHtml, /id="comments-title">댓글<\/h2>/);
  await assert.rejects(
    access(new URL("../app/_sites-preview/SkeletonPreview.tsx", import.meta.url)),
  );
  await assert.rejects(
    access(new URL("../app/_sites-preview/preview.css", import.meta.url)),
  );
});

test("does not publish draft posts", async () => {
  const hiddenSlugs = [
    "github-pages-blog-workflow",
    "debugging-notes-that-work",
    "small-tools-big-difference",
  ];
  const [home, rss, sitemap] = await Promise.all([
    readFile(new URL("../out/index.html", import.meta.url), "utf8"),
    readFile(new URL("../out/rss.xml", import.meta.url), "utf8"),
    readFile(new URL("../out/sitemap.xml", import.meta.url), "utf8"),
  ]);

  for (const slug of hiddenSlugs) {
    assert.doesNotMatch(home, new RegExp(slug));
    assert.doesNotMatch(rss, new RegExp(slug));
    assert.doesNotMatch(sitemap, new RegExp(slug));
    await assert.rejects(
      access(new URL(`../out/posts/${slug}/index.html`, import.meta.url)),
    );
  }
});

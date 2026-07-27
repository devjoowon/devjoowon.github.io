import { posts } from "../data/posts.generated";

export const dynamic = "force-static";

export function GET() {
  const siteUrl = "https://devjoowon.github.io";
  const items = posts
    .map(
      (post) => `<item>
  <title><![CDATA[${post.title}]]></title>
  <description><![CDATA[${post.description}]]></description>
  <link>${siteUrl}/posts/${post.slug}/</link>
  <guid>${siteUrl}/posts/${post.slug}/</guid>
  <pubDate>${new Date(`${post.date}T00:00:00+09:00`).toUTCString()}</pubDate>
</item>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
  <title>뎁주의 테크블로그</title>
  <link>${siteUrl}</link>
  <description>배우고 고민한 IT 기술을 쉽고 단단하게 기록합니다.</description>
  <language>ko</language>
  ${items}
</channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}

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
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /<BlogHome \/>/);
  assert.match(layout, /뎁주의 테크블로그/);
  assert.match(layout, /\/og\.png/);
  assert.doesNotMatch(layout, /codex-preview|Starter Project|_sites-preview/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  await access(
    new URL(
      "../out/posts/hello-devjoowon-tech-blog/index.html",
      import.meta.url,
    ),
  );
  await assert.rejects(
    access(new URL("../app/_sites-preview/SkeletonPreview.tsx", import.meta.url)),
  );
  await assert.rejects(
    access(new URL("../app/_sites-preview/preview.css", import.meta.url)),
  );
});

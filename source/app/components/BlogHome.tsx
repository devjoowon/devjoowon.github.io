"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { categories, posts } from "../data/posts.generated";

export function BlogHome() {
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [query, setQuery] = useState("");

  const filteredPosts = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return posts.filter((post) => {
      const matchesCategory = category === "All" || post.category === category;
      const haystack = [post.title, post.description, post.category, ...post.tags]
        .join(" ")
        .toLowerCase();
      return matchesCategory && (!normalized || haystack.includes(normalized));
    });
  }, [category, query]);

  return (
    <section className="posts-section" id="posts">
      <div className="posts-toolbar">
        <div className="category-tabs" aria-label="글 카테고리">
          {categories.map((item) => (
            <button
              className={category === item ? "active" : ""}
              key={item}
              onClick={() => setCategory(item)}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>
        <label className="search-field" id="search">
          <span className="sr-only">글 검색</span>
          <span aria-hidden="true">⌕</span>
          <input
            onChange={(event) => setQuery(event.target.value)}
            placeholder="제목이나 태그 검색"
            type="search"
            value={query}
          />
        </label>
      </div>

      <div className="post-list" aria-live="polite">
        {filteredPosts.map((post) => (
          <Link className="post-card" href={`/posts/${post.slug}/`} key={post.slug}>
            <div className={`post-cover cover-${post.cover}`} aria-hidden="true">
              <span className="cover-code">{post.category}</span>
              <span className="cover-bracket">{"{ }"}</span>
              <span className="cover-line cover-line-one" />
              <span className="cover-line cover-line-two" />
              <span className="cover-chip">{post.tags[0]}</span>
            </div>
            <article className="post-summary">
              <div className="post-meta">
                <span>{post.category}</span>
                <time dateTime={post.date}>{post.displayDate}</time>
              </div>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <div className="tag-row">
                {post.tags.map((tag) => (
                  <span key={tag}>#{tag}</span>
                ))}
              </div>
            </article>
          </Link>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="empty-state">
          <span aria-hidden="true">⌕</span>
          <p>조건에 맞는 글이 아직 없어요.</p>
          <button
            onClick={() => {
              setCategory("All");
              setQuery("");
            }}
            type="button"
          >
            전체 글 보기
          </button>
        </div>
      )}
    </section>
  );
}

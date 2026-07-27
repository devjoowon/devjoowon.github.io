"use client";

import { useEffect, useRef } from "react";

const COMMENTS_REPOSITORY = "devjoowon/blog-comments";

export function Comments() {
  const commentsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = commentsRef.current;

    if (!container) {
      return;
    }

    const script = document.createElement("script");
    script.src = "https://utteranc.es/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.setAttribute("repo", COMMENTS_REPOSITORY);
    script.setAttribute("issue-term", "pathname");
    script.setAttribute("label", "comment");
    script.setAttribute("theme", "github-light");

    container.appendChild(script);

    return () => {
      container.replaceChildren();
    };
  }, []);

  return (
    <section className="comments-section" aria-labelledby="comments-title">
      <p className="eyebrow">LET&apos;S TALK</p>
      <h2 id="comments-title">댓글</h2>
      <p className="comments-description">
        궁금한 점이나 나누고 싶은 이야기를 GitHub 계정으로 남겨주세요.
      </p>
      <div className="comments-widget" ref={commentsRef} />
    </section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Comments } from "../../components/Comments";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { getPost, posts } from "../../data/posts.generated";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/posts/${post.slug}/` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = posts.filter((item) => item.slug !== post.slug).slice(0, 2);

  return (
    <>
      <Header />
      <main>
        <div className={`article-hero cover-${post.cover}`}>
          <span>{post.category}</span>
          <b aria-hidden="true">{"{ devjoo }"}</b>
        </div>

        <article className="article-shell">
          <header className="article-header">
            <p className="article-category">{post.category}</p>
            <h1>{post.title}</h1>
            <p className="article-subtitle">{post.subtitle}</p>
            <div className="article-date">
              <time dateTime={post.date}>{post.displayDate}</time>
              <span>읽는 시간 {post.readTime}</span>
            </div>
          </header>

          <div className="article-layout">
            <aside className="toc">
              <p>목차</p>
              <ol>
                {post.toc.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`}>{item.title}</a>
                  </li>
                ))}
              </ol>
            </aside>

            <div className="article-body">
              <p className="article-lead">{post.description}</p>
              <div
                className="markdown-content"
                dangerouslySetInnerHTML={{ __html: post.contentHtml }}
              />

              <div className="article-tags">
                {post.tags.map((tag) => (
                  <span key={tag}>#{tag}</span>
                ))}
              </div>

              <section className="author-card" aria-label="작성자 정보">
                <div className="author-avatar">D</div>
                <div>
                  <p><strong>뎁주</strong> | Developer</p>
                  <span>배운 것을 나만의 언어로 기록하고 있습니다.</span>
                </div>
              </section>

              <Comments />
            </div>
          </div>
        </article>

        <section className="related-section">
          <p className="eyebrow">KEEP READING</p>
          <h2>이 글도 함께 읽어보세요</h2>
          <div>
            {relatedPosts.map((item) => (
              <Link href={`/posts/${item.slug}/`} key={item.slug}>
                <span>{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

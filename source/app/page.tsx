import { BlogHome } from "./components/BlogHome";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="hero-keywords" aria-hidden="true">
            <span>Backend</span>
            <span>Architecture</span>
            <span>AI</span>
            <span>Frontend</span>
            <span>DevOps</span>
            <span>Database</span>
            <span>Review</span>
            <span>Troubleshooting</span>
          </div>
          <div className="hero-spark hero-spark-code" aria-hidden="true">&lt;/&gt;</div>
          <div className="hero-spark hero-spark-plus" aria-hidden="true">+</div>
          <div className="hero-spark hero-spark-dot" aria-hidden="true">D</div>
          <div className="hero-spark hero-spark-star" aria-hidden="true">✦</div>
          <div className="hero-copy">
            <p className="eyebrow">DEVJOO&apos;S TECH NOTES</p>
            <h1>뎁주의 테크블로그</h1>
            <p>배우고 고민한 IT 기술을 쉽고 단단하게 기록합니다.</p>
          </div>
        </section>

        <BlogHome />
      </main>
      <Footer />
    </>
  );
}

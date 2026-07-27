import Link from "next/link";

export function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="뎁주의 테크블로그 홈">
          <span className="brand-mark">D</span>
          <span>뎁주의 테크블로그</span>
        </Link>
        <nav aria-label="주요 메뉴">
          <Link href="/#posts">글 목록</Link>
          <a href="https://github.com/devjoowon" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <Link className="header-search" href="/#search" aria-label="글 검색">
            <span aria-hidden="true">⌕</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

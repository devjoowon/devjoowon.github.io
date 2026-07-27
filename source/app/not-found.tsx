import Link from "next/link";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="not-found">
        <span>404</span>
        <h1>페이지를 찾을 수 없어요.</h1>
        <p>주소가 바뀌었거나 아직 작성되지 않은 글일 수 있습니다.</p>
        <Link href="/">홈으로 돌아가기</Link>
      </main>
      <Footer />
    </>
  );
}

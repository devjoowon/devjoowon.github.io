import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://devjoowon.github.io"),
  title: {
    default: "뎁주의 테크블로그",
    template: "%s | 뎁주의 테크블로그",
  },
  description: "배우고 고민한 IT 기술을 쉽고 단단하게 기록하는 뎁주의 기술 블로그",
  authors: [{ name: "뎁주", url: "https://github.com/devjoowon" }],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "뎁주의 테크블로그",
    title: "뎁주의 테크블로그",
    description: "배우고 고민한 IT 기술을 쉽고 단단하게 기록합니다.",
    images: [
      {
        url: "/og.png",
        width: 1733,
        height: 907,
        alt: "뎁주의 테크블로그",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "뎁주의 테크블로그",
    description: "배우고 고민한 IT 기술을 쉽고 단단하게 기록합니다.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

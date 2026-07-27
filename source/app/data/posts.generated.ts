// 이 파일은 content/posts의 Markdown에서 자동 생성됩니다.
// 직접 수정하지 마세요. 대신 Markdown 원본을 수정한 뒤 npm run content를 실행하세요.

export type Post = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  displayDate: string;
  category: "Tech" | "Troubleshooting" | "Review" | "Life";
  tags: string[];
  cover: "peach" | "blue" | "mint" | "violet";
  readTime: string;
  contentHtml: string;
  toc: { id: string; title: string }[];
};

export const posts: Post[] = [
  {
    "slug": "hello-devjoowon-tech-blog",
    "title": "뎁주의 테크블로그를 새로 시작합니다",
    "subtitle": "배운 것을 오래 남기는 가장 좋은 방법에 대하여",
    "description": "기술을 배우는 데서 멈추지 않고, 나만의 언어로 다시 정리하기 위해 블로그를 시작합니다.",
    "date": "2026-07-27",
    "category": "Life",
    "tags": [
      "Blog",
      "기록",
      "GitHub Pages"
    ],
    "cover": "peach",
    "readTime": "4분",
    "displayDate": "2026.07.27",
    "contentHtml": "<h2 id=\"왜-다시-기술-블로그인가\">왜 다시 기술 블로그인가</h2>\n<p>개발하면서 만난 문제와 해결 과정은 그 순간에는 또렷하지만 시간이 지나면 놀랄 만큼 빠르게 흐려집니다. 검색 기록과 메모를 흩어두는 대신, 다른 사람도 이해할 수 있는 글로 다시 정리해 보기로 했습니다.</p>\n<p>이곳에는 완벽한 정답보다 문제를 바라본 과정, 선택지 사이에서 고민한 이유, 그리고 다음에는 더 잘하고 싶은 점을 남기려고 합니다.</p>\n<blockquote>💡 좋은 기록은 미래의 나에게 보내는 가장 친절한 문서라고 생각합니다.</blockquote>\n<h2 id=\"어떤-이야기를-기록할까\">어떤 이야기를 기록할까</h2>\n<p>특정 기술 하나에 한정하지 않고, 새롭게 공부한 내용과 실제 개발 과정에서 배운 IT 기술을 폭넓게 다룹니다. 공부한 개념은 내가 이해한 방식으로 다시 정리하고, 직접 사용해 본 기술은 언제 유용했고 어디서 막혔는지를 함께 적을 예정입니다.</p>\n<ul><li>공부한 기술과 개념을 나만의 언어로 정리한 글</li><li>개발 과정에서 마주친 문제와 해결 방법</li><li>새로운 도구와 기술을 사용해 본 후기</li><li>프로젝트 구조와 설계에 대한 고민</li><li>꾸준히 성장하기 위한 회고와 기록</li></ul>\n<h2 id=\"읽기-쉬운-글을-위한-약속\">읽기 쉬운 글을 위한 약속</h2>\n<p>낯선 용어는 가능한 한 쉬운 말로 풀고, 코드에는 실행되는 이유와 주의할 점을 함께 적겠습니다. 시간이 지난 뒤 다시 읽어도 맥락을 찾을 수 있는 글을 목표로 합니다.</p>\n<p>작게 시작하되 꾸준히 쌓아가겠습니다. 뎁주의 테크블로그에 오신 것을 환영합니다.</p>",
    "toc": [
      {
        "id": "왜-다시-기술-블로그인가",
        "title": "왜 다시 기술 블로그인가"
      },
      {
        "id": "어떤-이야기를-기록할까",
        "title": "어떤 이야기를 기록할까"
      },
      {
        "id": "읽기-쉬운-글을-위한-약속",
        "title": "읽기 쉬운 글을 위한 약속"
      }
    ]
  }
];
export const categories = ["All", "Tech", "Troubleshooting", "Review", "Life"] as const;
export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

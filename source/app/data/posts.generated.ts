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
  },
  {
    "slug": "github-pages-blog-workflow",
    "title": "GitHub Pages로 기술 블로그 운영하기",
    "subtitle": "코드를 올리면 글이 자동으로 발행되는 흐름 만들기",
    "description": "저장소와 자동 배포를 연결해 글 작성에 집중할 수 있는 정적 블로그 운영 흐름을 정리합니다.",
    "date": "2026-07-26",
    "category": "Tech",
    "tags": [
      "GitHub",
      "CI/CD",
      "Static Site"
    ],
    "cover": "blue",
    "readTime": "6분",
    "displayDate": "2026.07.26",
    "contentHtml": "<h2 id=\"정적-블로그가-잘-맞는-이유\">정적 블로그가 잘 맞는 이유</h2>\n<p>기술 블로그의 핵심은 글과 이미지입니다. 로그인이나 결제처럼 서버가 꼭 필요한 기능이 없다면 미리 만들어 둔 HTML을 제공하는 정적 사이트가 빠르고 관리하기 쉽습니다.</p>\n<p>GitHub Pages는 저장소의 결과물을 웹사이트로 제공하므로 코드와 글의 변경 기록을 한곳에서 관리할 수 있습니다.</p>\n<h2 id=\"글이-발행되는-과정\">글이 발행되는 과정</h2>\n<p>새 글을 추가하고 저장소에 올리면 자동화 작업이 사이트를 빌드합니다. 빌드가 끝난 결과물은 GitHub Pages에 전달되고 잠시 뒤 같은 주소에서 새 글을 확인할 수 있습니다.</p>\n<ul><li>Markdown으로 글 작성</li><li>변경 사항 저장</li><li>자동 빌드</li><li>GitHub Pages 배포</li></ul>\n<pre data-language=\"bash\"><code>git add .\ngit commit -m &quot;새 글 작성&quot;\ngit push</code></pre>\n<h2 id=\"운영은-단순하게\">운영은 단순하게</h2>\n<p>처음부터 모든 기능을 넣기보다 검색, 태그, RSS처럼 글을 찾고 읽는 데 직접 도움이 되는 기능부터 시작하는 것이 좋습니다. 댓글과 통계는 실제 필요가 생겼을 때 추가해도 늦지 않습니다.</p>",
    "toc": [
      {
        "id": "정적-블로그가-잘-맞는-이유",
        "title": "정적 블로그가 잘 맞는 이유"
      },
      {
        "id": "글이-발행되는-과정",
        "title": "글이 발행되는 과정"
      },
      {
        "id": "운영은-단순하게",
        "title": "운영은 단순하게"
      }
    ]
  },
  {
    "slug": "debugging-notes-that-work",
    "title": "다시 쓸 수 있는 트러블슈팅 기록법",
    "subtitle": "에러 메시지보다 판단 과정을 남기는 방법",
    "description": "문제 상황, 가설, 검증 결과를 분리해 미래의 나도 재사용할 수 있는 디버깅 기록을 만듭니다.",
    "date": "2026-07-24",
    "category": "Troubleshooting",
    "tags": [
      "Debugging",
      "Documentation",
      "Workflow"
    ],
    "cover": "mint",
    "readTime": "5분",
    "displayDate": "2026.07.24",
    "contentHtml": "<h2 id=\"에러-메시지만-저장하면-부족하다\">에러 메시지만 저장하면 부족하다</h2>\n<p>같은 에러 메시지도 실행 환경과 입력값에 따라 원인이 달라질 수 있습니다. 따라서 메시지 자체보다 문제가 나타난 조건과 직전에 바뀐 내용을 먼저 기록해야 합니다.</p>\n<h2 id=\"네-단계로-기록하기\">네 단계로 기록하기</h2>\n<p>트러블슈팅 글은 상황, 가설, 검증, 결론의 순서로 작성하면 읽는 사람도 사고의 흐름을 따라가기 쉽습니다.</p>\n<ul><li><strong>상황:</strong> 기대한 결과와 실제 결과</li><li><strong>가설:</strong> 원인이라고 생각한 이유</li><li><strong>검증:</strong> 확인을 위해 실행한 최소한의 실험</li><li><strong>결론:</strong> 해결 방법과 다시 발생하지 않게 한 조치</li></ul>\n<h2 id=\"실패한-시도도-남긴다\">실패한 시도도 남긴다</h2>\n<p>해결에 직접 도움이 되지 않았던 시도는 같은 길을 반복하지 않게 해주는 중요한 정보입니다. 다만 시도한 이유와 틀렸다는 것을 확인한 근거를 함께 적어야 의미가 있습니다.</p>",
    "toc": [
      {
        "id": "에러-메시지만-저장하면-부족하다",
        "title": "에러 메시지만 저장하면 부족하다"
      },
      {
        "id": "네-단계로-기록하기",
        "title": "네 단계로 기록하기"
      },
      {
        "id": "실패한-시도도-남긴다",
        "title": "실패한 시도도 남긴다"
      }
    ]
  },
  {
    "slug": "small-tools-big-difference",
    "title": "작은 개발 도구가 만드는 큰 차이",
    "subtitle": "반복 작업을 줄이기 위한 도구 선택 기준",
    "description": "유행보다 문제의 빈도와 유지 비용을 기준으로 개발 도구를 선택하는 과정을 살펴봅니다.",
    "date": "2026-07-20",
    "category": "Review",
    "tags": [
      "Developer Tools",
      "Productivity",
      "Review"
    ],
    "cover": "violet",
    "readTime": "5분",
    "displayDate": "2026.07.20",
    "contentHtml": "<h2 id=\"도구보다-문제를-먼저-본다\">도구보다 문제를 먼저 본다</h2>\n<p>좋은 도구는 멋진 기능이 많은 도구가 아니라 자주 반복되는 불편을 안정적으로 줄여주는 도구입니다. 선택 전에는 해결하려는 문제를 한 문장으로 정의하는 것이 좋습니다.</p>\n<h2 id=\"세-가지-선택-기준\">세 가지 선택 기준</h2>\n<p>팀과 프로젝트의 상황에 따라 우선순위는 달라지지만, 도입 비용과 학습 비용, 그리고 제거 비용을 함께 비교하면 과도한 선택을 줄일 수 있습니다.</p>\n<ul><li>얼마나 자주 사용하는가</li><li>기존 흐름과 자연스럽게 연결되는가</li><li>나중에 제거하거나 교체하기 쉬운가</li></ul>\n<h2 id=\"사용-후에는-결과를-측정한다\">사용 후에는 결과를 측정한다</h2>\n<p>도입 당시의 기대와 실제 효과를 비교하면 다음 선택이 더 나아집니다. 체감뿐 아니라 작업 시간, 오류 횟수, 반복 단계 같은 관찰 가능한 기준을 남겨두면 좋습니다.</p>",
    "toc": [
      {
        "id": "도구보다-문제를-먼저-본다",
        "title": "도구보다 문제를 먼저 본다"
      },
      {
        "id": "세-가지-선택-기준",
        "title": "세 가지 선택 기준"
      },
      {
        "id": "사용-후에는-결과를-측정한다",
        "title": "사용 후에는 결과를 측정한다"
      }
    ]
  }
];
export const categories = ["All", "Tech", "Troubleshooting", "Review", "Life"] as const;
export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

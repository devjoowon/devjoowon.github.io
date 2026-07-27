# 뎁주의 테크블로그

`https://devjoowon.github.io`에서 운영할 개인 기술 블로그입니다.

## 새 글 작성

1. GitHub 저장소의 `source/content/posts` 폴더에서 기존 Markdown 파일 하나를 복사합니다.
2. 파일 상단의 제목, 설명, 날짜, 카테고리, 태그를 수정합니다.
3. 구분선 아래에 Markdown으로 본문을 작성합니다.
4. 변경 사항을 GitHub 저장소에 올리면 완성된 사이트가 저장소 최상단에 자동으로 배포됩니다.

지원 카테고리는 `Tech`, `Troubleshooting`, `Review`, `Life`입니다.
커버 색상은 `peach`, `blue`, `mint`, `violet` 중 하나를 사용합니다.

## 글 임시로 숨기기

글 상단의 frontmatter에 `draft: true`를 추가하면 해당 글은 홈 목록,
직접 주소, RSS, 사이트맵에서 제외됩니다. 다시 공개하려면 이 줄을
삭제하거나 `draft: false`로 변경합니다.

## 로컬 미리보기

```bash
npm install
npm run dev
```

표시되는 로컬 주소를 브라우저에서 열면 됩니다.

## 확인과 배포

```bash
npm test
npm run build:pages
```

`master` 또는 `main` 브랜치의 `source` 폴더에 변경 사항이 올라오면
`.github/workflows/deploy.yml`이 정적 사이트를 생성해 GitHub Pages에 배포합니다.

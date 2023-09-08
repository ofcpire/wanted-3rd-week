# 원티드 프리온보딩 프론트엔드 3주차 과제

## 개요

원티드 프리온보딩 프론트엔드 3주차 과제 리포지토리입니다. 검색어에 대한 추천 검색어를 API로부터 받아와 표시해주는 사이트입니다.

## 배포 주소

[https://wanted-3rd-week-ofcpire.netlify.app](https://wanted-3rd-week-ofcpire.netlify.app/)

배포는 prod 브랜치에서 빌드합니다.

## 실행 방법

main 브랜치를 사용합니다.

```
git clone https://github.com/ofcpire/wanted-3rd-week.git
cd wanted-3rd-week
npm install
npm start
```

## 목표 구현 방법
### API 호출에 대한 로컬 캐싱
- API에 요청 시 검색어와 검색 결과, 저장 시간을 `addCache` 함수를 사용하여 브라우저 로컬 스토리지에 객체 배열 형태로 저장합니다. 이후 새로운 검색어 입력 시 `findCache` 함수를 사용해 로컬스토리지에서 해당 검색어와 일치하는 query 키값을 가진 객체를 필터링하고, 존재하면 해당 객체를 가져옵니다.
- `setCacheFromStorage` 함수에서 객체에 저장된 시간과 현재 시간을 대조해 24시간 이상 지난 객체는 저장하지 않습니다.

### API 호출 횟수 감소
- 검색어에 대한 캐시가 존재한다면 API를 호출하지 않습니다.
- 정규식 `const testWord = /[ㄱ-ㅎㅏ-ㅣ]/;`을 사용해 현재 검색어에 완성형이 아닌 자음 혹은 모음이 존재하는지 검사하고 존재한다면 API를 호출하지 않습니다.
- `setTimeout`을 사용하여 API 호출에 0.3초의 디바운스 타임을 가지도록 하고, 시간 이내의 연속된 입력 시 clearTimeout을 사용해 API를 호출하지 않습니다.

### 키보드로 추천 검색어 목록 이동
- 위, 아래 방향키를 사용해 추천 검색어를 선택할 수 있습니다.
- 선택한 추천 검색어는 자동으로 검색창에 입력되므로 Enter 키나 버튼을 눌러 바로 검색할 수 있습니다.

## 프로젝트 구조

```
src
 ┣ components
 ┃ ┗ search
 ┃ ┃ ┣ Search.tsx
 ┃ ┃ ┣ SearchInput.tsx
 ┃ ┃ ┣ SearchReco.tsx
 ┃ ┃ ┗ SearchRecoItem.tsx
 ┣ context
 ┃ ┗ SearchContext.tsx
 ┣ hook
 ┃ ┣ useListVisible.ts
 ┃ ┗ useSearchList.ts
 ┣ lib
 ┃ ┣ api
 ┃ ┃ ┣ api.ts
 ┃ ┃ ┗ axios.ts
 ┃ ┗ utils
 ┃ ┃ ┗ cache.ts
 ┣ pages
 ┃ ┗ SearchPage.tsx
 ┣ router
 ┃ ┣ layout.tsx
 ┃ ┗ router.tsx
 ┣ styles
 ┃ ┣ global.ts
 ┃ ┣ globalStyle.ts
 ┃ ┗ searchStyle.ts
 ┣ types
 ┃ ┗ index.d.ts
 ┗ index.tsx
```

- `src`
  - `components` : 각 페이지에서 호출되는 세부 컴포넌트 폴더입니다.
  - `lib` : 개발 중 필요한 함수들을 정리하는 폴더입니다.
    - `api` : API를 호출하는 axios 인스턴스 및 함수 폴더입니다.
    - `utils` : 기타 개발 중 사용되는 함수 폴더입니다.
    	- `cache.ts` : api 호출 결과를 localStorage에 캐싱하는 함수들입니다. 
  - `context` : context와 provider 컴포넌트를 정리하는 폴더입니다.
    - `SearchContext.tsx` : useSearchList 훅을 편하게 사용하기 위한 context와 컴포넌트입니다.
  - `hook` : 리액트 커스텀훅 폴더입니다.
    - `useSearchList.tsx` : 검색어에 따른 결과 호출과 캐싱, 키보드 및 마우스 조작을 지원하는 훅입니다.
    - `useListVisible.tsx` : input의 focus 상태를 판별하는 훅입니다.
  - `pages` : Router에서 직접 호출되는 페이지 컴포넌트 폴더입니다.
  - `router` : react-router-dom에서 사용되는 라우터 객체와 레이아웃 컴포넌트입니다.
  - `styles` styled-components 컴포넌트를 정리하는 폴더입니다.
  	- `globalStyle` : 브라우저 css 리셋을 위한 createGlobalStyle 컴포넌트입니다. 
  - `type` : 전역으로 사용되는 typescript 타입 폴더입니다.
  - `index.tsx` : react 앱의 진입점입니다.

## 사용 스택

- react
- typescript
- react-router-dom
- axios
- styled-components
- eslint
- prettier


## 커밋 규칙

| Commit Type | Format                                                                   |
| ----------- | ------------------------------------------------------------------------ |
| feat        | 새로운 기능 추가                                                         |
| fix         | 버그 수정                                                                |
| docs        | 문서수정                                                                 |
| style       | 코드 스타일 변경(코드 포매팅,세미콜론 누락 등)</br>기능 수정이 없는 경우 |
| design      | 사용자 UI 디자인 변경(CSS 등)                                            |
| test        | 테스트 코드, 리팩토링 테스트 코드 추가                                   |
| refactor    | 코드 리팩토링                                                            |
| build       | 빌드 파일 수정                                                           |
| perf        | 성능 개선                                                                |
| chore       | 빌드 업무 수정, 패키지 매니저 수정(gitignore수정 등)                     |
| rename      | 파일 혹은 폴더명을 수정만 한 경우                                        |
| remove      | 파일을 삭제만 한 경우                                                    |# New Document
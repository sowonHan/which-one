# 🎫 Which One Demand On (WODO)

리액트 기반의 미디어 검색 사이트

## 🎬 WODO 프로젝트 소개

Which One Demand On(이하 WODO)는 실시간으로 개봉 중인 극장 영화의 박스오피스 순위를 조회하고 영화, 드라마, TV 프로그램, 배우에 대한 정보를 검색할 수 있는 웹사이트입니다.

WODO는 KOBIS(영화관입장권통합전산망)와 The Movie DB, JustWatch를 참고하여 제작되었습니다.

> **개발 기간** : 2023년 1월 16일 ~ 2023년 4월 11일

## ⚙ 기술 스택

`언어`

- Javascript
- HTML5
- CSS3 / Sass

`라이브러리`

- **프레임워크**
  - React
- **상태 관리 도구**
  - Redux
  - Redux Persist
- **비동기 작업 처리 도구**
  - Axios
  - Redux-thunk
- **라우팅 도구**
  - React Router 6.8.2
- **스타일 도구**
  - React Slick
  - Framer Motion
  - React Icons

## 🧩 소스

`OPEN API`

- [The Movie DB](https://developers.themoviedb.org/3/getting-started/introduction)
- [영화진흥위원회 (KOFIC)](https://www.kobis.or.kr/kobisopenapi/homepg/main/main.do)

`이미지 소스`

- [Unsplash](https://unsplash.com/ko)
- [Pexels](https://www.pexels.com/ko-kr/)

## 🗂 디렉터리 구조

<details>
  <summary>접기/펼치기</summary>

    📦which-one
    ┣ 📂public
    ┃ ┣ 📜favicon.ico
    ┃ ┣ 📜index.html
    ┃ ┣ 📜logo192px.png
    ┃ ┣ 📜manifest.json
    ┃ ┗ 📜robots.txt
    ┣ 📂src
    ┃ ┣ 📂components : 실제로 화면에 나타나는 프레젠테이셔널 컴포넌트 폴더
    ┃ ┃ ┣ 📂boxoffice
    ┃ ┃ ┃ ┣ 📜BoxOffice.js
    ┃ ┃ ┃ ┣ 📜List.js
    ┃ ┃ ┃ ┣ 📜ListItem.js
    ┃ ┃ ┃ ┗ 📜View.js
    ┃ ┃ ┣ 📂common_page_slide : 공용 슬라이드
    ┃ ┃ ┃ ┣ 📜Carousel.js
    ┃ ┃ ┃ ┣ 📜Loading.js
    ┃ ┃ ┃ ┣ 📜MovieCard.js
    ┃ ┃ ┃ ┗ 📜TvCard.js
    ┃ ┃ ┣ 📜Account.js
    ┃ ┃ ┣ 📜Cast.js
    ┃ ┃ ┣ 📜DetailMovie.js
    ┃ ┃ ┣ 📜DetailTv.js
    ┃ ┃ ┣ 📜Footer.js
    ┃ ┃ ┣ 📜GallerySlide.js
    ┃ ┃ ┣ 📜Header.js
    ┃ ┃ ┣ 📜IssueTv.js
    ┃ ┃ ┣ 📜Layout.js
    ┃ ┃ ┣ 📜MainTv.js
    ┃ ┃ ┣ 📜Movie.js
    ┃ ┃ ┣ 📜Recommendation.js
    ┃ ┃ ┣ 📜SearchBar.js
    ┃ ┃ ┣ 📜Similar.js
    ┃ ┃ ┗ 📜Streaming.js
    ┃ ┣ 📂containers : 리덕스 스토어와 데이터를 주고받는 컨테이너 컴포넌트
    ┃ ┃ ┣ 📜DetailMovieContainer.js
    ┃ ┃ ┣ 📜DetailTvContainer.js
    ┃ ┃ ┣ 📜IssueContainer.js
    ┃ ┃ ┣ 📜MovieContainer.js
    ┃ ┃ ┗ 📜TvContainer.js
    ┃ ┣ 📂hooks : 공용 기능
    ┃ ┃ ┣ 📜ScrollToTop.js : 페이지 이동 시 자동으로 브라우저 상단으로 이동
    ┃ ┃ ┗ 📜useApi.js : 렌더링 이후 액션 생성 함수 호출
    ┃ ┣ 📂images
    ┃ ┃ ┣ 📜footerLogo.png
    ┃ ┃ ┣ 📜headerLogo.png
    ┃ ┃ ┣ 📜main1_unsplash.jpg
    ┃ ┃ ┣ 📜main2_pexels.jpg
    ┃ ┃ ┣ 📜main3_pexels.jpg
    ┃ ┃ ┣ 📜main4_unsplash.jpg
    ┃ ┃ ┗ 📜main5_unsplash.jpg
    ┃ ┣ 📂lib : 오픈 API Axios 요청 및 공용 Thunk 함수
    ┃ ┃ ┣ 📜apiKofic.js
    ┃ ┃ ┣ 📜apiTMDB.js
    ┃ ┃ ┣ 📜config.js
    ┃ ┃ ┗ 📜createRequestThunk.js
    ┃ ┣ 📂modules : Ducks 패턴 리덕스 (액션타입 / 액션생성함수 / 초기 상태 / 리듀서)
    ┃ ┃ ┣ 📜account.js
    ┃ ┃ ┣ 📜detailsMovie.js
    ┃ ┃ ┣ 📜detailsTv.js
    ┃ ┃ ┣ 📜index.js
    ┃ ┃ ┣ 📜issue.js
    ┃ ┃ ┣ 📜loading.js
    ┃ ┃ ┣ 📜search.js
    ┃ ┃ ┣ 📜slideMovie.js
    ┃ ┃ ┗ 📜slideTv.js
    ┃ ┣ 📂pages
    ┃ ┃ ┣ 📜JoinPage.js
    ┃ ┃ ┣ 📜MainPage.js
    ┃ ┃ ┣ 📜MovieDetailPage.js
    ┃ ┃ ┣ 📜MoviePage.js
    ┃ ┃ ┣ 📜MyPage.js
    ┃ ┃ ┣ 📜NotFound.js
    ┃ ┃ ┣ 📜SignInPage.js
    ┃ ┃ ┣ 📜TvDetailPage.js
    ┃ ┃ ┗ 📜TvPage.js
    ┃ ┣ 📂styles
    ┃ ┃ ┣ 📜Account.scss
    ┃ ┃ ┣ 📜BoxOffice.scss
    ┃ ┃ ┣ 📜Card.scss
    ┃ ┃ ┣ 📜Carousel.scss
    ┃ ┃ ┣ 📜Cast.scss
    ┃ ┃ ┣ 📜DetailPage.scss
    ┃ ┃ ┣ 📜Footer.scss
    ┃ ┃ ┣ 📜GallerySlide.scss
    ┃ ┃ ┣ 📜Header.scss
    ┃ ┃ ┣ 📜IssueTv.scss
    ┃ ┃ ┣ 📜List.scss
    ┃ ┃ ┣ 📜ListItem.scss
    ┃ ┃ ┣ 📜MainPage.scss
    ┃ ┃ ┣ 📜MyPage.scss
    ┃ ┃ ┣ 📜NotFound.scss
    ┃ ┃ ┣ 📜SearchBar.scss
    ┃ ┃ ┣ 📜SignPage.scss
    ┃ ┃ ┣ 📜SlidePage.scss
    ┃ ┃ ┣ 📜Streaming.scss
    ┃ ┃ ┗ 📜View.scss
    ┃ ┣ 📜App.js
    ┃ ┣ 📜App.scss
    ┃ ┣ 📜index.css
    ┃ ┣ 📜index.js

</details>

## 주요 기능

## 개발 계기

## 트러블 슈팅

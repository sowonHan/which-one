# 🎫 Which One Demand On (WODO)

리액트 기반의 미디어 검색 사이트

## 🎬 WODO 프로젝트 소개

Which One Demand On(이하 WODO)는 실시간으로 개봉 중인 극장 영화의 박스오피스 순위를 조회하고 영화, 드라마, TV 프로그램, 배우에 대한 정보를 검색할 수 있는 웹사이트입니다.

WODO에서 '영화'는 극장 개봉 작품과 OTT 독점 공개 작품을 모두 포함합니다. 또한 'TV 프로그램'이란 드라마, 애니메이션, 예능, 다큐멘터리 등 공중파 TV와 OTT 서비스에서 제공하는 모든 프로그램을 의미합니다.

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

## 📽 소스

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
    ┃ ┣ 📂components : 실제로 화면에 나타나는 프레젠테이셔널 컴포넌트
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

## 📺 주요 기능

#### 회원가입, 로그인

- 입력된 이메일, 닉네임, 비밀번호가 요건에 맞는지 체크.
- 회원가입 성공 시 가입자 정보를 리덕스에서 관리. 리듀서의 상태값은 세션 스토리지에 보관되어, 웹페이지를 새로고침 했을 때 추가된 회원 정보가 사라지지 않는다.
- 로그인 시 마이페이지에 접근 가능.

#### 헤더의 검색창

- TMDB API를 연동하여 영화 제목, TV 프로그램 제목, 배우 이름을 검색창에 입력 시 검색 결과가 출력. (한국어 인식 가능)
- 검색 결과에서 작품명을 클릭 시 해당 작품의 상세 페이지로 연결. 배우명을 클릭 시 해당 배우에 대한 TMDB 웹페이지를 새 탭으로 연결.

#### 박스오피스

- 영화진흥위원회 API를 연동하여 전일과 지난 주 2가지를 기준으로 전국 영화관의 통합 박스오피스 순위를 출력.
- 순위표에 마우스를 올리면 각 작품에 대한 영화진흥위원회 기반의 상세 정보와 영화 포스터를 좌측에 표시.
- 영화 포스터 클릭 시 해당 작품의 상세 페이지로 연결.

#### 영화 메인 페이지

- TMDB API를 연동하여 일일 트렌드, 인기작, 평점이 높은 영화, (한국 기준) 개봉 예정인 영화를 각 카테고리마다 슬라이드(캐러셀) 형태로 출력.
- 포스터 혹은 제목 클릭 시 해당 작품의 상세 페이지로 연결.

#### TV 프로그램 메인 페이지

- TMDB API를 연동하여 일일 트렌드, 인기작, 평점이 높은 TV 프로그램을 각 카테고리마다 슬라이드 형태로 출력.
- 페이지 상단에는 그날의 트렌드 1위 작품을 소개.
- 포스터 혹은 제목 클릭 시 해당 작품의 상세 페이지로 연결.

#### 작품 상세 페이지

- 파라미터와 TMDB API를 연결시켜 지정한 작품에 대해 TMDB 기반의 상세 정보를 출력.
- 제공되는 내용
  > 포스터 · 작품명 · 원제목 · 개봉일 · 제작 국가 · 방송 채널 · 시즌 및 에피소드 수 · 방영일자 · 장르 · 연령 등급 · 러닝타임 · 평점 · 공식 홈페이지 · 시청 가능한 OTT 플랫폼 · 시놉시스 · 작품 키워드 · 출연진 · 제작자 · 관련 이미지 · 추천 작품
- 비슷한 작품과 추천 작품 클릭 시 해당 작품의 상세 페이지로 연결.

## 💡 개발 계기

JustWatch, 티비나누기, 키노라이츠와 같이 작품별로 OTT 서비스 여부를 확인할 수 있는 영화 정보 사이트를 제작하고 싶었습니다. TMDB 오픈 API가 JustWatch와 연결되어 있으므로 WODO 프로젝트는 이를 메인 데이터로 채택하고 있습니다.

그러나 TMDB는 접근성이 좋은 반면 전세계를 대상으로 하고있어 노출되는 작품의 국적 범위가 매우 넓습니다. 또한 사이트 이용자의 분포에 의해서 트렌드와 인기 작품 순위가 타국—주로 미국—을 기준으로 집계됩니다.

최대한 한국 트렌드에 근접하는 웹 서비스를 만들고 싶었기에, 사용자가 한국 극장가의 유행을 가늠할 수 있도록 영화진흥위원회 오픈 API를 병행하게 되었습니다.

## 💥 트러블 슈팅

<details>
  <summary>박스오피스 작품정보 출력 문제</summary>
  
영화진흥위원회에서 제공하는 JSON 데이터에는 영화 포스터 이미지가 없습니다. 그래서 아래와 같은 과정을 거쳐 이미지를 출력해야 했습니다.

1. 일별, 주간 박스오피스 순위를 모두 받아온다.
2. 두 JSON 데이터에서 중복되는 작품을 걸러내 새로운 목록을 만든다.
3. 이를 검색 API 요청에 쿼리스트링으로 넣어 TMDB에서 제공하는 영화 이미지를 받아온다.

1️⃣ 처음에는 서술한 과정 전체를 렌더링 직후 useEffect 함수 하나에서 일괄적으로 수행하도록 했으나, 테스트 결과 페이지에 정보가 출력되기까지 너무 오래 걸린다는 문제점을 발견했습니다. 빈 화면으로 로딩이 오래 지속되면 사용자가 기다리지 않고 스크롤을 내리리라 판단했습니다.

- 이를 보완하고자 기본 설정인 일별 박스오피스 순위를 먼저 받아와 출력시키고 그 동안 나머지 과정이 화면 뒤에서 진행되도록 useEffect 함수를 둘로 나누었습니다.
- 조건문만으로는 후반 작업인 두 번째 useEffect에서 useState 상태값을 받아오지 못해 동기적으로 처리할 수 없었습니다. 그래서 후반의 useEffect에는 setTimeout 함수를 사용하여 useState로 담은 일별 순위 상태값을 받아올 시간을 확보했습니다.

2️⃣ 공식 사이트에서 TMDB 검색을 테스트하여 검색 목록이 검색어와 유사한 순으로 나열된다는 경향성을 확인하고, 처음에는 검색 결과값 배열 중에서 첫 번째 요소의 이미지를 띄우도록 처리했습니다. 그런데 가끔씩 일부 항목에서 실제 영화와 다른 포스터가 출력되는 문제를 발견했습니다.

- 이를 보완하기 위해 실제 렌더링을 맡은 하위 컴포넌트 내에서 find 메소드를 사용해 한 차례 더 필터링하는 작업을 추가했습니다.
- 포스터 상태값과 작품정보 상태값을 비교하여 영화 제목이 완전히 일치하는 요소를 우선 리턴시키고, 만약 해당하는 요소가 없을 경우 차선책으로 검색 결과값의 첫 번째 요소를 리턴시키도록 했습니다.

</details>

<details>
  <summary>로그아웃 문제</summary>

- 사이트 회원에게만 헤더에 '반갑습니다, 닉네임 님'이라는 문구가 노출되는데, 이를 관리하기 위해서 Account 컴포넌트가 렌더링될 때마다 논리자료형 isSingIn의 값을 확인하는 조건 연산자를 거칩니다.
- 그런데 로그아웃 버튼을 눌러 값이 바뀌었을 때 컴포넌트가 재렌더링 되지 않아 페이지 전체가 렌더링 되지 않는 오류를 발견했습니다.
- 로그아웃 클릭 이벤트가 발생했을 때 signOut 액션 함수를 실행해 isSingIn 값을 바꾸고, 이후 window.location.reload()로 웹페이지를 다시 불러오게 함으로써 강제로 Account 컴포넌트를 재렌더링해 문제를 해결했습니다.

</details>

<details>
  <summary>연령등급 출력 문제</summary>

연령등급을 출력하기 위해서는 아래와 같은 데이터 검사 작업이 필요했습니다.

1. 해당 작품에 대한 한국의 연령등급 데이터 여부를 확인한다.
2. 한국 데이터 안에 등급 정보가 정확히 담겨있는지 검사한다.
3. 전체관람가와 특정 연령 이상 관람가를 구분해서 출력한다.
4. 한국 등급 데이터가 없을 경우, 제작 국가의 연령등급 데이터 여부를 확인한다.
5. 제작 국가마다 연령등급 표기 방식이 다르므로 이는 그대로 출력한다.
6. 제작 국가의 등급 데이터도 없을 경우, 연령등급 JSON 전체 데이터 중 첫 번째 국가를 차선책으로 출력한다.

- length 속성, find 메소드, 조건문을 이용하는 비교적 단순한 작업이었지만 검사 항목이 많다보니 코드 길이가 길었습니다. 이를 리턴 함수 내에서 표현식으로 작성하면 가독성이 지나치게 떨어지는 단점이 있었습니다.
- 이를 보완하고자 rate()라는 별도의 함수로 코드를 빼내고, 리턴 함수에서는 rate() 함수를 렌더링 시 곧장 실행시키도록 처리해 코드 가독성 문제를 해결했습니다. (영화 상세페이지 내 한국 개봉일 항목 역시 이와 동일합니다.)

</details>

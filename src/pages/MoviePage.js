import React from "react";

const MoviePage = () => {
  return (
    <>
      <header>헤더, 메뉴</header>
      <section>
        주간 박스오피스
        <div>왼쪽에 hover 시 영화 정보 간략하게 뜨기</div>
        <div>오른쪽에 박스오피스 목록</div>
      </section>
      <section>
        OTT 포함한 인기 영화
        <div>슬라이드</div>
      </section>
      <section>
        OTT 포함한 최신 영화
        <div>슬라이드</div>
      </section>
      <footer>푸터</footer>
    </>
  );
};

export default MoviePage;

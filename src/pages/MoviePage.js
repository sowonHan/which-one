import React from "react";

const MoviePage = () => {
  return (
    <>
      <header>헤더, 메뉴</header>
      <section>박스오피스 컴포넌트</section>
      {/* 슬라이드들 재사용되는지 확인해보고 안 되면 각각 컴포넌트 만들든가... */}
      <section>
        요즘 트렌드
        <div>슬라이드</div>
      </section>
      <section>
        인기 작품
        <div>슬라이드</div>
      </section>
      <section>
        평점이 높은 영화
        <div>슬라이드</div>
      </section>
      <section>
        계봉 예정
        <div>슬라이드</div>
      </section>
      <footer>푸터</footer>
    </>
  );
};

export default MoviePage;

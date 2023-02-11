import React from "react";
import TrailerContainer from "../containers/TrailerContainer";

const TVPage = () => {
  return (
    <>
      <header>헤더, 메뉴</header>
      <TrailerContainer />
      <section>
        요즘 트렌드
        <div>슬라이드</div>
      </section>
      <section>
        인기 작품
        <div>슬라이드</div>
      </section>
      <section>
        평점이 높은 TV 프로그램
        <div>슬라이드</div>
      </section>
      <footer>푸터</footer>
    </>
  );
};

export default TVPage;

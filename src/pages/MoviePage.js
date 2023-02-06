import React from "react";
import Header from "./../components/Header";
import MovieContainer from "../containers/MovieContainer";
import Footer from "./../components/Footer";

const MoviePage = () => {
  return (
    <>
      <Header />
      <section>박스오피스 컴포넌트</section>
      {/* 슬라이드들 재사용되는지 확인해보고 안 되면 각각 컴포넌트 만들든가... */}
      <MovieContainer />
      <Footer />
    </>
  );
};

export default MoviePage;

import React from "react";
import Header from "./../components/Header";
import MovieContainer from "../containers/MovieContainer";
import Footer from "./../components/Footer";

const MoviePage = () => {
  return (
    <>
      <Header />
      <section>박스오피스 컴포넌트</section>
      <MovieContainer />
      <Footer />
    </>
  );
};

export default MoviePage;

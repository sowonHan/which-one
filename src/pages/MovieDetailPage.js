import React from "react";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import DetailMovieContainer from "../containers/DetailMovieContainer";

const MovieDetailPage = () => {
  return (
    <>
      <Header />
      <DetailMovieContainer />
      <Footer />
    </>
  );
};

export default MovieDetailPage;

import React from "react";
import MovieContainer from "../containers/MovieContainer";
import BoxOffice from "./../components/boxoffice/BoxOffice";
import Footer from "./../components/Footer";

const MoviePage = () => {
  return (
    <>
      <BoxOffice />
      <MovieContainer />
      <Footer />
    </>
  );
};

export default MoviePage;

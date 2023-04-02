import React from "react";
import MovieContainer from "../containers/MovieContainer";
import BoxOffice from "./../components/boxoffice/BoxOffice";

const MoviePage = () => {
  return (
    <>
      <BoxOffice />
      <MovieContainer />
    </>
  );
};

export default MoviePage;

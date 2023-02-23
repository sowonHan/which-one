import React from "react";
import Movie from "../components/Movie";
import {
  getMovieTrending,
  getMoviePopular,
  getMovieTopRated,
  getMovieUpcoming,
} from "../modules/slideMovie";
import useApi from "../hooks/useApi";
import { connect } from "react-redux";

const MovieContainer = ({
  getMovieTrending,
  getMoviePopular,
  getMovieTopRated,
  getMovieUpcoming,
  trendingM,
  popularM,
  topM,
  upcoming,
  loadingTrend,
  loadingPopular,
  loadingTopM,
  loadingUpcoming,
}) => {
  const movie = "movie";

  useApi(getMovieTrending, movie);
  useApi(getMoviePopular, movie);
  useApi(getMovieTopRated, movie);
  useApi(getMovieUpcoming);

  return (
    <Movie
      trendingM={trendingM}
      popularM={popularM}
      topM={topM}
      upcoming={upcoming}
      loadingTrend={loadingTrend}
      loadingPopular={loadingPopular}
      loadingTopM={loadingTopM}
      loadingUpcoming={loadingUpcoming}
    />
  );
};

export default connect(
  ({ movieReducer, loadingReducer }) => ({
    trendingM: movieReducer.trendingM,
    popularM: movieReducer.popularM,
    topM: movieReducer.topM,
    upcoming: movieReducer.upcoming,
    loadingTrend: loadingReducer["tmdb/GET_MOVIE_TRENDING"],
    loadingPopular: loadingReducer["tmdb/GET_MOVIE_POPULAR"],
    loadingTopM: loadingReducer["tmdb/GET_MOVIE_TOP_RATED"],
    loadingUpcoming: loadingReducer["tmdb/GET_MOVIE_UPCOMING"],
  }),
  { getMovieTrending, getMoviePopular, getMovieTopRated, getMovieUpcoming }
)(MovieContainer);

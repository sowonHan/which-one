import React from "react";
import { connect } from "react-redux";
import Movie from "../components/Movie";
import {
  getMovieTrending,
  getMoviePopular,
  getMovieTopRated,
  getMovieUpcoming,
} from "../modules/slideMovie";
import useApi from "../hooks/useApi";

const MovieContainer = ({
  getMovieTrending,
  getMoviePopular,
  getMovieTopRated,
  getMovieUpcoming,
  trend,
  popular,
  top,
  upcoming,
  loadingTrend,
  loadingPopular,
  loadingTop,
  loadingUpcoming,
}) => {
  useApi(getMovieTrending);
  useApi(getMoviePopular);
  useApi(getMovieTopRated);
  useApi(getMovieUpcoming);

  return (
    <Movie
      trend={trend}
      popular={popular}
      top={top}
      upcoming={upcoming}
      loadingTrend={loadingTrend}
      loadingPopular={loadingPopular}
      loadingTop={loadingTop}
      loadingUpcoming={loadingUpcoming}
    />
  );
};

export default connect(
  ({ movieReducer, loadingReducer }) => ({
    trend: movieReducer.trend,
    popular: movieReducer.popular,
    top: movieReducer.top,
    upcoming: movieReducer.upcoming,
    loadingTrend: loadingReducer["movie/GET_TRENDING"],
    loadingPopular: loadingReducer["movie/GET_POPULAR"],
    loadingTopM: loadingReducer["movie/GET_TOP_RATED"],
    loadingUpcoming: loadingReducer["movie/GET_UPCOMING"],
  }),
  { getMovieTrending, getMoviePopular, getMovieTopRated, getMovieUpcoming }
)(MovieContainer);

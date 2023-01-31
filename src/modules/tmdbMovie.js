import * as api from "../lib/apiTMDB";
import createRequestThunk from "../lib/createRequestThunk";

// 액션타입
const GET_MOVIE_TRENDING = "tmdb/GET_MOVIE_TRENDING";
const GET_MOVIE_POPULAR = "tmdb/GET_MOVIE_POPULAR";
const GET_MOVIE_TOP_RATED = "tmdb/GET_MOVIE_TOP_RATED";
const GET_MOVIE_UPCOMING = "tmdb/GET_MOVIE_UPCOMING";

// 액션함수
const movie = "movie";

export const getMovieTrending = createRequestThunk(
  GET_MOVIE_TRENDING,
  api.getTrending
);
export const getMoviePopular = createRequestThunk(
  GET_MOVIE_POPULAR,
  api.getPopular
);
export const getMovieTopRated = createRequestThunk(
  GET_MOVIE_TOP_RATED,
  api.getTopRated
);
export const getMovieUpcoming = createRequestThunk(
  GET_MOVIE_UPCOMING,
  api.movieUpcoming
);

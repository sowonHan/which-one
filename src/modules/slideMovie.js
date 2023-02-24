import * as api from "../lib/apiTMDB";
import createRequestThunk from "../lib/createRequestThunk";

// 액션타입
const GET_TRENDING = "movie/GET_TRENDING";
const GET_TRENDING_SUCCESS = "movie/GET_TRENDING_SUCCESS";
const GET_POPULAR = "movie/GET_POPULAR";
const GET_POPULAR_SUCCESS = "movie/GET_POPULAR_SUCCESS";
const GET_TOP_RATED = "movie/GET_TOP_RATED";
const GET_TOP_RATED_SUCCESS = "movie/GET_TOP_RATED_SUCCESS";
const GET_UPCOMING = "movie/GET_UPCOMING";
const GET_UPCOMING_SUCCESS = "movie/GET_UPCOMING_SUCCESS";

// 액션함수
export const getMovieTrending = createRequestThunk(
  GET_TRENDING,
  api.getTrending,
  "movie"
);
export const getMoviePopular = createRequestThunk(
  GET_POPULAR,
  api.getPopular,
  "movie"
);
export const getMovieTopRated = createRequestThunk(
  GET_TOP_RATED,
  api.getTopRated,
  "movie"
);
export const getMovieUpcoming = createRequestThunk(
  GET_UPCOMING,
  api.movieUpcoming
);

// 초기 상태값
const initialState = {
  trend: null,
  popular: null,
  top: null,
  upcoming: null,
};

// 리듀서
const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRENDING_SUCCESS:
      return {
        ...state,
        trend: action.payload,
      };
    case GET_POPULAR_SUCCESS:
      return {
        ...state,
        popular: action.payload,
      };
    case GET_TOP_RATED_SUCCESS:
      return {
        ...state,
        top: action.payload,
      };
    case GET_UPCOMING_SUCCESS:
      return {
        ...state,
        upcoming: action.payload,
      };
    default:
      return state;
  }
};

export default movieReducer;

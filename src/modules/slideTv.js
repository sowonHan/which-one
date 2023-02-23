import * as api from "../lib/apiTMDB";
import createRequestThunk from "../lib/createRequestThunk";

// 액션타입
const GET_TV_TRENDING = "tv/GET_TV_TRENDING";
const GET_TV_TRENDING_SUCCESS = "tv/GET_TV_TRENDING_SUCCESS";
const GET_TV_POPULAR = "tv/GET_TV_POPULAR";
const GET_TV_POPULAR_SUCCESS = "tv/GET_TV_POPULAR_SUCCESS";
const GET_TV_TOP_RATED = "tv/GET_TV_TOP_RATED";
const GET_TV_TOP_RATED_SUCCESS = "tv/GET_TV_TOP_RATED_SUCCESS";

// 액션함수
export const getTvTrending = createRequestThunk(
  GET_TV_TRENDING,
  api.getTrending
);
export const getTvPopular = createRequestThunk(GET_TV_POPULAR, api.getPopular);
export const getTvTopRated = createRequestThunk(
  GET_TV_TOP_RATED,
  api.getTopRated
);

// 초깃값 및 리듀서
const initialState = {
  trendingTv: null,
  popularTv: null,
  topTv: null,
};

const TvReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TV_TRENDING_SUCCESS:
      return {
        ...state,
        trendingTv: action.payload,
      };
    case GET_TV_POPULAR_SUCCESS:
      return {
        ...state,
        popularTv: action.payload,
      };
    case GET_TV_TOP_RATED_SUCCESS:
      return {
        ...state,
        topTv: action.payload,
      };
    default:
      return state;
  }
};

export default TvReducer;

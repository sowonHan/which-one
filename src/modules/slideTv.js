import * as api from "../lib/apiTMDB";
import createRequestThunk from "../lib/createRequestThunk";

// 액션타입
const GET_TRENDING = "slideTv/GET_TRENDING";
const GET_TRENDING_SUCCESS = "slideTv/GET_TRENDING_SUCCESS";
const GET_POPULAR = "slideTv/GET_POPULAR";
const GET_POPULAR_SUCCESS = "slideTv/GET_POPULAR_SUCCESS";
const GET_TOP_RATED = "slideTv/GET_TOP_RATED";
const GET_TOP_RATED_SUCCESS = "slideTv/GET_TOP_RATED_SUCCESS";

// 액션함수
export const getTvTrending = createRequestThunk(
  GET_TRENDING,
  api.getTrending,
  "tv"
);
export const getTvPopular = createRequestThunk(
  GET_POPULAR,
  api.getPopular,
  "tv"
);
export const getTvTopRated = createRequestThunk(
  GET_TOP_RATED,
  api.getTopRated,
  "tv"
);

// 초깃값 및 리듀서
const initialState = {
  trend: null,
  popular: null,
  top: null,
};

const TvReducer = (state = initialState, action) => {
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
    default:
      return state;
  }
};

export default TvReducer;

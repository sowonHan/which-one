import * as api from "../lib/apiTMDB";
import createRequestThunk from "../lib/createRequestThunk";

// 액션타입
const GET_TV_TRENDING = "tv2/GET_TV_TRENDING";
const GET_TV_TRENDING_SUCCESS = "tv2/GET_TV_TRENDING_SUCCESS";
const GET_TV_TRENDING_FAILURE = "tv2/GET_TV_TRENDING_FAILURE";
const GET_TV_POPULAR = "tv2/GET_TV_POPULAR";
const GET_TV_POPULAR_SUCCESS = "tv2/GET_TV_POPULAR_SUCCESS";
const GET_TV_POPULAR_FAILURE = "tv2/GET_TV_POPULAR_FAILURE";
const GET_TV_TOP_RATED = "tv2/GET_TV_TOP_RATED";
const GET_TV_TOP_RATED_SUCCESS = "tv2/GET_TV_TOP_RATED_SUCCESS";
const GET_TV_TOP_RATED_FAILURE = "tv2/GET_TV_TOP_RATED_FAILURE";
// 액션함수
export const getTvTrending2 = createRequestThunk(
  GET_TV_TRENDING,
  api.getTrending,
  "tv"
);
export const getTvPopular2 = createRequestThunk(
  GET_TV_POPULAR,
  api.getPopular,
  "tv"
);
export const getTvTopRated2 = createRequestThunk(
  GET_TV_TOP_RATED,
  api.getTopRated,
  "tv"
);

// 초기 상태값
const initialState = {
  tr: null,
  p: null,
  top: null,
};

// 리듀서
const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TV_TRENDING_SUCCESS:
      return {
        ...state,
        tr: action.payload,
      };
    case GET_TV_POPULAR_SUCCESS:
      return {
        ...state,
        p: action.payload,
      };
    case GET_TV_TOP_RATED_SUCCESS:
      return {
        ...state,
        top: action.payload,
      };
    default:
      return state;
  }
};

export default testReducer;

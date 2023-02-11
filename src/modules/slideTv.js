import * as api from "../lib/apiTMDB";
import createRequestThunk from "../lib/createRequestThunk";

// 액션타입
const GET_TV_TRENDING = "tmdb/GET_TV_TRENDING";
const GET_TV_POPULAR = "tmdb/GET_TV_POPULAR";
const GET_TV_TOP_RATED = "tmdb/GET_TV_TOP_RATED";

// 액션함수
const tv = "tv";

export const getTvTrending = createRequestThunk(
  GET_TV_TRENDING,
  api.getTrending
);
export const getTvPopular = createRequestThunk(GET_TV_POPULAR, api.getPopular);
export const getTvTopRated = createRequestThunk(
  GET_TV_TOP_RATED,
  api.getTopRated
);

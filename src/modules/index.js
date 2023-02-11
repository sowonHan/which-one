import { combineReducers } from "redux";
import movieReducer from "./tmdbMovie";
import loadingReducer from "./loading";
import trailerReducer from "./promoTv";

const rootReducer = combineReducers({
  movieReducer,
  loadingReducer,
  trailerReducer,
});

export default rootReducer;

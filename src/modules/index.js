import { combineReducers } from "redux";
import loadingReducer from "./loading";
import movieReducer from "./slideMovie";
import TvReducer from "./slideTv";
import issueReducer from "./issue";
import movieDetail from "./detailsMovie";
import tvDetail from "./detailsTv";
import searchReducer from "./search";

const rootReducer = combineReducers({
  loadingReducer,
  movieReducer,
  TvReducer,
  issueReducer,
  movieDetail,
  tvDetail,
  searchReducer,
});

export default rootReducer;

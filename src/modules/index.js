import { combineReducers } from "redux";
import loadingReducer from "./loading";
import movieReducer from "./slideMovie";
import TvReducer from "./slideTv";
import issueReducer from "./issue";
import movieDetail from "./detailsMovie";
import tvDetail from "./detailsTv";
import searchReducer from "./search";
import accountReducer from "./account";

const rootReducer = combineReducers({
  loadingReducer,
  movieReducer,
  TvReducer,
  issueReducer,
  movieDetail,
  tvDetail,
  searchReducer,
  accountReducer,
});

export default rootReducer;

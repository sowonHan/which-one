import { combineReducers } from "redux";
import loadingReducer from "./loading";
import movieReducer from "./slideMovie";
import TvReducer from "./slideTv";
import issueReducer from "./issue";
import movieDetail from "./detailsMovie";

const rootReducer = combineReducers({
  loadingReducer,
  movieReducer,
  TvReducer,
  issueReducer,
  movieDetail,
});

export default rootReducer;

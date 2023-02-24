import { combineReducers } from "redux";
import loadingReducer from "./loading";
import movieReducer from "./slideMovie";
import TvReducer from "./slideTv";
import issueReducer from "./issue";

const rootReducer = combineReducers({
  loadingReducer,
  movieReducer,
  TvReducer,
  issueReducer,
});

export default rootReducer;

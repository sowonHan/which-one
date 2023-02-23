import { combineReducers } from "redux";
import movieReducer from "./slideMovie";
import loadingReducer from "./loading";
import trailerReducer from "./trailer";
import TvReducer from "./slideTv";
// import boxOfficeReducer from "./boxoffice";
import boxReducer from "./boxOffice2";

const rootReducer = combineReducers({
  loadingReducer,
  movieReducer,
  trailerReducer,
  TvReducer,
  boxReducer,
});

export default rootReducer;

import { combineReducers } from "redux";
import movieReducer from "./tmdbMovie";
import loadingReducer from "./loading";
import trailerReducer from "./trailer";
// import boxOfficeReducer from "./boxoffice";
import boxReducer from "./boxOffice2";

const rootReducer = combineReducers({
  movieReducer,
  loadingReducer,
  trailerReducer,
  boxReducer,
});

export default rootReducer;

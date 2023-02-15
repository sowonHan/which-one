import { combineReducers } from "redux";
import movieReducer from "./tmdbMovie";
import loadingReducer from "./loading";
import trailerReducer from "./trailer";
import boxOfficeReducer from "./boxoffice";

const rootReducer = combineReducers({
  movieReducer,
  loadingReducer,
  trailerReducer,
  boxOfficeReducer,
});

export default rootReducer;

import { combineReducers } from "redux";
import movieReducer from "./tmdbMovie";
import loadingReducer from "./loading";

const rootReducer = combineReducers({
  movieReducer,
  loadingReducer,
});

export default rootReducer;

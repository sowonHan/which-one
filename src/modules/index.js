import { combineReducers } from "redux";
import sampleReducer from "./movie";

const rootReducer = combineReducers({
  sampleReducer,
});

export default rootReducer;

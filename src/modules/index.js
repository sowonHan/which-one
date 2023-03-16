import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import loadingReducer from "./loading";
import movieReducer from "./slideMovie";
import TvReducer from "./slideTv";
import issueReducer from "./issue";
import movieDetail from "./detailsMovie";
import tvDetail from "./detailsTv";
import searchReducer from "./search";
import accountReducer from "./account";

const persistConfig = {
  key: "root",
  storage: storageSession,
  whitelist: ["accountReducer"],
};

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

export default persistReducer(persistConfig, rootReducer);

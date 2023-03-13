import { searchAll } from "../lib/apiTMDB";
import { startLoading, finishLoading } from "./loading";

// 액션 타입
const GET_SEARCH = "search/GET_SEARCH";
const GET_SEARCH_SUCCESS = "search/GET_SEARCH_SUCCESS";
const GET_SEARCH_FAILURE = "search/GET_SEARCH_FAILURE";
const GET_SEARCH_INIT = "search/GET_SEARCH_INIT";

// 액션함수
export const getSerachInit = () => ({ type: GET_SEARCH_INIT });

// thunk 함수
export const getSearch = (query) => async (dispatch) => {
  dispatch({ type: GET_SEARCH });
  dispatch(startLoading(GET_SEARCH));
  try {
    const response = await searchAll(query);
    const search = response.data;
    dispatch({
      type: GET_SEARCH_SUCCESS,
      search: search,
    });
    dispatch(finishLoading(GET_SEARCH));
  } catch (e) {
    dispatch({
      type: GET_SEARCH_FAILURE,
      payload: e,
      error: true,
    });
    dispatch(finishLoading(GET_SEARCH));
    throw e;
  }
};

// 초깃값 및 리듀서
const initialState = {
  search: null,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCH_SUCCESS:
      return {
        ...state,
        search: action.search,
      };
    case GET_SEARCH_INIT:
      return {
        ...state,
        search: null,
      };
    default:
      return state;
  }
};

export default searchReducer;

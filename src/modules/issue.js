import * as api from "../lib/apiTMDB";
import { startLoading, finishLoading } from "./loading";

// 액션타입
const GET_ISSUE = "issue/GET_ISSUE";
const GET_ISSUE_SUCCESS = "issue/GET_ISSUE_SUCCESS";
const GET_ISSUE_FAILURE = "issue/GET_ISSUE_FAILURE";

// thunk 함수
export const getIssue = () => async (dispatch) => {
  dispatch({ type: GET_ISSUE });
  dispatch(startLoading(GET_ISSUE));
  try {
    const trend = await api.getTrending("tv");
    const issue = await trend.data.results[0];
    dispatch({
      type: GET_ISSUE_SUCCESS,
      issue: issue,
    });
    dispatch(finishLoading(GET_ISSUE));
  } catch (e) {
    dispatch({
      type: GET_ISSUE_FAILURE,
      payload: e,
      error: true,
    });
    dispatch(finishLoading(GET_ISSUE));
    throw e;
  }
};

// 초깃값 및 리듀서
const initialState = {
  issue: null,
};

const issueReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ISSUE_SUCCESS:
      return {
        ...state,
        issue: action.issue,
      };
    default:
      return state;
  }
};

export default issueReducer;

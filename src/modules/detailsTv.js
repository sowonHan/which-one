import { tvDetails } from "../lib/apiTMDB";
import { startLoading, finishLoading } from "./loading";

// 액션타입
const GET_DETAILS = "detailTv/GET_DETAILS";
const GET_DETAILS_SUCCESS = "detailTv/GET_DETAILS_SUCCESS";
const GET_DETAILS_FAILURE = "detailTv/GET_DETAILS_FAILURE";

// thunk함수
export const getDetails = (id) => async (dispatch) => {
  dispatch({ type: GET_DETAILS });
  dispatch(startLoading(GET_DETAILS));
  try {
    const response = await tvDetails(id);
    const details = response.data;
    dispatch({
      type: GET_DETAILS_SUCCESS,
      details: details,
    });
    dispatch(finishLoading(GET_DETAILS));
  } catch (e) {
    dispatch({
      type: GET_DETAILS_FAILURE,
      payload: e,
      error: true,
    });
    dispatch(finishLoading(GET_DETAILS));
    throw e;
  }
};

// 초깃값 및 리듀서
const initialState = {
  details: null,
};

const tvDetail = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAILS_SUCCESS:
      return {
        ...state,
        details: action.details,
      };
    default:
      return state;
  }
};

export default tvDetail;

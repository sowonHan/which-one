import * as api from "../lib/apiTMDB";
import { startLoading, finishLoading } from "./loading";

// 액션타입
const GET_TRAILER = "triailer/GET_TRAILER";
const GET_TRAILER_SUCCESS = "triailer/GET_TRAILER_SUCCESS";
const GET_TRAILER_FAILURE = "triailer/GET_TRAILER_FAILURE";

// thunk 함수
export const getTrailer = () => async (dispatch) => {
  dispatch({ type: GET_TRAILER });
  dispatch(startLoading(GET_TRAILER));
  try {
    const trend = await api.getTrending("tv");
    const program = await trend.data.results[0];
    const video = await api.getVideo(program.id);
    const trailer = await video.data.results.find(
      (element) => element.type === "Trailer"
    );
    dispatch({
      type: GET_TRAILER_SUCCESS,
      program: program,
      trailer: trailer,
    });
    dispatch(finishLoading(GET_TRAILER));
  } catch (e) {
    dispatch({
      type: GET_TRAILER_FAILURE,
      payload: e,
      error: true,
    });
    dispatch(finishLoading(GET_TRAILER));
    throw e;
  }
};

// 초깃값 및 리듀서
const initialState = {
  program: null,
  trailer: null,
};

const trailerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRAILER_SUCCESS:
      return {
        ...state,
        program: action.program,
        trailer: action.trailer,
      };
    default:
      return state;
  }
};

export default trailerReducer;

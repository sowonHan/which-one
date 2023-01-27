import * as api from "../lib/apiTMDB";
import createRequestThunk from "../lib/createRequestThunk";

// 액션 타입 선언
const GET_POPULAR = "movie/GET_POPULAR";
const GET_POPULAR_SUCCESS = "movie/GET_POPULAR_SUCCESS";
const GET_POPULAR_FAILURE = "movie/GET_POPULAR_FAILURE";

// thunk 액션 함수 생성
// export const getPopular = () => async (dispatch) => {
//   dispatch({ type: GET_POPULAR });
//   try {
//     const response = await api.getPopular("movie");
//     dispatch({
//       type: GET_POPULAR_SUCCESS,
//       payload: response.data,
//     });
//   } catch (e) {
//     dispatch({
//       type: GET_POPULAR_FAILURE,
//       payload: e,
//       error: true,
//     });
//     throw e;
//   }
// };

// 초기 상태 선언
const initialState = {
  loading: false,
  popular: null,
};

// 리듀서
const sampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POPULAR:
      return {
        ...state,
        loading: true,
      };
    case GET_POPULAR_SUCCESS:
      return {
        ...state,
        loading: false,
        popular: action.payload,
      };
    case GET_POPULAR_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default sampleReducer;

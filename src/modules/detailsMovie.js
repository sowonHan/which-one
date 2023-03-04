import { movieDetails } from "../lib/apiTMDB";
import createRequestThunk from "../lib/createRequestThunk";

// 액션타입
const GET_DETAILS = "detailMovie/GET_DETAILS";
const GET_DETAILS_SUCCESS = "detailMovie/GET_DETAILS_SUCCESS";

// thunk함수
export const getDetails = createRequestThunk(GET_DETAILS, movieDetails);

// 초깃값 및 리듀서
const initialState = {
  details: null,
};

const movieDetail = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAILS_SUCCESS:
      return {
        ...state,
        details: action.payload,
      };
    default:
      return state;
  }
};

export default movieDetail;

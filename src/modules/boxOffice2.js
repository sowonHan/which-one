// import { boxOfficeMainDaily } from "../lib/apiKofic";
import { axiosKofic } from "../lib/config";
// import createRequestThunk from "../lib/createRequestThunk";

const GET_BOXOFFICE = "boxOffice/GET_BOXOFFICE";
const GET_BOXOFFICE_SUCCESS = "boxOffice/GET_BOXOFFICE_SUCCESS";
const GET_BOXOFFICE_ERROR = "boxOffice/GET_BOXOFFICE_ERROR";

// export const getBox = createRequestThunk(GET_BOXOFFICE, boxOfficeMainDaily);

export const getBox = () => async (dispatch) => {
  dispatch({ type: GET_BOXOFFICE }); // 요청이 시작됨
  try {
    const response = await axiosKofic.get(
      "/boxoffice/searchDailyBoxOfficeList.json",
      {
        params: {
          targetDt: "20230223",
        },
      }
    ); // API 호출
    const result = response.data.boxOfficeResult;
    dispatch({ type: GET_BOXOFFICE_SUCCESS, result }); // 성공
  } catch (e) {
    dispatch({ type: GET_BOXOFFICE_ERROR, error: e }); // 실패
  }
};

const initialState = {
  result: null,
};

const boxReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOXOFFICE_SUCCESS:
      return {
        ...state,
        result: action.payload,
      };
    default:
      return state;
  }
};

export default boxReducer;

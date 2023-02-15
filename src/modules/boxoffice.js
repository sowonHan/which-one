import * as api from "../lib/apiKofic";
import { startLoading, finishLoading } from "./loading";
import { searchMovie } from "../lib/apiTMDB";

// 액션타입
const GET_BOXOFFICE = "boxOffice/GET_BOXOFFICE";
const GET_BOXOFFICE_SUCCEESS = "boxOffice/GET_BOXOFFICE_SUCCEESS";
const GET_BOXOFFICE_FAILURE = "boxOffice/GET_BOXOFFICE_FAILURE";

// thunk 함수
export const getBoxOffice = () => async (dispatch) => {
  dispatch({ type: GET_BOXOFFICE });
  dispatch(startLoading(GET_BOXOFFICE));
  try {
    const weekMain = await api.boxOfficeDailyMain().data.weeklyBoxOfficeList;
    const weekArt = await api.boxOfficeWeeklyArt().data.weeklyBoxOfficeList;
    const dayMain = await api.boxOfficeDailyMain().data.dailyBoxOfficeList;
    const dayArt = await api.boxOfficeDailyArt().data.dailyBoxOfficeList;
    const response = [...weekMain, ...weekArt, ...dayMain, ...dayArt];
    const nameList = response.filter((value, idx, arr) => {
      return arr.findIndex((item) => item.movieNm === value.movieNm) === idx;
    });
    const getPoster = async () => {
      const search = await Promise.all(
        nameList.map((item) => {
          return searchMovie(item.movieNm).data;
        })
      );
      return search;
    };
    const poster = getPoster();
    dispatch({
      type: GET_BOXOFFICE_SUCCEESS,
      weekMain: weekMain,
      weekArt: weekArt,
      dayMain: dayMain,
      dayArt: dayArt,
      detail: nameList,
      poster: poster,
    });
  } catch (e) {
    dispatch({
      type: GET_BOXOFFICE_FAILURE,
      payload: e,
      error: true,
    });
    dispatch(finishLoading(GET_BOXOFFICE));
    throw e;
  }
};

// 초기 상태값
const initialState = {
  weekMain: null,
  weekArt: null,
  dayMain: null,
  dayArt: null,
  detail: null,
  poster: null,
};

// 리듀서
const boxOfficeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOXOFFICE_SUCCEESS:
      return {
        ...state,
        weekMain: action.weekMain,
        weekArt: action.weekArt,
        dayMain: action.dayMain,
        dayArt: action.dayArt,
        detail: action.detail,
        poster: action.poster,
      };
    default:
      return state;
  }
};

export default boxOfficeReducer;

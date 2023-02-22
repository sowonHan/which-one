import { axiosKofic } from "../lib/config";
import { paramDaily, paramWeekly } from "../lib/apiKofic";
import { startLoading, finishLoading } from "./loading";
import { searchMovie } from "../lib/apiTMDB";

// 액션타입
// const GET_BOXOFFICE = "boxOffice/GET_BOXOFFICE";
// const GET_BOXOFFICE_SUCCEESS = "boxOffice/GET_BOXOFFICE_SUCCEESS";
// const GET_BOXOFFICE_FAILURE = "boxOffice/GET_BOXOFFICE_FAILURE";

// thunk 함수
// export const getBoxOffice = () => async (dispatch) => {
//   dispatch({ type: GET_BOXOFFICE });
//   dispatch(startLoading(GET_BOXOFFICE));
//   try {
//     const response = await axiosKofic.get(
//       "/boxoffice/searchDailyBoxOfficeList.json",
//       {
//         params: {
//           targetDt: 20230221,
//         },
//       }
//     );
//     console.log(response);
//     const mainDay = await response.data;
//     console.log(mainDay);
//     dispatch({
//       type: GET_BOXOFFICE_SUCCEESS,
//       mainDay: mainDay,
//     });
//     dispatch(finishLoading(GET_BOXOFFICE));
//   } catch (e) {
//     dispatch({
//       type: GET_BOXOFFICE_FAILURE,
//       payload: e,
//       error: true,
//     });
//     dispatch(finishLoading(GET_BOXOFFICE));
//     throw e;
//   }
// };

// export const getBoxOffice = () => async (dispatch) => {
//   dispatch({ type: GET_BOXOFFICE });
//   dispatch(startLoading(GET_BOXOFFICE));
//   try {
//     let now = new Date();
//     const year = now.getFullYear();
//     const month = ("0" + (now.getMonth() + 1)).slice(-2);
//     const dateDaily = new Date(now.setDate(now.getDate() - 1)).getDate();
//     const paramDaily = year + month + dateDaily;

//     const mainDay = await api.boxOfficeMainDaily().data;
//     console.log("테스트1" + mainDay);
//     console.log("테스트2" + paramDaily);
//     // const mainWeek = await boxOfficeMainWeekly().data;
//     // const artDay = await boxOfficeArtDaily().data;
//     // const artWeek = await boxOfficeArtWeekly().data;
//     // const [mainDay, mainWeek, artDay, artWeek] = await Promise.all([
//     //   boxOfficeMainDaily(paramDaily).data,
//     //   boxOfficeMainWeekly(paramWeekly).data,
//     //   boxOfficeArtDaily(paramDaily).data,
//     //   boxOfficeArtWeekly(paramWeekly).data,
//     // ]);
//     // const response = [
//     //   ...mainDay.boxOfficeResult.dailyBoxOfficeList,
//     //   ...mainWeek.boxOfficeResult.weeklyBoxOfficeList,
//     //   ...artDay.boxOfficeResult.dailyBoxOfficeList,
//     //   ...artWeek.boxOfficeResult.weeklyBoxOfficeList,
//     // ];
//     // const nameList = response.filter((value, idx, arr) => {
//     //   return arr.findIndex((item) => item.movieNm === value.movieNm) === idx;
//     // });
//     // const detail = await Promise.all(
//     //   nameList.map((item) => {
//     //     return boxOfficeDetail(item.movieCd).data;
//     //   })
//     // );
//     // const poster = await Promise.all(
//     //   nameList.map((item) => {
//     //     return searchMovie(item.movieNm).data;
//     //   })
//     // );
//     // const getPoster = async () => {
//     //   const search = await Promise.all(
//     //     nameList.map((item) => {
//     //       return searchMovie(item.movieNm).data;
//     //     })
//     //   );
//     //   return search;
//     // };
//     // const poster = getPoster();
//     dispatch({
//       type: GET_BOXOFFICE_SUCCEESS,
//       mainDay: mainDay,
//       // mainWeek: mainWeek,
//       // artDay: artDay,
//       // artWeek: artWeek,
//       // detail: detail,
//       // poster: poster,
//     });
//     dispatch(finishLoading(GET_BOXOFFICE));
//   } catch (e) {
//     dispatch({
//       type: GET_BOXOFFICE_FAILURE,
//       payload: e,
//       error: true,
//     });
//     dispatch(finishLoading(GET_BOXOFFICE));
//     throw e;
//   }
// };

// 초기 상태값
// const initialState = {
//   mainDay: null,
//   mainWeek: null,
//   artDay: null,
//   artWeek: null,
//   detail: null,
//   poster: null,
// };

// 리듀서
// const boxOfficeReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case GET_BOXOFFICE_SUCCEESS:
//       return {
//         ...state,
//         mainDay: action.mainDay,
//         mainWeek: action.mainWeek,
//         artDay: action.artDay,
//         artWeek: action.artWeek,
//         detail: action.detail,
//         poster: action.poster,
//       };
//     default:
//       return state;
//   }
// };

// export default boxOfficeReducer;

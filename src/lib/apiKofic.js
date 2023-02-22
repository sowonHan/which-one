import { axiosKofic } from "./config";

let now1 = new Date();
let now2 = new Date();
const year = now1.getFullYear();
const month = ("0" + (now1.getMonth() + 1)).slice(-2);
const dateWeekly = new Date(now1.setDate(now1.getDate() - 7)).getDate();
const dateDaily = new Date(now2.setDate(now2.getDate() - 1)).getDate();
export const paramWeekly = year + month + dateWeekly;
export const paramDaily = year + month + dateDaily;

export const boxOfficeMainDaily = () => {
  axiosKofic.get("/boxoffice/searchDailyBoxOfficeList.json", {
    params: {
      targetDt: "20230221",
    },
  });
};

// export const boxOfficeMainWeekly = () => {
//   let now = new Date();
//   const year = now.getFullYear();
//   const month = ("0" + (now.getMonth() + 1)).slice(-2);
//   const dateWeekly = new Date(now.setDate(now.getDate() - 7)).getDate();
//   const paramWeekly = year + month + dateWeekly;

//   axiosKofic.get("/boxoffice/searchWeeklyBoxOfficeList.json", {
//     params: {
//       targetDt: paramWeekly,
//       weekGb: "0",
//     },
//   });
// };

// export const boxOfficeArtDaily = () => {
//   let now = new Date();
//   const year = now.getFullYear();
//   const month = ("0" + (now.getMonth() + 1)).slice(-2);
//   const dateDaily = new Date(now.setDate(now.getDate() - 1)).getDate();
//   const paramDaily = year + month + dateDaily;

//   axiosKofic.get("/boxoffice/searchDailyBoxOfficeList.json", {
//     params: {
//       targetDt: paramDaily,
//       multiMovieYn: "Y",
//     },
//   });
// };

// export const boxOfficeArtWeekly = () => {
//   let now = new Date();
//   const year = now.getFullYear();
//   const month = ("0" + (now.getMonth() + 1)).slice(-2);
//   const dateWeekly = new Date(now.setDate(now.getDate() - 7)).getDate();
//   const paramWeekly = year + month + dateWeekly;

//   axiosKofic.get("/boxoffice/searchWeeklyBoxOfficeList.json", {
//     params: {
//       targetDt: paramWeekly,
//       multiMovieYn: "Y",
//       weekGb: "0",
//     },
//   });
// };

export const boxOfficeDetail = (id) =>
  axiosKofic.get("/movie/searchMovieInfo.json", {
    params: {
      movieCd: id,
    },
  });

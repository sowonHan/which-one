import { axiosKofic } from "./config";

let now1 = new Date();
let now2 = new Date();
const year = now1.getFullYear();
const month = ("0" + (now1.getMonth() + 1)).slice(-2);
const dateWeekly = new Date(now1.setDate(now1.getDate() - 7)).getDate();
const dateDaily = new Date(now2.setDate(now2.getDate() - 1)).getDate();

export const paramWeekly = year + month + dateWeekly;
export const paramDaily = year + month + dateDaily;

export const boxOfficeDetail = (id) =>
  axiosKofic.get("/movie/searchMovieInfo.json", {
    params: {
      movieCd: id,
    },
  });

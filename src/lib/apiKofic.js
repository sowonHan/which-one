import { axiosKofic } from "./config";

let dayAgo = new Date(Date.parse(new Date()) - 1 * 1000 * 60 * 60 * 24);
let weekAgo = new Date(Date.parse(new Date()) - 7 * 1000 * 60 * 60 * 24);

export const paramDaily =
  dayAgo.getFullYear() +
  ("0" + (dayAgo.getMonth() + 1)).slice(-2) +
  ("00" + dayAgo.getDate()).slice(-2);

export const paramWeekly =
  weekAgo.getFullYear() +
  ("0" + (weekAgo.getMonth() + 1)).slice(-2) +
  ("00" + weekAgo.getDate()).slice(-2);

export const boxOfficeDetail = (id) =>
  axiosKofic.get("/movie/searchMovieInfo.json", {
    params: {
      movieCd: id,
    },
  });

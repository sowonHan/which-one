import { axiosKofic } from "./config";

let now = new Date();
const year = now.getFullYear();
const month = ("0" + (now.getMonth() + 1)).slice(-2);
const dateWeekly = new Date(now.setDate(now.getDate() - 7)).getDate();
const dateDaily = new Date(now.setDate(now.getDate() - 1)).getDate();

export const boxOfficeWeeklyMain = () => {
  const paramWeekly = year + month + dateWeekly;

  axiosKofic.get(`/boxoffice/searchWeeklyBoxOfficeList.json`, {
    params: {
      targetDt: paramWeekly,
      weekGb: "0",
    },
  });
};

export const boxOfficeWeeklyArt = () => {
  const paramWeekly = year + month + dateWeekly;

  axiosKofic.get(`/boxoffice/searchWeeklyBoxOfficeList.json`, {
    params: {
      targetDt: paramWeekly,
      multiMovieYn: "Y",
      weekGb: "0",
    },
  });
};

export const boxOfficeDailyMain = () => {
  const paramDaily = year + month + dateDaily;

  axiosKofic.get(`/boxoffice/searchDailyBoxOfficeList.json`, {
    params: {
      targetDt: paramDaily,
    },
  });
};

export const boxOfficeDailyArt = () => {
  const paramDaily = year + month + dateDaily;

  axiosKofic.get(`/boxoffice/searchDailyBoxOfficeList.json`, {
    params: {
      targetDt: paramDaily,
      multiMovieYn: "Y",
    },
  });
};

export const boxOfficeDetail = (id) =>
  axiosKofic.get("/movie/searchMovieInfo.json", {
    params: {
      movieCd: id,
    },
  });

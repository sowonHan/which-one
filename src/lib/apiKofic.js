import { axiosKofic } from "./config";

const year = new Date().getFullYear();
const month = ("0" + (new Date().getMonth() + 1)).slice(-2);
const dateWeekly = new Date().getDate() - 7;
const dateDaily = new Date().getDate() - 1;
export const paramWeekly = year + month + dateWeekly;
export const paramDaily = year + month + dateDaily;

export const urlWeekly = "Weekly";
export const urlDaily = "Daily";

export const getBoxoffice = (url, param) =>
  axiosKofic.get(`/boxoffice/search${url}BoxOfficeList.json`, {
    params: {
      targetDt: param,
    },
  });

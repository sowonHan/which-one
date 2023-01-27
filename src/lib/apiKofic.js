import { axiosKofic } from "./config";

const year = new Date().getFullYear();
const month = ("0" + (new Date().getMonth() + 1)).slice(-2);
const dateWeekly = new Date().getDate() - 7;
const dateDaily = new Date().getDate() - 1;
const boxWeekly = year + month + dateWeekly;
const boxDaily = year + month + dateDaily;

export const weekly = "Weekly";
export const daily = "Daily";

export const getBoxoffice = (day) =>
  axiosKofic.get(`/boxoffice/search${day}BoxOfficeList.json`);

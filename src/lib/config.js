import axios from "axios";

export const imageTMDB = "https://image.tmdb.org/t/p";

export const axiosTMDB = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "9e9d90a01a1b94f7784bfe77eebb7c9d",
    language: "ko-KR",
  },
});

export const axiosKofic = axios.create({
  baseURL: "http://kobis.or.kr/kobisopenapi/webservice/rest",
  params: {
    key: "c63b8e05f8a42c09f7ead978b94bb128",
  },
});

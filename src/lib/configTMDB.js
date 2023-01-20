import axios from "axios";

export const image_TMDB = "https://image.tmdb.org/t/p/";

const axiosTMDB = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "9e9d90a01a1b94f7784bfe77eebb7c9d",
    language: "ko-KR",
  },
});

export default axiosTMDB;

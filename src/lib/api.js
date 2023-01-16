import axios from "axios";
import axiosTMDB from "./axiosInstance";

// export const getPopular = () =>
//   axios.get(
//     "https://api.themoviedb.org/3/movie/popular?api_key=9e9d90a01a1b94f7784bfe77eebb7c9d&language=ko-KR&page=1&region=KR"
//   );

export const getPopular = () =>
  axiosTMDB.get("/movie/popular", {
    params: {
      page: "1",
      region: "KR",
    },
  });

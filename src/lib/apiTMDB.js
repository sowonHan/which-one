import axiosTMDB from "./config";

export const getPopular = () =>
  axiosTMDB.get("/movie/popular", {
    params: {
      region: "KR",
    },
  });

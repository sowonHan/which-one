import axiosTMDB from "./configTMDB";

export const getPopular = () =>
  axiosTMDB.get("/movie/popular", {
    params: {
      region: "KR",
    },
  });

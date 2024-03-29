import { axiosTMDB } from "./config";

export const searchAll = (query) =>
  axiosTMDB.get("/search/multi", {
    params: {
      query: query,
    },
  });

export const searchMovie = (query) =>
  axiosTMDB.get("/search/movie", {
    params: {
      query: query,
    },
  });

export const searchTv = (query) =>
  axiosTMDB.get("/search/tv", {
    params: {
      query: query,
    },
  });

export const getTrending = (type) => axiosTMDB.get(`/trending/${type}/day`);

export const getPopular = (type) =>
  axiosTMDB.get(`/${type}/popular`, {
    params: {
      region: "KR",
    },
  });

export const getTopRated = (type) =>
  axiosTMDB.get(`/${type}/top_rated`, {
    params: {
      region: "KR",
    },
  });

export const movieUpcoming = () =>
  axiosTMDB.get("/movie/upcoming", {
    params: {
      region: "KR",
    },
  });

export const movieDetails = (id) =>
  axiosTMDB.get(`/movie/${id}`, {
    params: {
      append_to_response:
        "credits,images,keywords,recommendations,release_dates,similar,watch/providers",
      include_image_language: "ko,null",
    },
  });

export const tvDetails = (id) =>
  axiosTMDB.get(`/tv/${id}`, {
    params: {
      append_to_response:
        "content_ratings,credits,images,keywords,recommendations,similar,watch/providers",
      include_image_language: "ko,null",
    },
  });

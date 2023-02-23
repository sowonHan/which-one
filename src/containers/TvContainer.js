import React from "react";
import { connect } from "react-redux";
import { getTvTrending, getTvPopular, getTvTopRated } from "../modules/slideTv";
import useApi from "../hooks/useApi";
import MainTv from "./../components/MainTv";

const TvContainer = ({
  getTvTrending,
  getTvPopular,
  getTvTopRated,
  trendingTv,
  popularTv,
  topTv,
  loadingTrend,
  loadingPopular,
  loadingTopTv,
}) => {
  const tv = "tv";

  useApi(getTvTrending, tv);
  useApi(getTvPopular, tv);
  useApi(getTvTopRated, tv);

  return (
    <MainTv
      trendingTv={trendingTv}
      popularTv={popularTv}
      topTv={topTv}
      loadingTrend={loadingTrend}
      loadingPopular={loadingPopular}
      loadingTopTv={loadingTopTv}
    />
  );
};

export default connect(
  ({ TvReducer, loadingReducer }) => ({
    trendingTv: TvReducer.trendingTv,
    popularTv: TvReducer.popularTv,
    topTv: TvReducer.topTv,
    loadingTrend: loadingReducer["tv/GET_TV_TRENDING"],
    loadingPopular: loadingReducer["tv/GET_TV_POPULAR"],
    loadingTopTv: loadingReducer["tv/GET_TV_TOP_RATED"],
  }),
  { getTvTrending, getTvPopular, getTvTopRated }
)(TvContainer);

import React from "react";
import { connect } from "react-redux";
import MainTv from "./../components/MainTv";
import { getTvTrending, getTvPopular, getTvTopRated } from "../modules/slideTv";
import useApi from "../hooks/useApi";

const TvContainer = ({
  getTvTrending,
  getTvPopular,
  getTvTopRated,
  trend,
  popular,
  top,
  loadingTrend,
  loadingPopular,
  loadingTop,
}) => {
  useApi(getTvTrending);
  useApi(getTvPopular);
  useApi(getTvTopRated);

  return (
    <MainTv
      trend={trend}
      popular={popular}
      top={top}
      loadingTrend={loadingTrend}
      loadingPopular={loadingPopular}
      loadingTop={loadingTop}
    />
  );
};

export default connect(
  ({ TvReducer, loadingReducer }) => ({
    trend: TvReducer.trend,
    popular: TvReducer.popular,
    top: TvReducer.top,
    loadingTrend: loadingReducer["slideTv/GET_TRENDING"],
    loadingPopular: loadingReducer["slideTv/GET_POPULAR"],
    loadingTop: loadingReducer["slideTv/GET_TOP_RATED"],
  }),
  { getTvTrending, getTvPopular, getTvTopRated }
)(TvContainer);

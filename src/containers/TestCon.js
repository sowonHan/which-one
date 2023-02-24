import React, { useEffect } from "react";
import { connect } from "react-redux";
import Test from "../components/Test";
import {
  getTvTrending2,
  getTvPopular2,
  getTvTopRated2,
} from "../modules/tvtest";
import useApi from "./../hooks/useApi";
import loadingReducer from "./../modules/loading";

const TestCon = ({
  getTvTrending2,
  getTvPopular2,
  getTvTopRated2,
  tr,
  p,
  top,
  loadingTr,
  loadingP,
  loadingTop,
}) => {
  const tv = "tv";

  useApi(getTvTrending2);
  useApi(getTvPopular2);
  useApi(getTvTopRated2);
  // useEffect(() => {
  //   getTvTrending2();
  //   getTvPopular2();
  //   getTvTopRated2();
  // }, [getTvTrending2, getTvPopular2, getTvTopRated2]);

  return (
    <Test
      tr={tr}
      p={p}
      top={top}
      loadingTr={loadingTr}
      loadingP={loadingP}
      loadingTop={loadingTop}
    />
  );
};

export default connect(
  ({ testReducer, loadingReducer }) => ({
    tr: testReducer.tr,
    p: testReducer.p,
    top: testReducer.top,
    loadingTr: loadingReducer["tv2/GET_TV_TRENDING"],
    loadingP: loadingReducer["tv2/GET_TV_POPULAR"],
    loadingTop: loadingReducer["tv2/GET_TV_TOP_RATED"],
  }),
  { getTvTrending2, getTvPopular2, getTvTopRated2 }
)(TestCon);

import React from "react";
import HotTv from "../components/HotTv";
import { getTrailer } from "../modules/promoTv";
import useApi from "../hooks/useApi";
import { connect } from "react-redux";

const TrailerContainer = ({ getTrailer, trailer, program, loadingTrailer }) => {
  useApi(getTrailer);

  return (
    <HotTv
      trailer={trailer}
      program={program}
      loadingTrailer={loadingTrailer}
    />
  );
};

export default connect(
  ({ trailerReducer, loadingReducer }) => ({
    program: trailerReducer.program,
    trailer: trailerReducer.trailer,
    loadingTrailer: loadingReducer["triailer/GET_TRAILER"],
  }),
  { getTrailer }
)(TrailerContainer);

import React from "react";
import { connect } from "react-redux";
import Boxoffice from "../components/boxoffice/Boxoffice";
import useApi from "../hooks/useApi";
import { getBoxOffice } from "../modules/boxoffice";

const BoxOfficeContainer = ({
  getBoxOffice,
  weekMain,
  weekArt,
  dayMain,
  dayArt,
  detail,
  poster,
  loadingBoxOffice,
}) => {
  useApi(getBoxOffice);

  return (
    <Boxoffice
      weekMain={weekMain}
      weekArt={weekArt}
      dayMain={dayMain}
      dayArt={dayArt}
      detail={detail}
      poster={poster}
      loadingBoxOffice={loadingBoxOffice}
    />
  );
};

export default connect(
  ({ boxOfficeReducer, loadingReducer }) => ({
    weekMain: boxOfficeReducer.weekMain,
    weekArt: boxOfficeReducer.weekArt,
    dayMain: boxOfficeReducer.dayMain,
    dayArt: boxOfficeReducer.dayArt,
    detail: boxOfficeReducer.detail,
    poster: boxOfficeReducer.poster,
    loadingBoxOffice: loadingReducer["boxOffice/GET_BOXOFFICE"],
  }),
  { getBoxOffice }
)(BoxOfficeContainer);

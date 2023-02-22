import React from "react";
import { connect } from "react-redux";
import Container from "../components/boxoffice/Container";
import useApi from "../hooks/useApi";
import { getBoxOffice } from "../modules/boxoffice";

const BoxOfficeContainer = ({
  getBoxOffice,
  mainDay,
  // mainWeek,
  // artDay,
  // artWeek,
  // detail,
  // poster,
  loadingBoxOffice,
}) => {
  let now = new Date();
  const year = now.getFullYear();
  const month = ("0" + (now.getMonth() + 1)).slice(-2);
  const dateDaily = new Date(now.setDate(now.getDate() - 1)).getDate();
  const paramDaily = year + month + dateDaily;

  useApi(getBoxOffice, paramDaily);

  return (
    <Boxoffice
      mainDay={mainDay}
      // mainWeek={mainWeek}
      // artDay={artDay}
      // artWeek={artWeek}
      // detail={detail}
      // poster={poster}
      loadingBoxOffice={loadingBoxOffice}
    />
  );
};

export default connect(
  ({ boxOfficeReducer, loadingReducer }) => ({
    mainDay: boxOfficeReducer.mainDay,
    // mainWeek: boxOfficeReducer.mainWeek,
    // artDay: boxOfficeReducer.artDay,
    // artWeek: boxOfficeReducer.artWeek,
    // detail: boxOfficeReducer.detail,
    // poster: boxOfficeReducer.poster,
    loadingBoxOffice: loadingReducer["boxOffice/GET_BOXOFFICE"],
  }),
  { getBoxOffice }
)(BoxOfficeContainer);

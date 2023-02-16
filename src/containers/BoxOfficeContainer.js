import React from "react";
import { connect } from "react-redux";
import Boxoffice from "../components/boxoffice/Boxoffice";
import useApi from "../hooks/useApi";
import {
  getWeeklyMain,
  getWeeklyArt,
  getDailyMain,
  getDailyArt,
} from "../modules/boxoffice";

const BoxOfficeContainer = ({
  getWeeklyMain,
  getWeeklyArt,
  getDailyMain,
  getDailyArt,
  weekMain,
  weekArt,
  dayMain,
  dayArt,
  loadingWeekMain,
  loadingWeekArt,
  loadingDayMain,
  loadingDayArt,
}) => {
  useApi(getWeeklyMain);
  useApi(getWeeklyArt);
  useApi(getDailyMain);
  useApi(getDailyArt);

  return (
    <div>
      <div></div>
    </div>
  );
};

export default BoxOfficeContainer;

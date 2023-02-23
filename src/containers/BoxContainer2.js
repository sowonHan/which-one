import React, { useEffect } from "react";
import Container from "../components/boxoffice/Container";
import { getBox } from "../modules/boxOffice2";
import useApi from "../hooks/useApi";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";

const BoxContainer2 = ({ getBox, result, loadingResult }) => {
  // useApi(getBox);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBox());
  }, []);

  return <Container result={result} loadingResult={loadingResult} />;
};

export default connect(
  ({ boxReducer, loadingReducer }) => ({
    result: boxReducer.result,
    loadingResult: loadingReducer["boxOffice/GET_BOXOFFICE"],
  }),
  { getBox }
)(BoxContainer2);

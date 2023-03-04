import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetails } from "../modules/detailsMovie";
import DetailMovie from "../components/DetailMovie";
import useApi from "./../hooks/useApi";

const DetailMovieContainer = ({ getDetails, details, loadingDetails }) => {
  const { id } = useParams();
  useApi(getDetails, id);

  return <DetailMovie details={details} loadingDetails={loadingDetails} />;
};

export default connect(
  ({ movieDetail, loadingReducer }) => ({
    details: movieDetail.details,
    loadingDetails: loadingReducer["detailMovie/GET_DETAILS"],
  }),
  { getDetails }
)(DetailMovieContainer);

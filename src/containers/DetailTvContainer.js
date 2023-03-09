import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetails } from "../modules/detailsTv";
import DetailTv from "../components/DetailTv";
import useApi from "../hooks/useApi";

const DetailTvContainer = ({ getDetails, details, loadingDetails }) => {
  const { id } = useParams();
  useApi(getDetails, id);

  return <DetailTv details={details} loadingDetails={loadingDetails} />;
};

export default connect(
  ({ tvDetail, loadingReducer }) => ({
    details: tvDetail.details,
    loadingDetails: loadingReducer["detailTv/GET_DETAILS"],
  }),
  { getDetails }
)(DetailTvContainer);

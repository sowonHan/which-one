import React from "react";
import { connect } from "react-redux";
import SampleComponent from "../components/SampleComponent";
import { useEffect } from "react";
import { getPopular } from "./../modules/movie";

const SampleContainer = ({ getPopular, popular, loading }) => {
  useEffect(() => {
    getPopular();
  }, [getPopular]);

  return <SampleComponent popular={popular} loading={loading} />;
};

export default connect(
  (state) => ({
    popular: state.sampleReducer.popular,
    loading: state.sampleReducer.loading,
  }),
  { getPopular }
)(SampleContainer);

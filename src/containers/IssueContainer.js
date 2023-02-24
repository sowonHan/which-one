import React from "react";
import { connect } from "react-redux";
import IssueTv from "../components/IssueTv";
import { getIssue } from "../modules/issue";
import useApi from "../hooks/useApi";

const TrailerContainer = ({ getIssue, issue, loadingIssue }) => {
  useApi(getIssue);

  return <IssueTv issue={issue} loadingIssue={loadingIssue} />;
};

export default connect(
  ({ issueReducer, loadingReducer }) => ({
    issue: issueReducer.issue,
    loadingIssue: loadingReducer["issue/GET_ISSUE"],
  }),
  { getIssue }
)(TrailerContainer);

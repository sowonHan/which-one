import React from "react";
import Header from "./../components/Header";
import IssueContainer from "../containers/IssueContainer";
import TvContainer from "../containers/TvContainer";
import Footer from "./../components/Footer";

const TVPage = () => {
  return (
    <>
      <Header />
      <IssueContainer />
      <TvContainer />
      <Footer />
    </>
  );
};

export default TVPage;

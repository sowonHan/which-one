import React from "react";
import Header from "./../components/Header";
import TrailerContainer from "../containers/TrailerContainer";
import MainTv from "../components/MainTv";
import Footer from "./../components/Footer";

const TVPage = () => {
  return (
    <>
      <Header />
      <TrailerContainer />
      <MainTv />
      <Footer />
    </>
  );
};

export default TVPage;

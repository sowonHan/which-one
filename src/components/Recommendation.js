import React from "react";
import Slider from "react-slick";
import "../styles/Carousel.scss";

const Recommendation = ({ details, children }) => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow:
      details.recommendations.results.length < 8
        ? details.recommendations.results.length
        : 8,
    // 반응형 맞추기
  };

  return (
    <>
      <Slider className="slide-custom" {...settings}>
        {children}
      </Slider>
    </>
  );
};

export default Recommendation;

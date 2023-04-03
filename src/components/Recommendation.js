import React from "react";
import Slider from "react-slick";
import "../styles/Carousel.scss";

const Recommendation = ({ details, children }) => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow:
      details.recommendations.results.length >= 8
        ? 8
        : details.recommendations.results.length >= 6
        ? details.recommendations.results.length
        : 1,
    responsive: [
      {
        breakpoint: 1835,
        settings: {
          slidesToShow:
            details.recommendations.results.length >= 7
              ? 7
              : details.recommendations.results.length === 6
              ? 6
              : 1,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: details.recommendations.results.length >= 6 ? 6 : 1,
        },
      },
      {
        breakpoint: 1365,
        settings: {
          slidesToShow: details.recommendations.results.length >= 5 ? 5 : 1,
        },
      },
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: details.recommendations.results.length >= 4 ? 4 : 1,
        },
      },
      {
        breakpoint: 905,
        settings: {
          slidesToShow: details.recommendations.results.length >= 3 ? 3 : 1,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: details.recommendations.results.length >= 2 ? 2 : 1,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
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

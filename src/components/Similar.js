import React from "react";
import Slider from "react-slick";
import "../styles/Carousel.scss";

const Similar = ({ details, children }) => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow:
      details.similar.results.length >= 8
        ? 8
        : details.similar.results.length >= 6
        ? details.similar.results.length
        : 1,
    responsive: [
      {
        breakpoint: 1840,
        settings: {
          slidesToShow:
            details.similar.results.length >= 7
              ? 7
              : details.similar.results.length === 6
              ? 6
              : 1,
        },
      },
      {
        breakpoint: 1610,
        settings: {
          slidesToShow: details.similar.results.length >= 6 ? 6 : 1,
        },
      },
      {
        breakpoint: 1380,
        settings: {
          slidesToShow: details.similar.results.length >= 5 ? 5 : 1,
        },
      },
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: details.similar.results.length >= 4 ? 4 : 1,
        },
      },
      {
        breakpoint: 916,
        settings: {
          slidesToShow: details.similar.results.length >= 3 ? 3 : 1,
        },
      },
      {
        breakpoint: 670,
        settings: {
          slidesToShow: details.similar.results.length >= 2 ? 2 : 1,
        },
      },
      {
        breakpoint: 442,
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

export default Similar;

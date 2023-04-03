import React from "react";
import Slider from "react-slick";
import "../../styles/Carousel.scss";

const Carousel = ({ children }) => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 8,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1835,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1365,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 905,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,
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

export default Carousel;

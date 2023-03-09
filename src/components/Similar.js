import React from "react";
import Slider from "react-slick";
import "../styles/Carousel.scss";

const Similar = ({ details, children }) => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow:
      details.similar.results.length < 8 ? details.similar.results.length : 8,
    // 반응형 나중에 CSS 할 때 맞추기ㅠㅠ
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

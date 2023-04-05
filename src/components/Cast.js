import React from "react";
import Slider from "react-slick";
import { imageTMDB } from "../lib/config";
import "../styles/Cast.scss";

const Cast = ({ details }) => {
  let settings = {
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 1540,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1230,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 610,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="cast-sec">
        <h6>출연진</h6>
        <Slider
          {...settings}
          className={
            details.credits.cast.length >= 5 ? "slide-cast" : "slide-cast-few"
          }
        >
          {details.credits.cast.slice(0, 11).map((actor) => (
            <div key={actor.order}>
              {actor.profile_path ? (
                <img
                  className="cast"
                  src={`${imageTMDB}/w185${actor.profile_path}`}
                  alt={`${actor.name}의 사진`}
                />
              ) : (
                <div className="no-actor">No Image</div>
              )}
              <p>{actor.name}</p>
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
};

export default Cast;

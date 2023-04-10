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
        breakpoint: 1650,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1335,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 720,
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
            details.credits.cast.length === 1 ? "slide-cast-only" : "slide-cast"
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

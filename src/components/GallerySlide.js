import React from "react";
import Slider from "react-slick";
import { imageTMDB } from "../lib/config";
import "../styles/GallerySlide.scss";

const GallerySlide = ({ details }) => {
  let setPoster = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow:
      details.images.posters.length < 9 ? details.images.posters.length : 9,
  };

  let setBackdrop = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow:
      details.images.backdrops.length < 5 ? details.images.backdrops.length : 5,
  };

  return (
    <>
      <section className="gallery-sec">
        <h2>갤러리</h2>
        <div className="poster-con">
          <h6>포스터</h6>
          <Slider {...setPoster} className="slide-poster">
            {details.images.posters.map((poster, idx) => (
              <a
                key={idx}
                href={`${imageTMDB}/original${poster.file_path}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="posters"
                  src={`${imageTMDB}/w154${poster.file_path}`}
                  alt="포스터 이미지"
                />
              </a>
            ))}
          </Slider>
        </div>
        <div className="backdrop-con">
          <h6>스틸컷 및 홍보 이미지</h6>
          <Slider {...setBackdrop} className="slide-backdrop">
            {details.images.backdrops.map((backdrop, idx) => (
              <a
                key={idx}
                href={`${imageTMDB}/original${backdrop.file_path}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="backdrops"
                  src={`${imageTMDB}/w300${backdrop.file_path}`}
                  alt="스틸컷 및 배경 이미지"
                />
              </a>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default GallerySlide;

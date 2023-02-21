import React from "react";
import Detail from "./Detail";
import List from "./List";
import Slider from "react-slick";
import ListItem from "./ListItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/Boxoffice.scss";
import { useState, useCallback } from "react";

const Boxoffice = ({
  weekMain,
  weekArt,
  dayMain,
  dayArt,
  detail,
  poster,
  loadingBoxOffice,
}) => {
  const [mainData, setMainData] = useState(dayMain);
  const [artData, setArtData] = useState(dayArt);

  const onToDayMain = useCallback(() => {
    return mainData === dayMain ? mainData : setMainData(dayMain);
  }, [mainData, dayMain]);

  const onToWeekMain = useCallback(() => {
    return mainData === weekMain ? mainData : setMainData(weekMain);
  }, [mainData, weekMain]);

  const onToDayArt = useCallback(() => {
    return artData === dayArt ? artData : setArtData(dayArt);
  }, [artData, dayArt]);

  const onToWeekArt = useCallback(() => {
    return artData === weekArt ? artData : setArtData(weekArt);
  }, [artData, weekArt]);

  let settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
  };

  return (
    <>
      <div className="slider-wrapper">
        <Slider {...settings}>
          <div>
            <div className="nav-container">
              <h2>박스오피스</h2>
              <button onClick={onToDayMain}>일별</button>
              <button onClick={onToWeekMain}>주간</button>
            </div>
            <div className="page-container">
              <Detail
                detail={detail}
                poster={poster}
                loadingBoxOffice={loadingBoxOffice}
              />
              <List>
                {loadingBoxOffice ? (
                  <span>...</span>
                ) : (
                  dayMain &&
                  mainData.map((datum) => (
                    <ListItem datum={datum} key={datum.rnum} />
                  ))
                )}
              </List>
            </div>
          </div>
          <div>
            <div className="nav-container">
              <h2>독립·예술영화 박스오피스</h2>
              <button onClick={onToDayArt}>일별</button>
              <button onClick={onToWeekArt}>주간</button>
            </div>
            <div className="page-container">
              <Detail
                detail={detail}
                poster={poster}
                loadingBoxOffice={loadingBoxOffice}
              />
              <List>
                {loadingBoxOffice ? (
                  <span>...</span>
                ) : (
                  dayArt &&
                  artData.map((datum) => (
                    <ListItem datum={datum} key={datum.rnum} />
                  ))
                )}
              </List>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Boxoffice;

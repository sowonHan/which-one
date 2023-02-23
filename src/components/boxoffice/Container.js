import React from "react";
import View from "./View";
import List from "./List";
import ListItem from "./ListItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/Boxoffice.scss";
import { useState, useCallback } from "react";

const Container = ({
  mainDay,
  mainWeek,
  artDay,
  artWeek,
  detail,
  poster,
  loadingBoxOffice,
  result,
  loadingResult,
}) => {
  loadingResult
    ? console.log("로딩 중")
    : result
    ? console.log(result)
    : console.log("결과 없어");
  console.log(result);

  const [mainData, setMainData] = useState(mainDay);
  const [artData, setArtData] = useState(artDay);

  // 아래 버튼코드가 잘 작동하는지 아직 확인을 못 해서 남겨둔 주석들......
  // const onToDayMain = useCallback(() => {
  //   return mainData === mainDay ? mainData : setMainData(dayMain);
  // }, [mainData, mainDay]);

  // const onToWeekMain = useCallback(() => {
  //   return mainData === weekMain ? mainData : setMainData(weekMain);
  // }, [mainData, weekMain]);

  // const onToDayArt = useCallback(() => {
  //   return artData === dayArt ? artData : setArtData(dayArt);
  // }, [artData, dayArt]);

  // const onToWeekArt = useCallback(() => {
  //   return artData === weekArt ? artData : setArtData(weekArt);
  // }, [artData, weekArt]);

  const onDay = useCallback(
    (type, e) => {
      if (type === "main") {
        if (mainData === mainDay) {
          e.preventDefault();
        } else {
          setMainData(mainDay);
          return mainData;
        }
      } else {
        if (artData === artDay) {
          e.preventDefault();
        } else {
          setArtData(artDay);
          return artData;
        }
      }
    },
    [mainData, artData, mainDay, artDay]
  );

  const onWeek = useCallback(
    (type, e) => {
      if (type === "main") {
        if (mainData === mainWeek) {
          e.preventDefault();
        } else {
          setMainData(mainWeek);
          return mainData;
        }
      } else {
        if (artData === artWeek) {
          e.preventDefault();
        } else {
          setArtData(artWeek);
          return artData;
        }
      }
    },
    [mainData, artData, mainWeek, artWeek]
  );

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
      {/* 아래 렌더링 부분은 원래 BoxOfficeContainer.js 컨테이너 컴포넌트로부터 받은 props들로 채울 예정이었던 거라, 신경쓰지 않으셔도 돼요!!! */}
      <div className="slider-wrapper">
        <Slider {...settings}>
          <div>
            <div className="nav-container">
              <h2>박스오피스</h2>
              <button onClick={(e) => onDay("main", e)}>일별</button>
              <button onClick={(e) => onWeek("main", e)}>주간</button>
            </div>
            <div className="page-container">
              <View
                detail={detail}
                poster={poster}
                loadingBoxOffice={loadingBoxOffice}
              />
              <List>
                {loadingBoxOffice ? (
                  <span>...</span>
                ) : (
                  mainDay &&
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
              <button onClick={(e) => onDay("art", e)}>일별</button>
              <button onClick={(e) => onWeek("art", e)}>주간</button>
            </div>
            <div className="page-container">
              <View
                detail={detail}
                poster={poster}
                loadingBoxOffice={loadingBoxOffice}
              />
              <List>
                {loadingBoxOffice ? (
                  <span>...</span>
                ) : (
                  artDay &&
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

export default Container;

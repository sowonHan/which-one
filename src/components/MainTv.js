import React from "react";
import Loading from "./common_page_slide/Loading";
import Carousel from "./common_page_slide/Carousel";
import TvCard from "./common_page_slide/TvCard";
import "../styles/SlidePage.scss";

const MainTv = ({
  trend,
  popular,
  top,
  loadingTrend,
  loadingPopular,
  loadingTop,
}) => {
  return (
    <div className="tv-con">
      <section className="slide-con-first">
        <h1>요즘 트렌드</h1>
        {loadingTrend ? (
          <Loading />
        ) : (
          trend && (
            <Carousel>
              {trend.results.map((result) => (
                <TvCard
                  result={result}
                  key={result.id}
                  linkUrl={`/tv/${result.id}`}
                />
              ))}
            </Carousel>
          )
        )}
      </section>
      <section className="slide-container">
        <h1>인기 프로그램</h1>
        {loadingPopular ? (
          <Loading />
        ) : (
          popular && (
            <Carousel>
              {popular.results.map((result) => (
                <TvCard
                  result={result}
                  key={result.id}
                  linkUrl={`/tv/${result.id}`}
                />
              ))}
            </Carousel>
          )
        )}
      </section>
      <section className="slide-con-last">
        <h1>평점이 높은 TV프로그램</h1>
        {loadingTop ? (
          <Loading />
        ) : (
          top && (
            <Carousel>
              {top.results.map((result) => (
                <TvCard
                  result={result}
                  key={result.id}
                  linkUrl={`/tv/${result.id}`}
                />
              ))}
            </Carousel>
          )
        )}
      </section>
    </div>
  );
};

export default MainTv;

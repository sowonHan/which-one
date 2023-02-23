import React from "react";
import Loading from "./common_page_slide/Loading";
import Carousel from "./common_page_slide/Carousel";
import Card from "./common_page_slide/Card";

const MainTv = ({
  trendingTv,
  popularTv,
  topTv,
  loadingTrend,
  loadingPopular,
  loadingTopTv,
}) => {
  return (
    <>
      <section>
        <h1>요즘 트렌드</h1>
        {loadingTrend ? (
          <Loading />
        ) : (
          trendingTv && (
            <Carousel>
              {trendingTv.results.map((result) => (
                <Card result={result} key={result.id} />
              ))}
            </Carousel>
          )
        )}
      </section>
      <section>
        <h1>인기 프로그램</h1>
        {loadingPopular ? (
          <Loading />
        ) : (
          popularTv && (
            <Carousel>
              {popularTv.results.map((result) => (
                <Card result={result} key={result.id} />
              ))}
            </Carousel>
          )
        )}
      </section>
      <section>
        <h1>평점이 높은 TV프로그램</h1>
        {loadingTopTv ? (
          <Loading />
        ) : (
          topTv && (
            <Carousel>
              {topTv.results.map((result) => (
                <Card result={result} key={result.id} />
              ))}
            </Carousel>
          )
        )}
      </section>
    </>
  );
};

export default MainTv;

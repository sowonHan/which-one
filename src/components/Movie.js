import React from "react";
import Loading from "./common_page_slide/Loading";
import Carousel from "./common_page_slide/Carousel";
import Card from "./common_page_slide/Card";

const Movie = ({
  trendingM,
  popularM,
  topM,
  upcoming,
  loadingTrend,
  loadingPopular,
  loadingTopM,
  loadingUpcoming,
}) => {
  return (
    <>
      <section>
        <h1>요즘 트렌드</h1>
        {loadingTrend ? (
          <Loading />
        ) : (
          trendingM && (
            <Carousel>
              {trendingM.results.map((result) => (
                <Card result={result} key={result.id} />
              ))}
            </Carousel>
          )
        )}
      </section>
      <section>
        <h1>인기 작품</h1>
        {loadingPopular ? (
          <Loading />
        ) : (
          popularM && (
            <Carousel>
              {popularM.results.map((result) => (
                <Card result={result} key={result.id} />
              ))}
            </Carousel>
          )
        )}
      </section>
      <section>
        <h1>평점이 높은 영화</h1>
        {loadingTopM ? (
          <Loading />
        ) : (
          topM && (
            <Carousel>
              {topM.results.map((result) => (
                <Card result={result} key={result.id} />
              ))}
            </Carousel>
          )
        )}
      </section>
      <section>
        <h1>계봉 예정</h1>
        {loadingUpcoming ? (
          <Loading />
        ) : (
          upcoming && (
            <Carousel>
              {upcoming.results.map((result) => (
                <Card result={result} key={result.id} />
              ))}
            </Carousel>
          )
        )}
      </section>
    </>
  );
};

export default Movie;

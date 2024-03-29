import React from "react";
import Loading from "./common_page_slide/Loading";
import Carousel from "./common_page_slide/Carousel";
import MovieCard from "./common_page_slide/MovieCard";
import "../styles/SlidePage.scss";

const Movie = ({
  trend,
  popular,
  top,
  upcoming,
  loadingTrend,
  loadingPopular,
  loadingTop,
  loadingUpcoming,
}) => {
  return (
    <div className="movie-con">
      <section className="slide-con-first">
        <h1>요즘 트렌드</h1>
        {loadingTrend ? (
          <Loading />
        ) : (
          trend && (
            <Carousel>
              {trend.results.map((result) => (
                <MovieCard
                  result={result}
                  key={result.id}
                  linkUrl={`/movie/${result.id}`}
                />
              ))}
            </Carousel>
          )
        )}
      </section>
      <section className="slide-container">
        <h1>인기 작품</h1>
        {loadingPopular ? (
          <Loading />
        ) : (
          popular && (
            <Carousel>
              {popular.results.map((result) => (
                <MovieCard
                  result={result}
                  key={result.id}
                  linkUrl={`/movie/${result.id}`}
                />
              ))}
            </Carousel>
          )
        )}
      </section>
      <section className="slide-container">
        <h1>평점이 높은 영화</h1>
        {loadingTop ? (
          <Loading />
        ) : (
          top && (
            <Carousel>
              {top.results.map((result) => (
                <MovieCard
                  result={result}
                  key={result.id}
                  linkUrl={`/movie/${result.id}`}
                />
              ))}
            </Carousel>
          )
        )}
      </section>
      <section className="slide-con-last">
        <h1>계봉 예정</h1>
        {loadingUpcoming ? (
          <Loading />
        ) : (
          upcoming && (
            <Carousel>
              {upcoming.results.map((result) => (
                <MovieCard
                  result={result}
                  key={result.id}
                  linkUrl={`/movie/${result.id}`}
                />
              ))}
            </Carousel>
          )
        )}
      </section>
    </div>
  );
};

export default Movie;

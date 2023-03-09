import React, { useCallback } from "react";
import { imageTMDB } from "../lib/config";
import Streaming from "./Streaming";
import Cast from "./Cast";
import GallerySlide from "./../components/GallerySlide";
import MovieCard from "./common_page_slide/MovieCard";
import Similar from "./Similar";
import Recommendation from "./Recommendation";
import "../styles/DetailMovie.scss";

const DetailMovie = ({ details, loadingDetails }) => {
  const dateKR = useCallback(() => {
    if (loadingDetails) {
      return "불러오는 중...";
    } else {
      if (details) {
        const korea = details.release_dates.results.filter(
          (result) => result.iso_3166_1 === "KR"
        );
        if (korea.length) {
          return korea[0].release_dates[
            korea[0].release_dates.length - 1
          ].release_date.substr(0, 10);
        } else {
          return "개봉 정보 없음";
        }
      } else {
        return "데이터를 불러올 수 없습니다.";
      }
    }
  }, [loadingDetails, details]);

  const rateKR = useCallback(() => {
    if (loadingDetails) {
      return "불러오는 중...";
    } else {
      if (details) {
        const korea = details.release_dates.results.filter(
          (result) => result.iso_3166_1 === "KR"
        );
        if (korea.length) {
          if (korea[0].release_dates[0].certification === "") {
            if (korea[0].release_dates.length > 1) {
              const another = korea[0].release_dates.find(
                (date) => date.certification !== ""
              );
              if (another.certification === "All") {
                return "전체관람가";
              } else {
                return `${another.certification}세 이상 관람가`;
              }
            } else {
              return "등급 정보 없음";
            }
          } else {
            if (korea[0].release_dates[0].certification === "All") {
              return "전체관람가";
            } else {
              return `${korea[0].release_dates[0].certification}세 이상 관람가`;
            }
          }
        } else {
          const origin = details.release_dates.results.filter(
            (result) =>
              result.iso_3166_1 === details.production_countries[0].iso_3166_1
          );
          if (origin.length) {
            return origin[0].release_dates[0].certification;
          } else {
            return "개봉 정보 없음";
          }
        }
      } else {
        return "데이터를 불러올 수 없습니다.";
      }
    }
  }, [loadingDetails, details]);

  return (
    <>
      {loadingDetails ? (
        <main>
          <section className="first-con">
            <div className="poster load-color"></div>
            <div>
              <p className="big-text">불러오는 중...</p>
            </div>
          </section>
          <section>
            <p>불러오는 중...</p>
          </section>
          <section>
            <div>
              <h6>출연진</h6>
              <div className="load-credit"></div>
              <p>불러오는 중...</p>
            </div>
          </section>
          <section>
            <h6>감독</h6>
            <div className="load-credit"></div>
            <p>불러오는 중...</p>
          </section>
          <section>
            <h2>영화 이미지</h2>
            <div className="load-gallery">
              <div className="sample"></div>
              <div className="sample"></div>
              <div className="sample"></div>
            </div>
            <div className="load-gallery">
              <div className="sample"></div>
              <div className="sample"></div>
              <div className="sample"></div>
            </div>
          </section>
          <section>
            <h2>비슷한 작품</h2>
            <div>
              <div className="similar load-color"></div>
              <p>불러오는 중...</p>
            </div>
          </section>
          <section>
            <h2>추천 작품</h2>
            <div>
              <div className="recommend load-color"></div>
              <p>불러오는 중...</p>
            </div>
          </section>
        </main>
      ) : (
        details && (
          <main>
            <section className="first-con">
              <div>
                <img
                  className="poster"
                  src={`${imageTMDB}/w342${details.poster_path}`}
                  alt={`${details.title}의 포스터`}
                />
              </div>
              <div>
                <h2 className="title">{details.title}</h2>
                <p>{`(${details.original_title})`}</p>
                <p>
                  개봉/공개일 : {details.release_date}
                  <span>{`(한국 : ${dateKR()})`}</span>
                </p>
                <p>개봉/제작 상태 : {details.status}</p>
                <p>
                  제작 국가 :{" "}
                  {details.production_countries.map((country, idx) => (
                    <span key={idx}>
                      {country.name}
                      {` / `}
                    </span>
                  ))}
                </p>
                <p>
                  장르 :{" "}
                  {details.genres.map((genre) => (
                    <span key={genre.id}>
                      {genre.name}
                      {` / `}
                    </span>
                  ))}
                </p>
                <p>상영시간 : {details.runtime}분</p>
                <p>연령등급 : {rateKR()}</p>
                <p>TMDB 평점 : {details.vote_average}</p>
                <div>
                  <p>시청 가능한 곳</p>
                  <div className="buy">
                    <p>구매 : </p>
                    {details["watch/providers"].results.hasOwnProperty("KR") ? (
                      details["watch/providers"].results.KR.buy ? (
                        details["watch/providers"].results.KR.buy.map(
                          (provider) => (
                            <div
                              key={provider.provider_id}
                              className="logo-con"
                            >
                              <img
                                src={`${imageTMDB}/w45${provider.logo_path}`}
                                alt={`${provider.provider_name}의 로고`}
                              />
                              <p>{provider.provider_name}</p>
                            </div>
                          )
                        )
                      ) : (
                        <p>없음</p>
                      )
                    ) : (
                      <p>없음</p>
                    )}
                  </div>
                  <div className="rent">
                    <p>대여 : </p>
                    {details["watch/providers"].results.hasOwnProperty("KR") ? (
                      details["watch/providers"].results.KR.rent ? (
                        details["watch/providers"].results.KR.rent.map(
                          (provider) => (
                            <div
                              key={provider.provider_id}
                              className="logo-con"
                            >
                              <img
                                src={`${imageTMDB}/w45${provider.logo_path}`}
                                alt={`${provider.provider_name}의 로고`}
                              />
                              <p>{provider.provider_name}</p>
                            </div>
                          )
                        )
                      ) : (
                        <p> 없음</p>
                      )
                    ) : (
                      <p> 없음</p>
                    )}
                  </div>
                  <Streaming details={details} />
                </div>
                <p>
                  홈페이지 :{" "}
                  {details.homepage === "" ? "없음" : details.homepage}
                </p>
              </div>
            </section>
            <section>
              <div>
                <h6>시놉시스</h6>
                <p>{details.tagline}</p>
                <p>{details.overview}</p>
              </div>
              <p>
                키워드 :{" "}
                {details.keywords.keywords.map((keyword) => (
                  <span key={keyword.id}>
                    {keyword.name}
                    {` / `}
                  </span>
                ))}
              </p>
            </section>
            <Cast details={details} />
            <section>
              <h6>감독</h6>
              {details.credits.crew.find((person) => person.job === "Director")
                .profile_path ? (
                <img
                  className="director-img"
                  src={`${imageTMDB}/w185${
                    details.credits.crew.find(
                      (person) => person.job === "Director"
                    ).profile_path
                  }`}
                  alt="감독의 사진"
                />
              ) : (
                <div className="load-credit">No Image</div>
              )}
              <p>
                {
                  details.credits.crew.find(
                    (person) => person.job === "Director"
                  ).name
                }
              </p>
            </section>
            <GallerySlide details={details} />
            <section>
              <h2>이 작품과 비슷한 영화</h2>
              <Similar details={details}>
                {details.similar.results.map((result) => (
                  <MovieCard
                    key={result.id}
                    result={result}
                    linkUrl={`/movie/${result.id}`}
                  />
                ))}
              </Similar>
            </section>
            <section>
              <h2>이 작품이 재미있었다면 추천드려요</h2>
              <Recommendation details={details}>
                {details.recommendations.results.map((result) => (
                  <MovieCard
                    key={result.id}
                    result={result}
                    linkUrl={`/movie/${result.id}`}
                  />
                ))}
              </Recommendation>
            </section>
          </main>
        )
      )}
    </>
  );
};

export default DetailMovie;

import React, { useCallback } from "react";
import { imageTMDB } from "../lib/config";
import Slider from "react-slick";
import Streaming from "./Streaming";
import Cast from "./Cast";
import GallerySlide from "./../components/GallerySlide";
import Similar from "./Similar";
import Recommendation from "./Recommendation";
import TvCard from "./common_page_slide/TvCard";
import "../styles/DetailPage.scss";

const DetailTv = ({ details, loadingDetails }) => {
  let settings = {
    dots: false,
    infinite: false,
    speed: 400,
  };

  const rate = useCallback(() => {
    if (loadingDetails) {
      return "불러오는 중...";
    } else {
      if (details) {
        const korea = details.content_ratings.results.find(
          (result) => result.iso_3166_1 === "KR"
        );
        if (korea) {
          if (korea.rating === "ALL") {
            return "전체관람가";
          } else {
            return `${korea.rating}세 이상 관람가`;
          }
        } else {
          if (details.content_ratings.results.length === 0) {
            return "등급 정보 없음";
          } else {
            const origin = details.content_ratings.results.find(
              (result) => result.iso_3166_1 === details.origin_country[0]
            );
            if (origin) {
              if (origin.rating === "") {
                return "등급 정보 없음";
              } else {
                return origin.rating;
              }
            } else {
              return `${details.content_ratings.results[0].iso_3166_1}-${details.content_ratings.results[0].rating}`;
            }
          }
        }
      } else {
        return "데이터를 불러올 수 없습니다.";
      }
    }
  }, [details, loadingDetails]);

  return (
    <>
      {loadingDetails ? (
        <main className="detail-container">
          <section className="first-sec">
            <div className="poster load-color"></div>
            <div>
              <h1 className="big-text">불러오는 중...</h1>
            </div>
          </section>
          <hr />
          <section>
            <p>불러오는 중...</p>
          </section>
          <hr />
          <section>
            <div>
              <h6>출연진</h6>
              <div className="load-credit"></div>
              <p>불러오는 중...</p>
            </div>
          </section>
          <section>
            <h6>제작자</h6>
            <div className="load-credit"></div>
            <p>불러오는 중...</p>
          </section>
          <hr />
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
          <hr />
          <section>
            <h2>비슷한 작품</h2>
            <div>
              <div className="load-similar"></div>
              <p>불러오는 중...</p>
            </div>
          </section>
          <section>
            <h2>추천 작품</h2>
            <div>
              <div className="load-recommend"></div>
              <p>불러오는 중...</p>
            </div>
          </section>
        </main>
      ) : (
        details && (
          <main className="detail-container">
            <section className="general-sec">
              <div>
                <img
                  className="poster"
                  src={`${imageTMDB}/w342${details.poster_path}`}
                  alt={`${details.name}의 포스터`}
                />
              </div>
              <div className="general-text">
                <h2 className="name">{details.name}</h2>
                <p className="origin-name">{`(${details.original_name})`}</p>
                <p>
                  개봉/제작 상태{"  "}:{`  ${details.status}`}
                </p>
                <p>
                  연령등급{"  "}:{"  "}
                  {rate()}
                </p>
                <p>
                  제작 국가{"  "}:{"  "}
                  {details.production_countries.map((country, idx) => (
                    <span key={idx}>
                      {country.name}
                      {` / `}
                    </span>
                  ))}
                </p>
                <p>
                  방송 채널{"  "}:{"  "}
                  {details.networks.map((network) => (
                    <span key={network.id}>
                      {network.name}
                      {` / `}
                    </span>
                  ))}
                </p>
                <p>
                  장르{"  "}:{"  "}
                  {details.genres.map((genre) => (
                    <span key={genre.id}>
                      {genre.name}
                      {` / `}
                    </span>
                  ))}
                </p>
                <p>
                  총 시즌수{"  "}:{`  ${details.number_of_seasons}시즌`}
                </p>
                <p>
                  총 에피소드수{"  "}:{`  ${details.number_of_episodes}화`}
                </p>
                <p>
                  에피소드별 상영 시간{"  "}:{"  "}
                  {details.episode_run_time.length === 0
                    ? "일정하지 않음"
                    : `${details.episode_run_time}분`}
                </p>
                <p>
                  첫 방영일{"  "}:{`  ${details.first_air_date}`}
                </p>
                <p>
                  마지막 방영일{"  "}:{`  ${details.last_air_date}`}
                </p>
                <p>
                  다음 에피소드 방영일{"  "}:{"  "}
                  {details.next_episode_to_air
                    ? details.next_episode_to_air.air_date
                    : "미정"}
                </p>
                <p>
                  TMDB 평점{"  "}:{`  ${details.vote_average} / 10`}
                </p>
                <p>
                  홈페이지{"  "}:{"  "}
                  {details.homepage === "" ? "없음" : details.homepage}
                </p>
                <div className="provider">
                  <h6>시청 가능한 곳</h6>
                  <Streaming details={details} />
                </div>
              </div>
            </section>
            <hr />
            <section className="synopsis-sec">
              <h6>시놉시스</h6>
              <p>{details.overview === "" ? "정보 없음" : details.overview}</p>
              <p className="keyword">
                키워드 :{" "}
                {details.keywords.results.map((result) => (
                  <span key={result.id}>
                    {result.name}
                    {` / `}
                  </span>
                ))}
              </p>
            </section>
            <hr />
            <Cast details={details} />
            <section className="crew-sec">
              <h6>대표 제작자</h6>
              {details.created_by.length === 0 ? (
                <div className="no-creator">
                  <p>정보가 없습니다.</p>
                  <a
                    href={`https://www.themoviedb.org/tv/${details.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    제작진 보러 가기
                  </a>
                </div>
              ) : (
                <Slider className="slide-creator" {...settings}>
                  {details.created_by.map((creator) => (
                    <div key={creator.id}>
                      {creator.profile_path ? (
                        <img
                          className="crew-img"
                          src={`${imageTMDB}/w185${creator.profile_path}`}
                          alt={`${creator.name}의 사진`}
                        />
                      ) : (
                        <div className="load-credit">No Image</div>
                      )}
                      <p className="crew-name">{creator.name}</p>
                    </div>
                  ))}
                </Slider>
              )}
            </section>
            <hr />
            <GallerySlide details={details} />
            <hr />
            <section className="similar-sec">
              <h2>이 TV 프로그램과 비슷한 작품</h2>
              {details.similar.results.length ? (
                <Similar details={details}>
                  {details.similar.results.map((result) => (
                    <TvCard
                      key={result.id}
                      result={result}
                      linkUrl={`/tv/${result.id}`}
                    />
                  ))}
                </Similar>
              ) : (
                <div className="load-similar">
                  <p>데이터가 없습니다</p>
                </div>
              )}
            </section>
            <section className="recommend-sec">
              <h2>이 TV 프로그램이 재미있었다면 추천드려요</h2>
              {details.recommendations.results.length ? (
                <Recommendation details={details}>
                  {details.recommendations.results.map((result) => (
                    <TvCard
                      key={result.id}
                      result={result}
                      linkUrl={`/tv/${result.id}`}
                    />
                  ))}
                </Recommendation>
              ) : (
                <div className="load-recommend">
                  <p>데이터가 없습니다</p>
                </div>
              )}
            </section>
          </main>
        )
      )}
    </>
  );
};

export default DetailTv;

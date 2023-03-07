import React, { useCallback } from "react";
import { imageTMDB } from "../lib/config";
import Slider from "react-slick";
import GallerySlide from "./../components/GallerySlide";

const DetailMovie = ({ details, loadingDetails }) => {
  let settings = {
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 4,
  };

  const dateKR = useCallback(() => {
    const korea = details.release_dates.results.filter(
      (result) => result.iso_3166_1 === "KR"
    );
    if (korea.length) {
      return korea.release_dates[0].release_date.substr(0, 10);
    } else {
      return "개봉정보 없음";
    }
  }, [details]);

  const rateKR = useCallback(() => {
    const korea = details.release_dates.results.filter(
      (result) => result.iso_3166_1 === "KR"
    );
    if (korea.length) {
      return korea.release_dates[0].certification;
    } else {
      const origin = details.release_dates.results.filter(
        (result) =>
          result.iso_3166_1 === details.production_countries[0].iso_3166_1
      );
      return origin.release_dates[0].certification;
    }
  }, [details]);

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
              <div className="credit load-color"></div>
              <p>불러오는 중...</p>
            </div>
            <p>불러오는 중...</p>
          </section>
          <section>
            <h2>영화 이미지</h2>
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
                            <div key={provider.provider_id}>
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
                            <div key={provider.provider_id}>
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
                  <div className="flatrate">
                    <p>스트리밍 : </p>
                    {details["watch/providers"].results.hasOwnProperty("KR") ? (
                      details["watch/providers"].results.KR.flatrate ? (
                        details["watch/providers"].results.KR.flatrate.map(
                          (provider) => (
                            <div key={provider.provider_id}>
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
            <section>
              <h6>출연진</h6>
              <Slider {...settings}>
                {details.credits.cast.slice(0, 11).map((actor) => (
                  <div key={actor.order}>
                    <img
                      className="credit"
                      src={`${imageTMDB}/w185${actor.profile_path}`}
                      alt={`${actor.name}의 사진`}
                    />
                    <p>{actor.name}</p>
                  </div>
                ))}
              </Slider>
            </section>
            <section>
              <h6>감독</h6>
              <img
                src={`${imageTMDB}/w185${
                  details.credits.crew.find(
                    (person) => person.job === "Director"
                  ).profile_path
                }`}
                alt="감독의 사진"
              />
              <p>
                {
                  details.credits.crew.find(
                    (person) => person.job === "Director"
                  ).name
                }
              </p>
            </section>
            <GallerySlide />
            <section>
              <h2>비슷한 작품</h2>
              <div>
                작품 목록 슬라이드(공용슬라이드 사용)
                <div>포스터{details}</div>
                <p>작품 제목{details}</p>
              </div>
            </section>
            <section>
              <h2>추천 작품</h2>
              <div>
                작품 목록 슬라이드(공용슬라이드 사용)
                <div>포스터{details}</div>
                <p>작품 제목{details}</p>
              </div>
            </section>
          </main>
        )
      )}
    </>
  );
};

export default DetailMovie;

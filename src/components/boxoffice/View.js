import React, { useCallback } from "react";
import { imageTMDB } from "../../lib/config";
import { Link } from "react-router-dom";
import "../../styles/View.scss";

const View = ({ details, posters, now }) => {
  const sampleImg = posters ? posters[0].data.results[0] : "";
  const sampleInfo = details ? details[0].data.movieInfoResult.movieInfo : "";
  const { detail, poster } = now;

  const realPoster = useCallback(() => {
    if (poster) {
      const real = poster.data.results.find(
        (result) =>
          result.title === detail.data.movieInfoResult.movieInfo.movieNm
      );
      const first = poster.data.results;

      if (real) {
        return real;
      } else if (first.length) {
        return first[0];
      } else {
        return null;
      }
    }
  }, [poster, detail]);

  return (
    <>
      <div className="view-container">
        <div className="poster">
          {poster === "" ? (
            posters ? (
              sampleImg ? (
                <Link to={`/movie/${sampleImg.id}`}>
                  <img
                    src={`${imageTMDB}/w342${sampleImg.poster_path}`}
                    alt={`${sampleImg.title}의 포스터`}
                  />
                </Link>
              ) : (
                <div className="loading">
                  <h3>포스터 검색 실패</h3>
                  <p>상세정보 조회는 검색창을 이용해주시기 바랍니다.</p>
                </div>
              )
            ) : (
              <div className="loading"></div>
            )
          ) : realPoster() ? (
            <Link to={`/movie/${realPoster().id}`}>
              <img
                src={`${imageTMDB}/w342${realPoster().poster_path}`}
                alt={`${realPoster().title}의 포스터`}
              />
            </Link>
          ) : (
            <div className="loading">
              <h3>포스터 검색 실패</h3>
              <p>상세정보 조회는 검색창을 이용해주시기 바랍니다.</p>
            </div>
          )}
        </div>
        <div className="informaiton">
          {detail === "" ? (
            details ? (
              <div>
                <h4>{sampleInfo.movieNm}</h4>
                <p>
                  {sampleInfo.movieNmOg === ""
                    ? sampleInfo.movieNmEn === ""
                      ? sampleInfo.movieNm
                      : sampleInfo.movieNmEn
                    : sampleInfo.movieNmOg}
                </p>
                <hr />
                <p className="middel-p">{`${sampleInfo.openDt.slice(
                  0,
                  4
                )}-${sampleInfo.openDt.slice(4, 6)}-${sampleInfo.openDt.slice(
                  -2
                )}`}</p>
                <p className="middel-p">{sampleInfo.nations[0].nationNm}</p>
                <p className="middel-p">{`${sampleInfo.audits[0].watchGradeNm.slice(
                  0,
                  3
                )} ${sampleInfo.audits[0].watchGradeNm.slice(
                  3,
                  5
                )} ${sampleInfo.audits[0].watchGradeNm.slice(-3)}`}</p>
                <p>
                  {sampleInfo.genres.map((genre, idx) => (
                    <span key={idx}>
                      {genre.genreNm}
                      {` / `}
                    </span>
                  ))}
                </p>
                <hr />
                <p className="actor-p">
                  {sampleInfo.actors.map((actor, idx) => (
                    <span key={idx}>
                      {actor.peopleNm}
                      {` / `}
                    </span>
                  ))}
                </p>
                <p className="middel-p">{sampleInfo.showTm}분</p>
                <p>
                  {sampleInfo.showTypes.map((type, idx) => (
                    <span key={idx}>
                      {type.showTypeNm}
                      {` / `}
                    </span>
                  ))}
                </p>
              </div>
            ) : (
              <div>
                <h4>영화명</h4>
                <p>원제목</p>
                <hr />
                <p className="middel-p">개봉일</p>
                <p className="middel-p">제작국가</p>
                <p className="middel-p">관람등급</p>
                <p>장르</p>
                <hr />
                <p className="middel-p">배우</p>
                <p className="middel-p">상영시간</p>
                <p>상영형태</p>
              </div>
            )
          ) : (
            <div>
              <h4>{detail.data.movieInfoResult.movieInfo.movieNm}</h4>
              <p>
                {detail.data.movieInfoResult.movieInfo.movieNmOg === ""
                  ? detail.data.movieInfoResult.movieInfo.movieNmEn === ""
                    ? detail.data.movieInfoResult.movieInfo.movieNm
                    : detail.data.movieInfoResult.movieInfo.movieNmEn
                  : detail.data.movieInfoResult.movieInfo.movieNmOg}
              </p>
              <hr />
              <p className="middel-p">{`${detail.data.movieInfoResult.movieInfo.openDt.slice(
                0,
                4
              )}-${detail.data.movieInfoResult.movieInfo.openDt.slice(
                4,
                6
              )}-${detail.data.movieInfoResult.movieInfo.openDt.slice(-2)}`}</p>
              <p className="middel-p">
                {detail.data.movieInfoResult.movieInfo.nations[0].nationNm}
              </p>
              <p className="middel-p">
                {`${detail.data.movieInfoResult.movieInfo.audits[0].watchGradeNm.slice(
                  0,
                  3
                )} ${detail.data.movieInfoResult.movieInfo.audits[0].watchGradeNm.slice(
                  3,
                  5
                )} ${detail.data.movieInfoResult.movieInfo.audits[0].watchGradeNm.slice(
                  -3
                )}`}
              </p>
              <p>
                {detail.data.movieInfoResult.movieInfo.genres.map(
                  (genre, idx) => (
                    <span key={idx}>
                      {genre.genreNm}
                      {` / `}
                    </span>
                  )
                )}
              </p>
              <hr />
              <p className="actor-p">
                {detail.data.movieInfoResult.movieInfo.actors.map(
                  (actor, idx) => (
                    <span key={idx}>
                      {actor.peopleNm}
                      {` / `}
                    </span>
                  )
                )}
              </p>
              <p className="middel-p">
                {detail.data.movieInfoResult.movieInfo.showTm}분
              </p>
              <p>
                {detail.data.movieInfoResult.movieInfo.showTypes.map(
                  (type, idx) => (
                    <span key={idx}>
                      {type.showTypeNm}
                      {` / `}
                    </span>
                  )
                )}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default View;

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
      if (real) {
        return real;
      } else {
        return poster.data.results[0];
      }
    }
  }, [poster, detail]);

  return (
    <>
      <div className="view-container">
        <div className="poster">
          {poster === "" ? (
            posters ? (
              <Link to={`/movie/${sampleImg.id}`} className="poster-link">
                <img
                  src={`${imageTMDB}/w342${sampleImg.poster_path}`}
                  alt={`${sampleImg.title}의 포스터`}
                />
              </Link>
            ) : (
              <div className="loading"></div>
            )
          ) : (
            <Link to={`/movie/${realPoster().id}`} className="poster-link">
              <img
                src={`${imageTMDB}/w342${realPoster().poster_path}`}
                alt={`${realPoster().title}의 포스터`}
              />
            </Link>
          )}
        </div>
        <div className="informaiton">
          {detail === "" ? (
            details ? (
              <div>
                <h4>{sampleInfo.movieNm}</h4>
                <p>
                  {sampleInfo.movieNmOg === ""
                    ? sampleInfo.movieNmEn
                    : sampleInfo.movieNmOg}
                </p>
                <hr />
                <p>{`${sampleInfo.openDt.slice(0, 4)}-${sampleInfo.openDt.slice(
                  4,
                  6
                )}-${sampleInfo.openDt.slice(-2)}`}</p>
                <p>{sampleInfo.nations[0].nationNm}</p>
                <p>{sampleInfo.audits[0].watchGradeNm}</p>
                <p>
                  {sampleInfo.genres.map((genre, idx) => (
                    <span key={idx}>
                      {genre.genreNm}
                      {` / `}
                    </span>
                  ))}
                </p>
                <hr />
                <p>
                  {sampleInfo.actors.map((actor, idx) => (
                    <span key={idx}>
                      {actor.peopleNm}
                      {` / `}
                    </span>
                  ))}
                </p>
                <p>{sampleInfo.showTm}분</p>
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
                <p>개봉일</p>
                <p>제작국가</p>
                <p>관람등급</p>
                <p>장르</p>
                <hr />
                <p>배우</p>
                <p>상영시간</p>
                <p>상영형태</p>
              </div>
            )
          ) : (
            <div>
              <h4>{detail.data.movieInfoResult.movieInfo.movieNm}</h4>
              <p>
                {detail.data.movieInfoResult.movieInfo.movieNmOg === ""
                  ? detail.data.movieInfoResult.movieInfo.movieNmEn
                  : detail.data.movieInfoResult.movieInfo.movieNmOg}
              </p>
              <hr />
              <p>{`${detail.data.movieInfoResult.movieInfo.openDt.slice(
                0,
                4
              )}-${detail.data.movieInfoResult.movieInfo.openDt.slice(
                4,
                6
              )}-${detail.data.movieInfoResult.movieInfo.openDt.slice(-2)}`}</p>
              <p>{detail.data.movieInfoResult.movieInfo.nations[0].nationNm}</p>
              <p>
                {detail.data.movieInfoResult.movieInfo.audits[0].watchGradeNm}
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
              <p>
                {detail.data.movieInfoResult.movieInfo.actors.map(
                  (actor, idx) => (
                    <span key={idx}>
                      {actor.peopleNm}
                      {` / `}
                    </span>
                  )
                )}
              </p>
              <p>{detail.data.movieInfoResult.movieInfo.showTm}분</p>
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

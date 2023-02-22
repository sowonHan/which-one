import React from "react";
import "../../styles/View.scss";

const View = ({ detail, poster, loadingBoxOffice }) => {
  return (
    <>
      <div className="container">
        <div>포스터(tmdb search로 이미지 받아와야함)</div>
        <div>
          영화 상세정보 api
          <h4>영화명</h4>
          <p>원제목(한국영화일시 영문 출력)</p>
          <hr />
          <p>개봉일</p>
          <p>제작국가</p>
          <p>관람등급</p>
          <p>장르</p>
          <hr />
          <p>감독</p>
          <p>배우</p>
          <p>상영시간</p>
          <p>상영형태</p>
        </div>
      </div>
    </>
  );
};

export default View;

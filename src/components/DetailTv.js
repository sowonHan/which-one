import React from "react";
import { imageTMDB } from "../lib/config";
import Streaming from "./Streaming";
import Cast from "./Cast";
import GallerySlide from "./../components/GallerySlide";
import Similar from "./Similar";
import Recommendation from "./Recommendation";
import TvCard from "./common_page_slide/TvCard";

const DetailTv = ({ details, loadingDetails }) => {
  console.log(details);

  return (
    <>
      <section>
        <div>포스터</div>
        <div>
          <p>제목</p>
          <p>원제목</p>
          <p>개봉 또는 제작 상태</p>
          <p>연령등급</p>
          <p>제작 국가</p>
          <p>방송 채널</p>
          <p>장르</p>
          <p>총 시즌 개수</p>
          <p>총 에피소드 개수</p>
          <p>에피소드별 런타임</p>
          <p>첫 방영일</p>
          <p>마지막 방영일</p>
          <p>다음 에피소드 방영일</p>
          <p>평점</p>
          <p>시청 가능한 곳</p>
          <p>홈페이지</p>
        </div>
      </section>
      <section>
        <p>시놉시스</p>
        <p>키워드</p>
      </section>
      <section>
        <div>
          {/* 제작자는 details에 있는 창작자만 사용하고 연기자는 credits 데이터로 cast 컴포넌트에 넣음 */}
          <div>출연진 이미지</div>
          <p>출연진 이름</p>
        </div>
      </section>
    </>
  );
};

export default DetailTv;

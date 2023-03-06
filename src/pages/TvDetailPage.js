import React from "react";
import GallerySlide from "./../components/GallerySlide";
import Footer from "./../components/Footer";

const TvDetailPage = () => {
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
          {/* details에 있는 거 먼저 쓰고 그 다음에 credit */}
          <div>출연진 이미지</div>
          <p>출연진 이름</p>
        </div>
      </section>
      <GallerySlide />
      {/* 비슷한영화 추천영화 그냥 공용슬라이드 써도 될듯 */}
      <Footer />
    </>
  );
};

export default TvDetailPage;

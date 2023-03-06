import React from "react";
import GallerySlide from "./../components/GallerySlide";

const DetailMovie = ({ details, loadingDetails }) => {
  console.log(details);
  return (
    <>
      <section>
        <div>포스터</div>
        <div>
          <p>제목</p>
          <p>원제목</p>
          <p>개봉일</p>
          <p>개봉 또는 제작 상태</p>
          <p>제작 국가</p>
          <p>장르</p>
          <p>런타임</p>
          <p>연령등급</p>
          <p>평점</p>
          <p>시청 가능한 곳(극장용 영화는 없음)</p>
          <p>홈페이지</p>
        </div>
      </section>
      <section>
        <p>시놉시스</p>
        <p>키워드</p>
      </section>
      <section>
        <div>
          <div>출연진 이미지</div>
          <p>출연진 이름</p>
        </div>
        <p>제작 회사</p>
      </section>
      <GallerySlide />
      <section>
        <h2>비슷한 작품</h2>
        <div>
          작품 목록 슬라이드(공용슬라이드 사용)
          <div>포스터</div>
          <p>작품 제목</p>
        </div>
      </section>
      <section>
        <h2>추천 작품</h2>
        <div>
          작품 목록 슬라이드(공용슬라이드 사용)
          <div>포스터</div>
          <p>작품 제목</p>
        </div>
      </section>
    </>
  );
};

export default DetailMovie;

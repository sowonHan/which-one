import React from "react";

const Boxoffice = () => {
  return (
    <>
      <section>
        <article>
          <h2>박스오피스</h2>
          <h4>박스오피스 기간/일자</h4>
          <div>
            <button>일별</button>
            <button>주간</button>
          </div>
        </article>
        <article>
          <div>
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
          <div>
            <ul>
              <li>
                순위목록 10개
                <span>순번</span>
                <span>누적관객수</span>
                <span>상영횟수</span>
                <span>
                  순위 증감분(신규진입시 New 표시,기존항목일시 순위증감분 표시)
                </span>
              </li>
            </ul>
          </div>
        </article>
      </section>
      {/* 스와이퍼로 버튼 클릭 시 좌우로 움직이게 처리 */}
      <section>
        <article>
          <h2>독립·예술영화 박스오피스</h2>
          <h4>박스오피스 기간/일자</h4>
          <div>
            <button>일별</button>
            <button>주간</button>
          </div>
        </article>
        <article>
          <div>
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
          <div>
            <ul>
              <li>
                순위목록 10개
                <span>순번</span>
                <span>누적관객수</span>
                <span>상영횟수</span>
                <span>
                  순위 증감분(신규진입시 New 표시,기존항목일시 순위증감분 표시)
                </span>
              </li>
            </ul>
          </div>
        </article>
      </section>
    </>
  );
};

export default Boxoffice;

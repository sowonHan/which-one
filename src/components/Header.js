import React from "react";

const Header = () => {
  return (
    <>
      <nav>
        <h1>이것은 헤더</h1>
        <ul>
          <li>
            <a href="#!">
              <span>홈</span>
            </a>
          </li>
          <li>
            <a href="#!">
              <span>영화</span>
            </a>
          </li>
          <li>
            <a href="#!">
              <span>TV 프로그램</span>
            </a>
          </li>
        </ul>
        <div>
          <ul>
            <li>
              <a href="#!">
                <span>로그인</span>
              </a>
            </li>
            <li>
              <a href="#!">
                <span>회원가입</span>
              </a>
            </li>
            <li>
              <a href="#!">
                <span>MY</span>
              </a>
            </li>
          </ul>
          <button>
            돋보기마크
            <span>검색</span>
          </button>
        </div>
      </nav>
      <div>
        <input
          type="text"
          placeholder="제목, 배우 이름, 키워드, 장르 등을 검색해보세요."
        />
      </div>
    </>
  );
};

export default Header;

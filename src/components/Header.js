import React from "react";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <>
      <nav>
        <div>로고이미지</div>
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
              <span>TV</span>
            </a>
          </li>
        </ul>
        <div>
          <p>로그인 시에만 어서오세요</p>
          <div>클릭 아이콘</div>
          <div>
            클릭 시 나오는 세로메뉴
            <ul>
              <li>
                <a href="#!">
                  <span>로그인</span>
                </a>
              </li>
              <li>
                <a href="#!">
                  <span>마이페이지</span>
                </a>
              </li>
              <li>
                <a href="#!">
                  <span>회원가입</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <SearchBar />
      </nav>
    </>
  );
};

export default Header;

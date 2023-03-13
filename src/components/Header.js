import React from "react";
import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";
import "../styles/Header.scss";

const Header = () => {
  const activeStyle = {
    color: "skyblue",
  };

  return (
    <>
      <nav className="nav-web">
        <div>로고이미지</div>
        <ul className="menu-list">
          <li>
            <NavLink
              className="menu-button"
              to="/"
              end
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              홈
            </NavLink>
          </li>
          <li>
            <NavLink
              className="menu-button"
              to="/movie"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              영화
            </NavLink>
          </li>
          <li>
            <NavLink
              className="menu-button"
              to="/tv"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              TV 프로그램
            </NavLink>
          </li>
        </ul>
        <SearchBar />
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
      </nav>

      <nav className="nav-mobile">
        <div>로고이미지</div>
        <ul>
          <li>
            <NavLink
              to="/"
              end
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              홈
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movie"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              영화
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tv"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              TV
            </NavLink>
          </li>
        </ul>
        <SearchBar />
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
      </nav>
    </>
  );
};

export default Header;

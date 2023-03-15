import React from "react";
import SearchBar from "./SearchBar";
import Account from "./Account";
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
        <Account />
      </nav>

      <nav className="nav-mobile">
        <div className="top-con">
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
          <Account />
        </div>
        <div className="bottom-con">
          <SearchBar />
        </div>
      </nav>
    </>
  );
};

export default Header;

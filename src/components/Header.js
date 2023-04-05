import React from "react";
import SearchBar from "./SearchBar";
import Account from "./Account";
import { NavLink } from "react-router-dom";
import logo from "../images/headerLogo.png";
import "../styles/Header.scss";

const Header = () => {
  const activeStyle = {
    color: "skyblue",
  };

  return (
    <>
      <nav className="nav-web">
        <div className="logo-wrapper">
          <img src={logo} alt="사이트 로고" />
        </div>
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
        <div className="search-web">
          <SearchBar />
        </div>
        <Account />
      </nav>

      <nav className="nav-mobile">
        <div className="top-con">
          <div className="logo-wrapper">
            <img
              src={`${process.env.PUBLIC_URL}/logo192px.png`}
              alt="사이트 로고"
            />
          </div>
          <ul className="menu-list">
            <li>
              <NavLink
                to="/"
                end
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="menu-button"
              >
                홈
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/movie"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="menu-button"
              >
                영화
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tv"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="menu-button"
              >
                TV 프로그램
              </NavLink>
            </li>
          </ul>
          <div className="account-mobile">
            <Account />
          </div>
        </div>
        <div className="bottom-con">
          <SearchBar />
        </div>
      </nav>
    </>
  );
};

export default Header;

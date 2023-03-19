import React from "react";
import logo from "../../public/logo192px.png";
import { BiLinkExternal } from "react-icons/bi";
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="all-container">
        <div className="logo-con">
          <img src={logo} alt="사이트 로고" />
        </div>
        <div className="info-con">
          <div className="first-row">
            <div>
              <h6>API</h6>
              <div>The Movie DB</div>
              <div>영화진흥위원회 Open API</div>
            </div>
            <div>
              <h6>Used Skills</h6>
              <p>HTML5</p>
              <p>Sass</p>
              <p>Javascript</p>
              <p>React</p>
              <p>Redux</p>
              <p>Redux-thunk</p>
            </div>
            <div>
              <h6>Image Source</h6>
              <p>Unsplash</p>
              <p>Pexels</p>
            </div>
          </div>
          <div className="second-row">
            <p>2023 Which-One Demand-On.</p>
            <a href="https://github.com/sowonHan/which-one">
              <span>About Project</span>
              <BiLinkExternal />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

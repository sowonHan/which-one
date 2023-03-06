import React from "react";
import "../styles/NotFound.scss";

const NotFound = () => {
  return (
    <>
      <div className="nf-container">
        <div className="title">
          <h1>페이지를</h1>
          <h1>찾을 수 없습니다</h1>
        </div>
        <p>주소가 올바른지 확인해주세요.</p>
      </div>
    </>
  );
};

export default NotFound;

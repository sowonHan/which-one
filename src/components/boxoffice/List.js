import React from "react";
import "../../styles/List.scss";

const List = ({ children }) => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th className="table-head">순번</th>
            <th className="table-head">영화 제목</th>
            <th className="table-head no-mobile">누적관객수</th>
            <th className="table-head no-mobile">당일상영수</th>
            <th className="table-head">증감률</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </>
  );
};

export default List;

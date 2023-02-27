import React from "react";
import "../../styles/List.scss";

const List = ({ children }) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>순번</th>
            <th>영화 제목</th>
            <th>누적관객수</th>
            <th>당일상영수</th>
            <th>증감률</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

export default List;

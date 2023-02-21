import React from "react";

const List = ({ children }) => {
  return (
    <div>
      <table>
        <tr>
          <th>순번</th>
          <th>영화 제목</th>
          <th>누적관객수</th>
          <th>당일상영수</th>
          <th>증감률</th>
        </tr>
        <tr>{children}</tr>
      </table>
    </div>
  );
};

export default List;

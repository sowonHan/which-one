import React from "react";

const ListItem = () => {
  return (
    <tr>
      <td>순번</td>
      <td>영화 제목</td>
      <td>누적관객수</td>
      <td>상영횟수</td>
      <td>
        증감률(신규진입시 New 표시,기존항목일시 순위증감분 표시) 기호
        <span>증감률 숫자</span>
      </td>
    </tr>
  );
};

export default ListItem;

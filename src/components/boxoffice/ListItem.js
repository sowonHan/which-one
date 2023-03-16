import React from "react";
import { FcMinus, FcUp, FcDown } from "react-icons/fc";
import "../../styles/ListItem.scss";

const ListItem = ({ data, onView }) => {
  return (
    <tr onMouseOver={() => onView(data.movieNm)} className="item-con">
      <td>{data.rank}</td>
      <td>{data.movieNm}</td>
      <td>{data.audiAcc.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
      <td>{data.showCnt.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
      <td>
        {data.rankOldAndNew === "NEW" ? (
          <span>{data.rankOldAndNew}</span>
        ) : data.rankInten === "0" ? (
          <FcMinus />
        ) : Number(data.rankInten) > 0 ? (
          <p className="up">
            <FcUp className="up-icon" />
            <span>{Number(data.rankInten)}</span>
          </p>
        ) : (
          <p className="down">
            <FcDown />
            <span>{Math.abs(Number(data.rankInten))}</span>
          </p>
        )}
      </td>
    </tr>
  );
};

export default ListItem;

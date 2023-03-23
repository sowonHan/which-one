import React from "react";
import { TiArrowUpThick, TiArrowDownThick, TiMinus } from "react-icons/ti";
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
          <span className="new">{data.rankOldAndNew}</span>
        ) : data.rankInten === "0" ? (
          <TiMinus />
        ) : Number(data.rankInten) > 0 ? (
          <p className="up">
            <TiArrowUpThick className="up-icon" />
            <span>{Number(data.rankInten)}</span>
          </p>
        ) : (
          <p className="down">
            <TiArrowDownThick />
            <span>{Math.abs(Number(data.rankInten))}</span>
          </p>
        )}
      </td>
    </tr>
  );
};

export default ListItem;

import React from "react";
import { FcMinus, FcUp, FcDown } from "react-icons/fc";
import "../../styles/ListItem.scss";

const ListItem = ({ day }) => {
  // const {rank, rankInten, rankOldAndNew, movieNm} = datum;

  return (
    <tr>
      <td>{day.rank}</td>
      <td>{day.movieNm}</td>
      <td>{day.audiAcc.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
      <td>{day.showCnt.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
      <td>
        {day.rankOldAndNew === "NEW" ? (
          <span>{day.rankOldAndNew}</span>
        ) : day.rankInten === "0" ? (
          <FcMinus />
        ) : Number(day.rankInten) > 0 ? (
          <p className="up">
            <FcUp />
            <span>{Number(day.rankInten)}</span>
          </p>
        ) : (
          <p className="down">
            <FcDown />
            <span>{Math.abs(Number(day.rankInten))}</span>
          </p>
        )}
      </td>
    </tr>
  );
};

export default ListItem;

import React from "react";
import { FcMinus, FcUp, FcDown } from "react-icons/fc";
import "../../styles/ListItem.scss";

const ListItem = ({ datum }) => {
  // const {rank, rankInten, rankOldAndNew, movieNm} = datum;

  return (
    <tr>
      <td>{datum.rank}</td>
      <td>{datum.movieNm}</td>
      <td>{datum.audiAcc}</td>
      <td>{datum.showCnt}</td>
      <td>
        {datum.rankOldAndNew === "NEW" ? (
          <span>{datum.rankOldAndNew}</span>
        ) : datum.rankInten === "0" ? (
          <FcMinus />
        ) : Number(datum.rankInten) > 0 ? (
          <p className="up">
            <FcUp />
            <span>{Number(datum.rankInten)}</span>
          </p>
        ) : (
          <p className="down">
            <FcDown />
            <span>{Number(datum.rankInten)}</span>
          </p>
        )}
      </td>
    </tr>
  );
};

export default ListItem;

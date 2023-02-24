import React from "react";
import { imageTMDB } from "../../lib/config";
import "../../styles/Card.scss";

const TvCard = ({ result }) => {
  return (
    <>
      <div className="link">
        <div>
          <img
            className="image"
            src={`${imageTMDB}/w300${result.poster_path}`}
            alt={`${result.name}의 포스터`}
          />
        </div>
        <div>
          <h6>{result.name}</h6>
        </div>
      </div>
    </>
  );
};

export default TvCard;

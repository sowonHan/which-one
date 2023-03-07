import React from "react";
import { imageTMDB } from "../../lib/config";
import { Link } from "react-router-dom";
import "../../styles/Card.scss";

const TvCard = ({ result, linkUrl }) => {
  return (
    <>
      <Link to={linkUrl} className="link">
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
      </Link>
    </>
  );
};

export default TvCard;
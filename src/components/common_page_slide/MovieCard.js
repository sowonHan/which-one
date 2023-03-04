import React from "react";
import { imageTMDB } from "../../lib/config";
import { Link } from "react-router-dom";
import "../../styles/Card.scss";

const MovieCard = ({ result, linkUrl }) => {
  return (
    <>
      <Link to={linkUrl} className="link">
        <div>
          <img
            className="image"
            src={`${imageTMDB}/w300${result.poster_path}`}
            alt={`${result.title}의 포스터`}
          />
        </div>
        <div>
          <h6>{result.title}</h6>
        </div>
      </Link>
    </>
  );
};

export default MovieCard;

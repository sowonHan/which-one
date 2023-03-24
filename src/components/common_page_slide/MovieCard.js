import React from "react";
import { imageTMDB } from "../../lib/config";
import { Link } from "react-router-dom";
import "../../styles/Card.scss";

const MovieCard = ({ result, linkUrl }) => {
  return (
    <>
      <Link to={linkUrl}>
        <div>
          {result.poster_path ? (
            <img
              className="card-image"
              src={`${imageTMDB}/w300${result.poster_path}`}
              alt={`${result.title}의 포스터`}
            />
          ) : (
            <div className="no-image">No Image</div>
          )}
        </div>
        <div>
          <h6 className="card-text">{result.title}</h6>
        </div>
      </Link>
    </>
  );
};

export default MovieCard;

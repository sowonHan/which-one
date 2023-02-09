import React from "react";
import { imageTMDB } from "../../lib/config";

const Card = ({ result }) => {
  return (
    <>
      <div className="link">
        <div>
          <img
            src={`${imageTMDB}/w185${result.poster_path}`}
            alt={`${result.title}의 포스터`}
          />
        </div>
        <div>
          <h6>{result.title}</h6>
        </div>
      </div>
    </>
  );
};

export default Card;

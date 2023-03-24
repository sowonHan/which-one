import React from "react";
import { imageTMDB } from "../lib/config";
import { Link } from "react-router-dom";
import "../styles/IssueTv.scss";

const IssueTv = ({ issue, loadingIssue }) => {
  return (
    <>
      <section className="all-container">
        {loadingIssue ? (
          <div className="background-loading">
            <div className="info-container"></div>
          </div>
        ) : (
          issue && (
            <div
              className="background"
              style={{
                backgroundImage: `url(${imageTMDB}/original${issue.backdrop_path})`,
              }}
            >
              <div className="info-container">
                <div className="poster-container">
                  <Link to={`/tv/${issue.id}`} className="poster-link">
                    <img
                      className="poster"
                      src={`${imageTMDB}/w500${issue.poster_path}`}
                      alt={`${issue.name}의 포스터`}
                    />
                  </Link>
                </div>
                <div className="text-container">
                  <Link to={`/tv/${issue.id}`}>
                    <h1 className="name">{issue.name}</h1>
                  </Link>
                  <Link to={`/tv/${issue.id}`}>
                    <h6 className="origin-name">{issue.original_name}</h6>
                  </Link>
                </div>
              </div>
            </div>
          )
        )}
      </section>
    </>
  );
};

export default IssueTv;

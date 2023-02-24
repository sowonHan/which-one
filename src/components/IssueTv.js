import React from "react";
import { imageTMDB } from "../lib/config";
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
              className="backdrop"
              style={{
                backgroundImage: `url(${imageTMDB}/original${issue.backdrop_path})`,
              }}
            >
              <div className="info-container">
                <div className="poster-container">
                  <img
                    className="poster"
                    src={`${imageTMDB}/w500${issue.poster_path}`}
                    alt={`${issue.name}의 포스터`}
                  />
                </div>
                <div className="text-container">
                  <h1 className="en-name">{issue.name}</h1>
                  <h6 className="origin-name">{issue.original_name}</h6>
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

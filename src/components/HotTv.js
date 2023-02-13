import React from "react";
import ReactPlayer from "react-player/youtube";
import "../styles/HotTv.scss";
import { imageTMDB } from "../lib/config";

const HotTv = ({ trailer, program, loadingTrailer }) => {
  return (
    <>
      <section>
        <div className="hot-container">
          {loadingTrailer ? (
            <div className="player-loading" />
          ) : (
            trailer && (
              <div className="player-wrapper">
                <ReactPlayer
                  className="react-player"
                  url={`https://www.youtube.com/embed/${trailer.key}?enablejsapi=1&origin=http://localhost:3000`}
                  playing={false}
                  loop={true}
                  muted={true}
                  width="100%"
                  height="150%"
                />
              </div>
            )
          )}
          <div className="info-container">
            {loadingTrailer ? (
              <div></div>
            ) : (
              program && (
                <div className="info-wrapper">
                  <div className="poster-container">
                    <img
                      className="poster"
                      src={`${imageTMDB}/original${program.poster_path}`}
                      alt={`${program.name}의 포스터`}
                    />
                  </div>
                  <div className="text-container">
                    <h1 className="en-name">{program.name}</h1>
                    <h6 className="origin-name">{program.original_name}</h6>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default HotTv;

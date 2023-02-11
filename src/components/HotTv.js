import React from "react";
import ReactPlayer from "react-player/youtube";
import "../styles/HotTv.scss";

const HotTv = ({ trailer, program, loadingTrailer }) => {
  return (
    <>
      <section>
        <div className="player-wrapper">
          {loadingTrailer ? (
            <div className="player-loading" />
          ) : (
            trailer && (
              <ReactPlayer
                className="player"
                url={`https://www.youtube.com/embed/${trailer.key}?enablejsapi=1&origin=http://localhost:3000`}
                playing={true}
                loop={true}
                muted={true}
                width="100%"
                height="100%"
              />
            )
          )}
          <div className="text-container">
            {loadingTrailer ? (
              <div></div>
            ) : (
              program && (
                <div>
                  <h1 className="en-name">{program.name}</h1>
                  <h6 className="origin-name">{program.original_name}</h6>
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

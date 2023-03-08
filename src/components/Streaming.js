import React from "react";
import "../styles/Streaming.scss";
import { imageTMDB } from "../lib/config";

const Streaming = ({ details }) => {
  return (
    <>
      <div className="flatrate">
        <p>스트리밍 : </p>
        {details["watch/providers"].results.hasOwnProperty("KR") ? (
          details["watch/providers"].results.KR.flatrate ? (
            details["watch/providers"].results.KR.flatrate.map((provider) => (
              <div key={provider.provider_id} className="logo-con">
                <img
                  className="logo"
                  src={`${imageTMDB}/w45${provider.logo_path}`}
                  alt={`${provider.provider_name}의 로고`}
                />
                <p>{provider.provider_name}</p>
              </div>
            ))
          ) : (
            <p>없음</p>
          )
        ) : (
          <p>없음</p>
        )}
      </div>
    </>
  );
};

export default Streaming;

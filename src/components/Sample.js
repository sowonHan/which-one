import React from "react";
import { useEffect } from "react";
import { axiosKofic } from "../lib/config";
import { paramDaily } from "../lib/apiKofic";
// import { boxOfficeMainDaily } from "../lib/apiKofic";

const Sample = () => {
  useEffect(() => {
    const func = async () => {
      try {
        const response = await axiosKofic.get(
          `/boxoffice/searchDailyBoxOfficeList.json`,
          {
            params: {
              targetDt: paramDaily,
            },
          }
        );

        console.log(response);
        console.log(`export한 param값: ${paramDaily}`);
      } catch (e) {
        console.log(`에러: ${e}`);
      }
    };
    func();
  }, []);

  return (
    <div>
      <p>테스트</p>
    </div>
  );
};

export default Sample;

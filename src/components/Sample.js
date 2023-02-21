import React from "react";
import { useEffect } from "react";
import { axiosKofic } from "../lib/config";

const Sample = () => {
  let now = new Date();
  const year = now.getFullYear();
  const month = ("0" + (now.getMonth() + 1)).slice(-2);
  const dateDaily = new Date(now.setDate(now.getDate() - 1)).getDate();
  const paramDaily = year + month + dateDaily;

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

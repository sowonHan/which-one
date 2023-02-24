import React, { useEffect, useState } from "react";
import { axiosKofic } from "../lib/config";
import { paramDaily } from "../lib/apiKofic";
// import { boxOfficeMainDaily } from "../lib/apiKofic";

const Sample = () => {
  const [data, setData] = useState(null);
  // useEffect(() => {
  //   const func = async () => {
  //     try {
  //       const response = await axiosKofic.get(
  //         `/boxoffice/searchDailyBoxOfficeList.json`,
  //         {
  //           params: {
  //             targetDt: paramDaily,
  //           },
  //         }
  //       );

  //       console.log(response);
  //       console.log(`export한 param값: ${paramDaily}`);
  //     } catch (e) {
  //       console.log(`에러: ${e}`);
  //     }
  //   };
  //   func();
  // }, []);
  const onClick = async () => {
    try {
      const response = await axiosKofic.get(
        `/boxoffice/searchDailyBoxOfficeList.json`,
        {
          params: {
            targetDt: paramDaily,
          },
        }
      );
      setData(response.data);
      console.log(response);
      console.log(`export한 param값: ${paramDaily}`);
    } catch (e) {
      console.log(`에러: ${e}`);
    }
  };

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
  );
};

export default Sample;

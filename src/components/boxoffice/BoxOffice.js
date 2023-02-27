import React, { useEffect, useState, useCallback } from "react";
import { axiosKofic } from "../../lib/config";
import { paramDaily, paramWeekly } from "../../lib/apiKofic";
import { searchMovie } from "../../lib/apiTMDB";
import View from "./View";
import List from "./List";
import ListItem from "./ListItem";
import "../../styles/BoxOffice.scss";

const BoxOffice = () => {
  const [days, setDays] = useState(null);
  const [weeks, setWeeks] = useState(null);
  const [details, setDetails] = useState(null);
  const [posters, setPosters] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("day");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response1 = await axiosKofic.get(
          "/boxoffice/searchDailyBoxOfficeList.json",
          {
            params: {
              targetDt: paramDaily,
            },
          }
        );
        setDays(response1.data.boxOfficeResult);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    setTimeout(async () => {
      try {
        const response2 = await axiosKofic.get(
          "/boxoffice/searchWeeklyBoxOfficeList.json",
          {
            params: {
              targetDt: paramWeekly,
              weekGb: "0",
            },
          }
        );
        setWeeks(response2.data.boxOfficeResult);

        const obj = [
          ...days.dailyBoxOfficeList,
          ...response2.data.boxOfficeResult.weeklyBoxOfficeList,
        ];

        const filterings = obj.filter((value, idx, arr) => {
          return (
            arr.findIndex((item) => item.movieNm === value.movieNm) === idx
          );
        });

        const response3 = await Promise.all(
          filterings.map((filtering) => {
            return axiosKofic.get("/movie/searchMovieInfo.json", {
              params: {
                movieCd: filtering.movieCd,
              },
            });
          })
        );
        setDetails(response3);
        console.log("상세정보 api");
        console.log(response3);

        const response4 = await Promise.all(
          filterings.map((filtering) => {
            return searchMovie(filtering.movieNm);
          })
        );
        setPosters(response4);
        console.log("포스터 검색");
        console.log(response4);
      } catch (e) {
        console.log(e);
      }
    }, 2000);
  }, [days.dailyBoxOfficeList]);

  // const onWeek = useCallback(async () => {
  //   try {
  //     const response = await axiosKofic.get(
  //       "/boxoffice/searchWeeklyBoxOfficeList.json",
  //       {
  //         params: {
  //           targetDt: paramWeekly,
  //           weekGb: "0",
  //         },
  //       }
  //     );

  //     if (items.hasOwnProperty('"dailyBoxOfficeList')) {
  //     }

  //     setData(response.data);
  //   } catch (e) {
  //     console.log(`에러: ${e}`);
  //   }
  // }, [response, items]);

  return (
    <section>
      <div className="container">
        <div className="nav-container">
          <h5>{}</h5>
          <button>일별</button>
          <button>주간</button>
        </div>
        <div className="page-container">
          {}
          <View />
          <List>
            {loading ? (
              <td>불러오는 중...</td>
            ) : days ? (
              days.dailyBoxOfficeList.map((day) => (
                <ListItem key={day.rnum} day={day} />
              ))
            ) : (
              <td>데이터를 불러올 수 없습니다.</td>
            )}
          </List>
        </div>
      </div>
    </section>
  );
};

export default BoxOffice;

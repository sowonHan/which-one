import React, { useEffect, useState, useCallback } from "react";
import { axiosKofic } from "../../lib/config";
import { paramDaily, paramWeekly } from "../../lib/apiKofic";
import { searchMovie } from "../../lib/apiTMDB";
import View from "./View";
import List from "./List";
import ListItem from "./ListItem";
import "../../styles/BoxOffice.scss";

const BoxOffice = () => {
  const [loading, setLoading] = useState(false);
  const [days, setDays] = useState(null);
  const [weeks, setWeeks] = useState(null);
  const [details, setDetails] = useState(null);
  const [posters, setPosters] = useState(null);
  const [status, setStatus] = useState("day");
  const [now, setNow] = useState({
    detail: "",
    poster: "",
  });

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
    setLoading(true);
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

        if (days) {
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

          const response4 = await Promise.all(
            filterings.map((filtering) => {
              return searchMovie(filtering.movieNm);
            })
          );
          setPosters(response4);
        }
      } catch (e) {
        console.log(e);
      }
    }, 500);
    setLoading(false);
  }, [days]);

  const onDay = useCallback(
    (action, e) => {
      if (status === action) {
        e.preventDefault();
      } else {
        setStatus("day");
      }
    },
    [status]
  );

  const onWeek = useCallback(
    (action, e) => {
      if (status === action) {
        e.preventDefault();
      } else {
        setStatus("week");
      }
    },
    [status]
  );

  const onView = (movieNm) => {
    setNow({
      detail: details.find(
        (detail) => detail.data.movieInfoResult.movieInfo.movieNm === movieNm
      ),
      poster: posters.find((poster) => poster.config.params.query === movieNm),
    });
  };

  return (
    <section>
      {loading ? (
        <div className="container">
          <div className="nav-container">
            <div></div>
            <button>일별</button>
            <button>주간</button>
          </div>
          <div className="page-container">
            <View />
            <List>
              <tr>
                <td>불러오는 중...</td>
              </tr>
            </List>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="nav-container">
            <h5>
              {loading
                ? ""
                : days
                ? status === "day"
                  ? days.showRange
                  : weeks.showRange
                : ""}
            </h5>
            <button onClick={(e) => onDay("day", e)}>일별</button>
            <button onClick={(e) => onWeek("week", e)}>주간</button>
          </div>
          <div className="page-container">
            <View details={details} posters={posters} now={now} />
            <List onView={onView}>
              {loading ? (
                <tr>
                  <td>불러오는 중...</td>
                </tr>
              ) : days ? (
                status === "day" ? (
                  days.dailyBoxOfficeList.map((data) => (
                    <ListItem key={data.rnum} data={data} onView={onView} />
                  ))
                ) : (
                  weeks.weeklyBoxOfficeList.map((data) => (
                    <ListItem key={data.rnum} data={data} onView={onView} />
                  ))
                )
              ) : (
                <tr>
                  <td>데이터를 불러올 수 없습니다.</td>
                </tr>
              )}
            </List>
          </div>
        </div>
      )}
    </section>
  );
};

export default BoxOffice;

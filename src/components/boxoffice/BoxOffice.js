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
    }, 100);
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

  const onView = useCallback(
    (movieNm) => {
      setNow({
        detail: details.find(
          (detail) => detail.data.movieInfoResult.movieInfo.movieNm === movieNm
        ),
        poster: posters.find(
          (poster) => poster.config.params.query === movieNm
        ),
      });
    },
    [details, posters]
  );

  return (
    <section>
      {loading ? (
        <div className="boxoffice-container">
          <h1 className="container-name">박스오피스</h1>
          <div className="nav-container">
            <div></div>
            <div className="button-wrapper">
              <button className="nav-button">일별</button>
              <button className="nav-button">주간</button>
            </div>
          </div>
          <div className="page-container">
            <View />
            <List>
              <tr className="no-data">
                <td>불러오는 중...</td>
              </tr>
            </List>
          </div>
        </div>
      ) : (
        <div className="boxoffice-container">
          <h1 className="container-name">박스오피스</h1>
          <div className="nav-container">
            <h5 className="date-range">
              {loading
                ? ""
                : days
                ? status === "day"
                  ? `${days.showRange.slice(0, 4)}.${days.showRange.slice(
                      4,
                      6
                    )}.${days.showRange.slice(6, 8)}  ${days.showRange.slice(
                      8,
                      9
                    )}  ${days.showRange.slice(9, 13)}.${days.showRange.slice(
                      13,
                      15
                    )}.${days.showRange.slice(-2)}`
                  : `${weeks.showRange.slice(0, 4)}.${weeks.showRange.slice(
                      4,
                      6
                    )}.${weeks.showRange.slice(6, 8)}  ${weeks.showRange.slice(
                      8,
                      9
                    )}  ${weeks.showRange.slice(9, 13)}.${weeks.showRange.slice(
                      13,
                      15
                    )}.${weeks.showRange.slice(-2)}`
                : ""}
            </h5>
            <div className="button-wrapper">
              <button className="nav-button" onClick={(e) => onDay("day", e)}>
                일별
              </button>
              <button className="nav-button" onClick={(e) => onWeek("week", e)}>
                주간
              </button>
            </div>
          </div>
          <div className="page-container">
            <View details={details} posters={posters} now={now} />
            <List onView={onView}>
              {loading ? (
                <tr className="no-data">
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
                <tr className="no-data">
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

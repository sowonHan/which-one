import React, { useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSearch, getSerachInit } from "./../modules/search";
import { imageTMDB } from "../lib/config";
import { Link } from "react-router-dom";
import "../styles/SearchBar.scss";

const SearchBar = () => {
  const [keyword, setKeyword] = useState("");
  const search = useSelector((state) => state.searchReducer.search);
  const dispatch = useDispatch();

  const getList = useCallback(
    (keyword) => {
      dispatch(getSearch(keyword));
    },
    [dispatch]
  );

  const getInitList = useCallback(() => {
    dispatch(getSerachInit());
  }, [dispatch]);

  const handleKeyword = (e) => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    if (keyword) {
      getList(keyword);
    } else {
      getInitList();
    }
  }, [keyword, getList, getInitList]);

  return (
    <div className="search-container">
      <div className="input-container">
        <form>
          <label>
            <input
              type="text"
              placeholder="영화, 드라마, TV 프로그램, 배우를 검색해보세요."
              onChange={handleKeyword}
            />
            {/* 아이콘 */}
          </label>
        </form>
      </div>
      <div className="result-container">
        <ul>
          {search &&
            search.results.map((result) =>
              result.media_type === "person" ? (
                <li key={result.id}>
                  <a
                    href={`https://www.themoviedb.org/person/${result.id}`}
                    className="list-item"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="item-image"
                      src={`${imageTMDB}/w45${result.profile_path}`}
                      alt={`${result.name}의 사진`}
                    />
                    <p>{result.name}</p>
                  </a>
                </li>
              ) : result.media_type === "tv" ? (
                <li key={result.id}>
                  <Link to={`/tv/${result.id}`} className="list-item">
                    <img
                      className="item-image"
                      src={`${imageTMDB}/w92${result.poster_path}`}
                      alt={`${result.name}의 사진`}
                    />
                    <p>{result.name}</p>
                  </Link>
                </li>
              ) : (
                <li key={result.id}>
                  <Link to={`/movie/${result.id}`} className="list-item">
                    <img
                      className="item-image"
                      src={`${imageTMDB}/w92${result.poster_path}`}
                      alt={`${result.title}의 사진`}
                    />
                    <p>{result.title}</p>
                  </Link>
                </li>
              )
            )}
        </ul>
      </div>
    </div>
  );
};

export default React.memo(SearchBar);

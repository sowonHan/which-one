import React from "react";

const SearchBar = () => {
  return (
    <div>
      <div>
        검색창
        <form>
          <label>
            <input
              type="text"
              placeholder="찾고 싶은 영화, 드라마, TV 프로그램, 배우를 검색해보세요."
            />
            아이콘
          </label>
        </form>
      </div>
      <div>
        검색결과란
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;

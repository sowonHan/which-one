import React from "react";
import "../styles/SampleComponent.scss";
import { image_TMDB } from "../lib/configTMDB";

const Item = ({ result }) => {
  return (
    <div>
      <img
        src={`${image_TMDB}w185${result.poster_path}`}
        alt={`${result.title}의 포스터`}
      />
      <div>{result.title}</div>
      <div>{result.original_title}</div>
      <div>{result.release_date}</div>
    </div>
  );
};

const SampleComponent = ({ loading, popular }) => {
  return (
    <div>
      <section>
        <h1>API 테스트</h1>
        {loading && "로딩 중..."}
        {!loading && popular && (
          <div className="item_container">
            {popular.results.map((result) => (
              <Item result={result} key={result.id} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default SampleComponent;

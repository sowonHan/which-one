import React from "react";

const Item = ({ result }) => {
  return (
    <div>
      <div>{result.poster_path}</div>
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
          <div>
            <div>
              {popular.results.map((result) => (
                <Item result={result} key={result.id} />
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default SampleComponent;

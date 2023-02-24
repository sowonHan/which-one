import React from "react";
import Loading from "./common_page_slide/Loading";
import Carousel from "./common_page_slide/Carousel";
import Card from "./common_page_slide/Card";

const Test = ({ tr, p, top, loadingTr, loadingP, loadingTop }) => {
  return (
    <>
      <section>
        <h1>요즘 트렌드</h1>
        {loadingTr ? (
          <Loading />
        ) : (
          tr && (
            <Carousel>
              {tr.results.map((result) => (
                <Card result={result} key={result.id} />
              ))}
            </Carousel>
          )
        )}
      </section>
      <section>
        <h1>인기 프로그램</h1>
        {loadingP ? (
          <Loading />
        ) : (
          p && (
            <Carousel>
              {p.results.map((result) => (
                <Card result={result} key={result.id} />
              ))}
            </Carousel>
          )
        )}
      </section>
      <section>
        <h1>평점이 높은 TV프로그램</h1>
        {loadingTop ? (
          <Loading />
        ) : (
          top && (
            <Carousel>
              {top.results.map((result) => (
                <Card result={result} key={result.id} />
              ))}
            </Carousel>
          )
        )}
      </section>
    </>
  );
};

export default Test;

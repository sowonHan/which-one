import React from "react";
import Footer from "./../components/Footer";
import "../styles/MainPage.scss";

const MainPage = () => {
  return (
    <>
      <section className="first-con">
        <div className="first-text">
          <h2>환영합니다! 어떤 작품을 보여드릴까요?</h2>
          <p>Which One Demand On (WODO) 을 소개합니다.</p>
        </div>
      </section>
      <section className="second-con">
        <div className="second-text">
          <h3>오늘 영화관이나 갈까? 근데 뭐 보지?</h3>
          <p>현재 상영 중인 영화의 박스오피스 순위를 알려드립니다.</p>
        </div>
      </section>
      <section className="third-con">
        <div className="third-text">
          <h3>요즘은 다들 뭐 보고 사나</h3>
          <p>화제를 모으고 있는 영화, 드라마, TV 프로그램을 소개해드립니다.</p>
          <p>둘러보다 보면 취향에 맞는 작품을 만날 수 있을 거예요.</p>
        </div>
      </section>
      <section className="fourth-con">
        <div className="fourth-text">
          <h3>나는 집에서 편안하게 볼래</h3>
          <p>
            그렇다면 원하는 작품을 어느 OTT 플랫폼에서 시청할 수 있는지가 매우
            중요하죠.
          </p>
          <p>WODO에서 지금 바로 확인해보세요!</p>
          <p>
            (※ WODO는 JustWatch에서 제공하는 정보를 기반으로 하고 있습니다.
            라프텔, 티빙, 쿠팡플레이 등 조회되지 않는 서비스 플랫폼이 존재하는
            점을 안내 드립니다.)
          </p>
        </div>
      </section>
      <section className="last-con">
        <div className="last-text">
          <h2>모든 영화, 드라마, TV 프로그램 정보를 한 번에</h2>
          <p>Which One Demand On (WODO) 과 함께하세요.</p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MainPage;

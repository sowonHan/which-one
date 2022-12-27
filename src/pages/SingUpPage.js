import React from "react";

const SingUpPage = () => {
  return (
    <>
      <header>헤더, 메뉴</header>
      <main>
        <h1>회원 가입</h1>
        <div>
          이메일
          <input type="text" />
        </div>
        <div>
          사용할 이름
          <input type="text" />
        </div>
        <div>
          비밀번호 (일단 제약 없이 시작하고 조건 하나씩 걸어보기)
          <input type="text" />
        </div>
        <div>
          비밀번호 확인
          <input type="text" />
        </div>
      </main>
      <footer>푸터</footer>
    </>
  );
};

export default SingUpPage;

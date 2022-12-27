import React from "react";

const SignInPage = () => {
  return (
    <div>
      <header>헤더</header>
      <main>
        <h1>로그인</h1>
        <div>
          ID :<input type="text" placeholder="ooo@gmail.com" />
        </div>
        <div>
          비밀번호 :<input type="text" />
        </div>
        <div>회원가입 이동 링크</div>
      </main>
      <footer>푸터</footer>
    </div>
  );
};

export default SignInPage;

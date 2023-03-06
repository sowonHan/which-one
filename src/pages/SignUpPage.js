import React from "react";

const SignUpPage = () => {
  return (
    <>
      <main>
        <h1>회원 가입</h1>
        {/* 틀만 대충 만들었고 제대로 하려면 북마크해둔 form 및 정규식 표현 유효성 검사 라이브러리 참고하는 게 좋을 듯... */}
        <form>
          <div>
            <label htmlFor="id">Email :</label>
            <input
              type="email"
              placeholder="sample@gmail.com"
              id="id"
              required
            />
          </div>
          <div>
            <label htmlFor="nickname">사용할 이름 :</label>
            <input type="text" id="nickname" />
          </div>
          <div>
            <label htmlFor="password">비밀번호 :</label>
            <input
              type="password"
              id="password"
              required
              placeholder="숫자와 영문 포함 8글자"
            />
          </div>
          <div>
            <label htmlFor="check">비밀번호 확인 :</label>
            <input
              type="password"
              id="check"
              required
              placeholder="숫자와 영문 포함 8글자"
            />
          </div>
        </form>
      </main>
      <footer>푸터</footer>
    </>
  );
};

export default SignUpPage;

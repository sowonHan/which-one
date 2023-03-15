import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeInput, signIn, reset } from "../modules/account";
import { useNavigate, Link } from "react-router-dom";

const SignInPage = () => {
  const { input, accounts } = useSelector(({ accountReducer }) => ({
    input: accountReducer.input,
    accounts: accountReducer.accounts,
  }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = useCallback(
    (e) => {
      dispatch(changeInput(e.target));
    },
    [dispatch]
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const confirm = accounts.find(
        (account) =>
          account.email === input.email && account.password === input.password
      );
      if (confirm) {
        dispatch(signIn(input));
        dispatch(reset());
        return navigate("/");
      } else {
        alert("이메일 혹은 비밀번호가 올바르지 않습니다.");
        return;
      }
    },
    [dispatch, navigate, input, accounts]
  );

  return (
    <div>
      <main>
        <h1>로그인</h1>
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              placeholder="sample@gmail.com"
              id="email"
              required
              value={input.email}
              onChange={onChange}
            />
          </div>
          <div>
            <label htmlFor="password">비밀번호 :</label>
            <input
              type="password"
              id="password"
              required
              placeholder="숫자와 영문 포함 8글자"
              value={input.password}
              onChange={onChange}
            />
          </div>
          <button>로그인</button>
        </form>
        <Link to="/join">처음이신가요? 새 계정 만들러 가기</Link>
      </main>
      <footer>푸터</footer>
    </div>
  );
};

export default React.memo(SignInPage);

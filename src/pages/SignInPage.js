import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeInput, signIn, reset } from "../modules/account";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/SignPage.scss";

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
    <motion.div
      className="body-flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="sign-title">로그인</h1>
      <form onSubmit={onSubmit}>
        <div className="form-item">
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            placeholder="sample@gmail.com"
            id="email"
            value={input.email}
            onChange={onChange}
            pattern="^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}$"
            title="sample12@gmail.com"
            required
          />
        </div>
        <div className="form-item">
          <label htmlFor="password">비밀번호 :</label>
          <input
            type="password"
            id="password"
            placeholder="8~12글자의 숫자,영문,특수문자"
            value={input.password}
            onChange={onChange}
            pattern="^(?=.*[A-Za-z])(?=.*\\d)(?=.*[!@#$%^&*-])[A-Za-z\\d!@#$%^&*-]{8,12}$"
            title="8~12글자의 숫자,영문,특수문자"
            required
            autoComplete="on"
          />
        </div>
        <button className="sign-button">로그인</button>
      </form>
      <Link to="/join">처음이신가요? 새 계정 만들러 가기</Link>
    </motion.div>
  );
};

export default React.memo(SignInPage);

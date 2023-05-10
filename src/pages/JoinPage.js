import React, { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeInput, register, reset } from "../modules/account";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/SignPage.scss";

const JoinPage = () => {
  const input = useSelector((state) => state.accountReducer.input);
  const { email, nickname, password } = input;
  const dispatch = useDispatch();
  const [pwConfirm, setPwConfirm] = useState("");
  const navigate = useNavigate();

  const onChange = useCallback(
    (e) => {
      dispatch(changeInput(e.target));
    },
    [dispatch]
  );

  const onPassword = useCallback((e) => {
    setPwConfirm(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (password === pwConfirm) {
        dispatch(register(input));
        alert("회원가입이 완료되었습니다. 환영합니다!");
        dispatch(reset());
        return navigate("/login");
      } else {
        alert("비밀번호가 서로 일치하지 않습니다.");
        return;
      }
    },
    [dispatch, navigate, input, password, pwConfirm]
  );

  return (
    <motion.div
      className="body-flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="sign-title">회원 가입</h1>
      <form onSubmit={onSubmit}>
        <div className="form-item">
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            placeholder="sample@gmail.com"
            id="email"
            value={email}
            onChange={onChange}
            pattern="^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}$"
            title="sample12@gmail.com"
            required
          />
        </div>
        <div className="form-item">
          <label htmlFor="nickname">사용할 이름 :</label>
          <input
            type="text"
            placeholder="8글자 이내로 작성해주세요"
            id="nickname"
            value={nickname}
            onChange={onChange}
            pattern="^.{2,8}$"
            required
          />
        </div>
        <div className="form-item">
          <label htmlFor="password">비밀번호 :</label>
          <input
            type="password"
            id="password"
            placeholder="8~12글자의 숫자,영문,특수문자"
            value={password}
            onChange={onChange}
            pattern="^(?=.*[A-Za-z])(?=.*\\d)(?=.*[!@#$%^&*-])[A-Za-z\\d!@#$%^&*-]{8,12}$"
            title="8~12글자의 숫자,영문,특수문자"
            required
            autoComplete="on"
          />
        </div>
        <div className="form-item">
          <label htmlFor="check">비밀번호 확인 :</label>
          <input
            type="password"
            id="check"
            placeholder="8~12글자의 숫자,영문,특수문자"
            value={pwConfirm}
            onChange={onPassword}
            pattern="^(?=.*[A-Za-z])(?=.*\\d)(?=.*[!@#$%^&*-])[A-Za-z\\d!@#$%^&*-]{8,12}$"
            title="8~12글자의 숫자,영문,특수문자"
            required
            autoComplete="on"
          />
        </div>
        <button className="join-button">등록</button>
      </form>
    </motion.div>
  );
};

export default React.memo(JoinPage);

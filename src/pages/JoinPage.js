import React, { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeInput, register, reset } from "../modules/account";
import { useNavigate } from "react-router-dom";

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
        return navigate("/"); //나중에 sign in 페이지로 수정
      } else {
        alert("비밀번호가 서로 일치하지 않습니다.");
        return;
      }
    },
    [dispatch, navigate, input, password, pwConfirm]
  );

  return (
    <>
      <main>
        <h1>회원 가입</h1>
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              placeholder="sample@gmail.com"
              id="email"
              value={email}
              required
              onChange={onChange}
            />
          </div>
          <div>
            <label htmlFor="nickname">사용할 이름 :</label>
            <input
              type="text"
              id="nickname"
              value={nickname}
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
              value={password}
              onChange={onChange}
            />
          </div>
          <div>
            <label htmlFor="check">비밀번호 확인 :</label>
            <input
              type="password"
              id="check"
              required
              placeholder="숫자와 영문 포함 8글자"
              value={pwConfirm}
              onChange={onPassword}
            />
          </div>
          <button>등록</button>
        </form>
      </main>
      <footer>푸터</footer>
    </>
  );
};

export default React.memo(JoinPage);

import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../modules/account";
import { Link } from "react-router-dom";
import "../styles/Account.scss";

const Account = () => {
  const { isSignIn, user } = useSelector(({ accountReducer }) => ({
    isSignIn: accountReducer.isSignIn,
    user: accountReducer.user,
  }));
  const dispatch = useDispatch();

  const onSignOut = useCallback(() => {
    dispatch(signOut());
    window.location.reload();
  }, [dispatch]);

  return (
    <>
      {isSignIn ? (
        <div className="sign-in">
          <p>{user.nickname}님</p>
          <div className="dropdown">
            <div className="account-icon">아이콘</div>
            <ul className="hide-menu">
              <li>
                <Link to="/my">
                  <span>마이페이지</span>
                </Link>
              </li>
              <li>
                <span onClick={onSignOut}>로그아웃</span>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="dropdown">
          <div className="account-icon">아이콘</div>
          <ul className="hide-menu">
            <li>
              <Link to="/login">
                <span>로그인</span>
              </Link>
            </li>
            <li>
              <Link to="/my">
                <span>마이페이지</span>
              </Link>
            </li>
            <li>
              <Link to="/join">
                <span>회원가입</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default React.memo(Account);

import React, { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../modules/account";
import { Link } from "react-router-dom";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import "../styles/Account.scss";

const Account = () => {
  const { isSignIn, user } = useSelector(({ accountReducer }) => ({
    isSignIn: accountReducer.isSignIn,
    user: accountReducer.user,
  }));
  const dispatch = useDispatch();
  const [dropdown, setDropdown] = useState(false);

  const onSignOut = useCallback(() => {
    dispatch(signOut());
    window.location.reload();
  }, [dispatch]);

  return (
    <>
      {isSignIn ? (
        <div className="sign-in">
          <p className="user-name">{`반갑습니다, ${user.nickname} 님`}</p>
          <div className="dropdown">
            <div
              className="account-icon"
              onClick={() => setDropdown(!dropdown)}
            >
              <VscAccount /> {dropdown ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {dropdown && (
              <div className="overflow">
                <ul className="hide-menu member">
                  <li>
                    <Link to="/my">
                      <span className="dropdown-text">마이페이지</span>
                    </Link>
                  </li>
                  <li>
                    <span className="sign-out" onClick={onSignOut}>
                      로그아웃
                    </span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="dropdown">
          <div className="account-icon" onClick={() => setDropdown(!dropdown)}>
            <VscAccount /> {dropdown ? <FaAngleUp /> : <FaAngleDown />}
          </div>
          {dropdown && (
            <div className="overflow">
              <ul className="hide-menu not-member">
                <li>
                  <Link to="/login">
                    <span className="dropdown-text">로그인</span>
                  </Link>
                </li>
                <li>
                  <Link to="/my">
                    <span className="dropdown-text">마이페이지</span>
                  </Link>
                </li>
                <li>
                  <Link to="/join">
                    <span className="dropdown-text">회원가입</span>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default React.memo(Account);

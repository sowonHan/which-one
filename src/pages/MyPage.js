import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import "../styles/MyPage.scss";

const MyPage = () => {
  const { isSignIn, user } = useSelector(({ accountReducer }) => ({
    isSignIn: accountReducer.isSignIn,
    user: accountReducer.user,
  }));

  return (
    <div className="body-flex">
      {isSignIn ? (
        <div className="mypage-con">
          <h3>나의 정보</h3>
          <div>
            <p>Email : {user.email}</p>
            <p>닉네임 : {user.nickname}</p>
            <p>비밀번호 : {user.password}</p>
          </div>
        </div>
      ) : (
        <Navigate to="/login" replace={true} />
      )}
    </div>
  );
};

export default React.memo(MyPage);

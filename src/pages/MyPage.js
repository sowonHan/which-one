import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const MyPage = () => {
  const { isSignIn, user } = useSelector(({ accountReducer }) => ({
    isSignIn: accountReducer.isSignIn,
    user: accountReducer.user,
  }));

  return (
    <>
      {isSignIn ? (
        <div>
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
      <footer>푸터</footer>
    </>
  );
};

export default React.memo(MyPage);

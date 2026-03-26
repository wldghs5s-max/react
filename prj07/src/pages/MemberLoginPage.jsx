import React, { useState } from 'react';

function MemberLoginPage() {
  const [userVo, setUserVo] = useState({
    id: 'GUEST',
    pw: '0000',
  });

  let [x, setX] = useState('');
  let [y, setY] = useState('');

  function handleLogin() {
    setUserVo((prev) => ({ ...prev, id: x, pw: y }));
  }
  function handleChangeId(evt) {
    setX(evt.target.value);
    handleLogin();
  }
  function handleChangePw(evt) {
    setY(evt.target.value);
    handleLogin();
  }

  return (
    <>
      <h1>로그인</h1>
      <span>로그인한 유저 아이디 : {userVo.id}</span>
      <br />
      <span>로그인한 유저 비밀번호 : {userVo.pw}</span>
      <hr />
      <input
        type="text"
        name="userId"
        placeholder="아이디를 입력하세요."
        onChange={handleChangeId}
      />
      <br />
      <input
        type="password"
        name="userPw"
        placeholder="비밀번호를 입력하세요."
        onChange={handleChangePw}
      />
      <br />
      <button onClick={handleLogin}>로그인</button>
    </>
  );
}

export default MemberLoginPage;

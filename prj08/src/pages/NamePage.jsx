import React, { useState } from 'react';

function NamePage() {
  const [str, setStr] = useState('게스트');
  const [inputStr, setInputStr] = useState('');
  function handleClick() {
    setStr(inputStr);
  }
  function handleChange(evt) {
    console.log('handleChange called~~', inputStr);
    setInputStr(evt.target.value);
  }
  return (
    <>
      <h1>{str}</h1>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>등록</button>
    </>
  );
}

export default NamePage;

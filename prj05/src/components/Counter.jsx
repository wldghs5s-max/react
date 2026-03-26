import React from 'react';
import { useState } from 'react';
import DisplayNum from './DisplayNum';
import KhBtn from './KhBtn';

const Counter = () => {
  const [num, setNum] = useState(0);
  function plusOne() {
    setNum(num + 1);
  }
  function minusOne() {
    setNum(num - 1);
  }
  return (
    <div>
      <h1>카운터</h1>
      <DisplayNum num={num} />
      <KhBtn str="PLUS" f={plusOne} />
      <KhBtn str="MINUS" f={minusOne} />
    </div>
  );
};

export default Counter;

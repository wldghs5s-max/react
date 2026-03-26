import React from 'react';
import { useState } from 'react';
import KhBtn from '../components/KhBtn';
import DisplayData from '../components/DisplayData';

function CounterPage() {
  const [num, setNum] = useState(0);
  function plusOne() {
    setNum(num + 1);
  }
  function misusOne() {
    setNum(num - 1);
  }
  return (
    <>
      <DisplayData str={'바뀌는숫자'} data={num} />

      <KhBtn f={plusOne} str={'1올리기'} />
      <KhBtn str="MINUS" f={misusOne} />
    </>
  );
}

export default CounterPage;

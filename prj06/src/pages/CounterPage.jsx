import React from 'react';
import DisplayNum from '../components/DisplayNum';
import KhBtn from '../components/KhBtn';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

function CounterPage() {
  const { x } = useParams();
  const [num, setNum] = useState(Number(x));
  function plusOne() {
    setNum(num + 1);
  }
  function minusOne() {
    setNum(num - 1);
  }
  return (
    <>
      <h1>카운터</h1>
      <DisplayNum num={num} />
      <KhBtn str={'PLUS'} f={plusOne} />
      <KhBtn str={'MINUS'} f={minusOne} />
    </>
  );
}

export default CounterPage;

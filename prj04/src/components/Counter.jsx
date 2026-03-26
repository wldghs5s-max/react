import { useState } from 'react';
import DisplayNum from './DisplayNum';
import KhBtn from './KhBtn';

const Counter = () => {
  let [num, setNum] = useState(0);
  function plusOne() {
    setNum((prev) => {
      return prev + 1;
    });
  }
  function minusOne() {
    setNum((prev) => {
      return prev - 1;
    });
  }
  return (
    <>
      <h1>카운터</h1>
      <DisplayNum str={num} x="10" y={20} />
      <KhBtn str={'PLUS'} f={plusOne} />
      <KhBtn str={'MINUS'} f={minusOne} />
    </>
  );
};

export default Counter;

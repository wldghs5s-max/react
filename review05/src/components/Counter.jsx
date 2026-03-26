import React, { useState } from 'react';
import DisplayNum from './DisplayNum';
import ShBtn from './ShBtn';

const Counter = () => {
  const [num, setNum] = useState(1);
  function multiply(n) {
    setNum(num * n);
  }
  function square() {
    setNum(num * num);
  }
  function reload() {
    setNum(1);
  }
  return (
    <div className="container">
      <DisplayNum num={num} />

      <div className="btn-group">
        <ShBtn str="2곱하기" f={() => multiply(2)} />
        <ShBtn str="3곱하기" f={() => multiply(3)} />
        <ShBtn str="4곱하기" f={() => multiply(4)} />
        <ShBtn str="5곱하기" f={() => multiply(5)} />
        <ShBtn str="6곱하기" f={() => multiply(6)} />
        <ShBtn str="7곱하기" f={() => multiply(7)} />
        <ShBtn str="8곱하기" f={() => multiply(8)} />
        <ShBtn str="9곱하기" f={() => multiply(9)} />
        <ShBtn str="제곱" f={square} type="square" />
        <ShBtn str="초기화" f={reload} type="reset" />
      </div>
    </div>
  );
};

export default Counter;

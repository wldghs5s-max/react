import { useState } from 'react';

function Counter() {
  const [personVo, setPersonVo] = useState({
    name: '홍길동',
    age: 20,
  });
  function increaseAge() {
    // setPersonVo({ name: '홍길동', age: personVo.age + 1 });
    setPersonVo({ ...personVo, age: personVo.age + 1 });
  }
  return (
    <>
      <hr />
      <h1>카운터</h1>
      <h3>{personVo.name}</h3>
      <h3>{personVo.age}</h3>
      <button onClick={increaseAge}>나이증가</button>
      <hr />
    </>
  );
}

export default Counter;

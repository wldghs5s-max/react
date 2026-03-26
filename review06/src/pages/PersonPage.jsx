import React from 'react';
import DisplayData from '../components/DisplayData';
import { useState } from 'react';
import KhBtn from './../components/KhBtn';

function PersonPage() {
  const [personVo, setPersonVo] = useState({
    name: '고길동',
    age: 20,
    height: 200,
    weight: 100,
  });

  function up(x) {
    setPersonVo((prev) => ({ ...prev, [x]: prev[x] + 1 }));
  }
  function down(x) {
    setPersonVo((prev) => ({ ...prev, [x]: prev[x] - 1 }));
  }
  return (
    <>
      <DisplayData str={'이름'} data={personVo.name} />
      <DisplayData str={'나이'} data={personVo.age} />
      <DisplayData str={'키'} data={personVo.height} />
      <DisplayData str={'몸무게'} data={personVo.weight} />
      <hr />
      <KhBtn
        str={'미래'}
        f={() => {
          up('age');
        }}
      />
      <KhBtn
        str={'과거'}
        f={() => {
          down('age');
        }}
      />
      <KhBtn
        str={'성장'}
        f={() => {
          up('height');
        }}
      />
      <KhBtn
        str={'역성장'}
        f={() => {
          down('height');
        }}
      />
      <KhBtn
        str={'벌크업'}
        f={() => {
          up('weight');
        }}
      />
      <KhBtn
        str={'다이어트'}
        f={() => {
          down('weight');
        }}
      />
    </>
  );
}

export default PersonPage;

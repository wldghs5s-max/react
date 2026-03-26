import React from 'react';
import { useState } from 'react';
import KhBtn from '../components/KhBtn';
import DisplayData from '../components/DisplayData';
import { useParams } from 'react-router-dom';

function PersonPage() {
  let { n, a } = useParams();
  if (!n) {
    n = '홍길동';
  }
  if (!a) {
    a = 20;
  }
  const [personVo, setPersonVo] = useState({
    name: n,
    age: a,
    height: 180,
    weight: 90,
  });

  function plusAge() {
    console.log(personVo.age);
    setPersonVo({ ...personVo, age: personVo.age + 1 });
    console.log(personVo.age);
  }
  function plusHeight() {
    setPersonVo({ ...personVo, height: personVo.height + 1 });
  }
  function plusWeight() {
    setPersonVo({ ...personVo, weight: personVo.weight + 1 });
  }
  function minusAge() {
    setPersonVo({ ...personVo, age: personVo.age - 1 });
  }
  function minusHeight() {
    setPersonVo({ ...personVo, height: personVo.height - 1 });
  }
  function minusWeight() {
    setPersonVo({ ...personVo, weight: personVo.weight - 1 });
  }

  return (
    <>
      <h1>PERSON</h1>
      <hr />
      <DisplayData s="이름" v={personVo.name} />
      <DisplayData s="나이" v={personVo.age} />
      <DisplayData s="키" v={personVo.height} />
      <DisplayData s="몸무게" v={personVo.weight} />
      <hr />
      <KhBtn f={plusAge} str={'미래'} />
      <KhBtn f={minusAge} str={'과거'} />
      <br />
      <KhBtn f={plusHeight} str={'성장'} />
      <KhBtn f={minusHeight} str={'퇴화'} />
      <br />
      <KhBtn f={plusWeight} str={'벌크업'} />
      <KhBtn f={minusWeight} str={'데피니션'} />
    </>
  );
}

export default PersonPage;

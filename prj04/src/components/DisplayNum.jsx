import React from 'react';

const DisplayNum = ({ str, x, y }) => {
  return (
    <div>
      <h2>{str}</h2>
      <h2>{x}</h2>
      <h2>{y}</h2>
    </div>
  );
};

export default DisplayNum;

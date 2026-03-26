import React from 'react';

const KhBtn = ({ str, f }) => {
  return (
    <>
      <button onClick={f}>{str}</button>
    </>
  );
};

export default KhBtn;

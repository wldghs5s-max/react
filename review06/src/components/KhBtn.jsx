import React from 'react';

function KhBtn({ f, str }) {
  return (
    <>
      <button onClick={f}>{str}</button>
    </>
  );
}

export default KhBtn;

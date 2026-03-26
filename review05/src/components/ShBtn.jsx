import React from 'react';

const ShBtn = ({ str, f, type }) => {
  return (
    <div>
      <button className={`btn ${type}`} onClick={f}>
        {str}
      </button>
    </div>
  );
};

export default ShBtn;

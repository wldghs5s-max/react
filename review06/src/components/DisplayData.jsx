import React from 'react';
import { data } from 'react-router-dom';

function DisplayData({ str, data }) {
  return (
    <>
      <h3>
        {str} : {data}
      </h3>
    </>
  );
}

export default DisplayData;

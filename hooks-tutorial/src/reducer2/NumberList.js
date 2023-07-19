import React from 'react';
import useModel from './useModel';

const NumberList = ({ avg, list }) => {
  return (
    <div>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b>
        {avg}
      </div>
    </div>
  );
};

export default NumberList;

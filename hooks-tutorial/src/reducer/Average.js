import React from 'react';
import useModel from './useModel';

const Average = () => {
  const model = useModel({ number: 0, avg: 0, list: [10, 20, 30, 40, 50] });
  const { number, avg, list } = model.state;

  console.log('화면 재 구성함');
  return (
    <div>
      <input
        name="number"
        value={number}
        onChange={(e) => model.changeNumber(e.target.value)}
      />
      <button onClick={model.addNumber}>등록</button>
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

export default Average;

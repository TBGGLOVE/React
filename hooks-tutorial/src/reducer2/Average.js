import React from 'react';
import useModel from './useModel';
import InputForm from './InputForm';
import NumberList from './NumberList';

const Average = () => {
  const model = useModel({ avg: 0, list: [10, 20, 30, 40, 50] });

  console.log('화면 재 구성함');
  return (
    <div>
      <InputForm model={model} />
      <NumberList avg={model.state.avg} list={model.state.list} />
    </div>
  );
};

export default Average;

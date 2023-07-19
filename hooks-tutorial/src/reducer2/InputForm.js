import React, { useState } from 'react';

const InputForm = ({ model }) => {
  const [number, setNumber] = useState('');

  const onChange = (e) => {
    setNumber(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    model.addNumber(number);
    setNumber('');
    return false;
  };

  return (
    <form onSubmit={onSubmit}>
      <input name="number" value={number} onChange={onChange} />
      <button type="submit">등록</button>
    </form>
  );
};

export default InputForm;

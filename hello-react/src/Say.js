import React, { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('안녕하세요');
  const onClickLeave = () => {
    setMessage('안녕히 가세요');
  };

  const [color, setColor] = useState('black');

  const onClickColorRed = () => {
    //    color = 'red';
    setColor('red');
  };
  const onClickColorGreen = () => {
    setColor('green');
  };
  const onClickColorBlue = () => {
    setColor('blue');
  };

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color: color }}>{message}</h1>

      <button style={{ color: 'red' }} onClick={() => setColor('red')}>
        빨간색
      </button>
      <button style={{ color: 'green' }} onClick={onClickColorGreen}>
        초록색
      </button>
      <button style={{ color: 'blue' }} onClick={onClickColorBlue}>
        파란색
      </button>
    </div>
  );
};

export default Say;

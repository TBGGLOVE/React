import React, { Component, useState } from 'react';
import { MyComponent } from './comp/MyComponent';

const Counter2 = () => {
  const [number, setNumber] = useState(0);
  const [fixedNumber, setFixedNumber] = useState(0);
  const [title, setTitle] = useState('안녕');

  console.log('Counter2 랜더링');
  return (
    <div>
      <h1>{number}</h1>
      <h2>변경되지 않는 값 : {fixedNumber}</h2>
      <h2>제목 : {title}</h2>
      <button
        onClick={() => {
          console.log('버튼 클릭 값증가 전 ...', number);
          setNumber(number + 1);
          if (title === '안녕') {
            setTitle('잘가~~~');
          } else {
            setTitle('안녕');
          }
        }}
      >
        1증가
      </button>
      <MyComponent name="홍길동" age={number} />
    </div>
  );
};

export default Counter2;

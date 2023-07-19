import React, { useState } from 'react';

const Number3 = (props) => {
  //   const [a, setA] = useState(1);
  //   const [b, setB] = useState(2);
  //   const [c, setC] = useState(3);
  const [map, setMap] = useState({ a: 1, b: 2, c: 3 });
  return (
    <div>
      <h1>{map.a}</h1>
      <h1>{map.b}</h1>
      <h1>{map.c}</h1>
      <button
        onClick={() => {
          //let newMap = { ...map, a: map.a + 1 };
          //let newMap = { a: 1, b: 2, c: 3 };
          //let newMap = {...map, a : map.a + 1};
          //let newMap = { b: 2, c: 3, a : 1 + 1 };
          //setMap(newMap);
          setMap({ ...map, a: map.a + 1 });
        }}
      >
        증가1
      </button>
      <button
        onClick={() => {
          //          setB(b + 1);
          setMap({ ...map, b: map.b + 1 });
        }}
      >
        증가2
      </button>
      <button
        onClick={() => {
          setMap({ ...map, c: map.c + 1 });
          //            setC(c + 1);
        }}
      >
        증가3
      </button>
      <button onClick={props.onClick}>부모함수 호출</button>
    </div>
  );
};

export default Number3;

import React, { useState } from 'react';

const IterationSample = () => {
  //   const obj = JSON.parse('[{id:1, text:"asasa"}]');
  //   const str = JSON.stringify(obj);

  const [inputText, setInputText] = useState('');

  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
  ]);

  /*  function handlerRemove(id) {
    setNames(names.filter((item) => item.id !== id));
  }
*/
  const handlerRemove = (id) => {
    setNames(names.filter((item) => item.id !== id));
  };

  const nameList = names.map((item) => (
    <li key={item.id} onDoubleClick={() => handlerRemove(item.id)}>
      {item.id}:{item.text}
      <button onClick={() => handlerRemove(item.id)}>삭제(x)</button>
    </li>
  ));

  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log('입력된 값 = ' + inputText);
    setNames(names.concat({ id: names.length + 1, text: inputText }));
    setInputText('');
    return false;
  };

  const handlerChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <div>
        <form name="myForm" onSubmit={handlerSubmit}>
          <input type="text" value={inputText} onChange={handlerChange}></input>
          <button type="submit">추가</button>
        </form>
      </div>
      <ul>{nameList}</ul>
    </div>
  );
};

export default IterationSample;

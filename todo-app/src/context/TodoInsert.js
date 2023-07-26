import React, { useCallback, useContext, useRef, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';
import TodoContext from './TodoContext';

const TodoInsert = () => {
  const { actions } = useContext(TodoContext);

  const [value, setValue] = useState('');
  const inputBox = useRef();

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  });

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    console.log('안녕');
    inputBox.current.focus();

    if (value === '' && value.length === 0) {
      alert('할일을 입력해 주세요');
      return false;
    }
    actions.insertTodo(value);
    setValue('');
    return false;
  });

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        ref={inputBox}
        value={value}
        onChange={onChange}
        placeholder="할일을 입력하세요"
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};
export default TodoInsert;

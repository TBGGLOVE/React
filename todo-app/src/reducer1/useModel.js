import React, { useCallback, useReducer, useRef } from 'react';

const createBulkTodos = () => {
  const array = [];
  for (let i = 1; i < 2500; i++) {
    array.push({
      id: i,
      checked: i % 3 === 0,
      title: '리엑트의 기초 알아보기 할일 ' + i,
    });
  }
  return array;
};

const reducerTodo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat(action.todo);
    case 'REMOVE_TODO':
      return state.filter((todo) => todo.id !== action.id);
    case 'TOGGLE_CHECKED':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    default:
      return state;
  }
};

function useModel() {
  const [todos, dispatch] = useReducer(reducerTodo, createBulkTodos());
  const nextId = useRef(todos.length + 1);

  const insertTodo = useCallback((value) => {
    dispatch({
      type: 'ADD_TODO',
      todo: {
        id: nextId.current++,
        checked: false,
        title: value,
      },
    });
  }, []);

  const removeTodo = useCallback((id) => {
    dispatch({
      type: 'REMOVE_TODO',
      id: id,
    });
  }, []);

  const changeChecked = useCallback((id) => {
    dispatch({
      type: 'TOGGLE_CHECKED',
      id: id,
    });
  }, []);

  return { todos, removeTodo, insertTodo, changeChecked };
}

export default useModel;

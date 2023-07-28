import React, { useCallback, useEffect, useReducer, useRef } from 'react';
import axios from 'axios';

const reducerTodo = (todos, action) => {
  switch (action.type) {
    case 'ALL_LIST_TODO':
      return action.todos;
    case 'ADD_TODO':
      return todos.concat(action.todo);
    case 'REMOVE_TODO':
      return todos.filter((todo) => todo.id !== action.id);
    case 'TOGGLE_CHECKED':
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    default:
      return todos;
  }
};

function useModel() {
  const [todos, dispatch] = useReducer(reducerTodo, []);
  const nextId = useRef(todos.length + 1);

  console.log('todos.length->' + todos.length);
  useEffect(() => {
    todoList();
  }, []);

  const todoList = () => {
    axios.get('/api2/v1/todoList').then((response) => {
      dispatch({
        type: 'ALL_LIST_TODO',
        todos: response.data,
      });
    });
  };

  const insertTodo = useCallback((value) => {
    axios
      .post(
        '/api2/v1/insert',
        {
          checked: false,
          title: value,
        },
        {
          headers: { 'Content-type': 'application/json' },
        },
      )
      .then((response) => {
        dispatch({
          type: 'ADD_TODO',
          todo: {
            id: response.data,
            checked: false,
            title: value,
          },
        });
      });
  }, []);

  const removeTodo = useCallback((id) => {
    axios
      .post(
        '/api2/v1/delete',
        {
          id: id,
        },
        {
          headers: { 'Content-type': 'application/json' },
        },
      )
      .then((response) => {
        if (parseInt(response.data) === 1) {
          dispatch({
            type: 'REMOVE_TODO',
            id: id,
          });
        }
      });
  }, []);

  const changeChecked = useCallback((id, checked) => {
    axios
      .post(
        '/api2/v1/update',
        {
          id: id,
          checked_yn: checked ? 'N' : 'Y',
        },
        {
          headers: { 'Content-type': 'application/json' },
        },
      )
      .then((response) => {
        if (parseInt(response.data) === 1) {
          dispatch({
            type: 'TOGGLE_CHECKED',
            id: id,
          });
        }
      });
  }, []);

  return { todos, removeTodo, insertTodo, changeChecked };
}

export default useModel;

/*
import { useCallback, useReducer, useRef } from 'react';

const createBulkTodos = () => {
  const array = [];
  for (let i = 1; i <= 30000; i++) {
    array.push({
      id: i,
      checked: i % 3 === 0,
      title: `리액트의 기초 알아보기 할일 ${i}`,
    });
  }
  return array;
};

const reducer = (todos, action) => {
  switch (action.type) {
    case 'insert':
      return todos.concat(action.todo);
    case 'remove':
      return todos.filter((item) => item.id !== action.id);
    case 'check':
      console.time('check');
      const newTodos = todos.map((item) =>
        item.id === action.id ? { ...item, checked: !item.checked } : item,
      );
      console.timeLog('check');
      return newTodos;

    //   return todos.map((item) =>
    //     item.id === action.id ? { ...item, checked: !item.checked } : item,
    //   );
    //      이진탐색
    //   let left = 0;
    //   let right = todos.length - 1;
    //   let targetIndex = -1;
    //   while (left <= right) {
    //     let index = Math.floor((left + right) / 2);
    //     if (todos[index].id === action.id) {
    //       targetIndex = index;
    //       break;
    //     } else if (todos[index].id > action.id) {
    //       right = index - 1;
    //     } else left = index + 1;
    //   }
    //   todos[targetIndex].checked = !todos[targetIndex].checked;
    //   return [...todos];
    default:
      return todos;
  }
};

const useModel = () => {
  const [todos, dispatch] = useReducer(reducer, createBulkTodos());
  const nextId = useRef(todos.length + 1);

  const onInsert = useCallback((value) => {
    dispatch({
      type: 'insert',
      todo: {
        id: nextId.current++,
        title: value,
        checked: false,
      },
    });
  }, []);

  const onRemove = useCallback((id) => {
    dispatch({ type: 'remove', id: id });
  }, []);

  const checkToggle = useCallback(
    (id) => dispatch({ type: 'check', id: id }),
    [],
  );

  return [todos, onInsert, onRemove, checkToggle];
};

export default useModel;
*/

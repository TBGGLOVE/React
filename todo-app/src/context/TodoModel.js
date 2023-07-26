import { useReducer, useRef } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'updateTodo':
      return { ...state, list: action.list };
    default:
      return state;
  }
};

const TodoModel = (initState) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const nextId = useRef(state.list.length + 1);

  const insertTodo = (value) => {
    const insertTodo = state.list.concat({
      id: nextId.current++,
      checked: false,
      title: value,
    });
    dispatch({ type: 'updateTodo', list: insertTodo });
  };

  const removeTodo = (id) => {
    const removeList = state.list.filter((todo) => todo.id !== id);
    dispatch({ type: 'updateTodo', list: removeList });
  };

  const checkTodo = (id) => {
    const changeCheckList = state.list.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo,
    );
    dispatch({ type: 'updateTodo', list: changeCheckList });
  };

  const actions = { insertTodo, removeTodo, checkTodo };

  return { state, actions };
};

export default TodoModel;

import { useCallback, useRef, useState } from 'react';
import './App.css';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import TodoTemplate from './TodoTemplate';

/*
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

function App() {
  const [todos, setTodos] = useState(createBulkTodos);
  const nextId = useRef(todos.length + 1);

  const insertTodo = useCallback((value) => {
    setTodos((todos) =>
      todos.concat({
        id: nextId.current++,
        checked: false,
        title: value,
      }),
    );
  }, []);

  const removeTodo = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  const changeChecked = useCallback((id) => {
    console.log('id=>', id);
    // for (let i = 0; i < todos.length; i++) {
    //   if (todos[i].id === id) {
    //     todos[i].checked = !todos[i].checked;
    //     setTodos([...todos]);
    //     break;
    //   }
    // }
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert insertTodo={insertTodo} />
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        changeChecked={changeChecked}
      />
    </TodoTemplate>
  );
}
*/
import useModel from './reducer1/useModel';
import Signup from './Signup';
//import ContextApp from './context/ContextApp';

/*
ModelContext

*/

function App() {
  const model = useModel();
  const { removeTodo, insertTodo, changeChecked } = model;

  return (
    <TodoTemplate>
      <Signup />
      <TodoInsert insertTodo={insertTodo} />
      <TodoList model={model} />
    </TodoTemplate>
  );
}

export default App;

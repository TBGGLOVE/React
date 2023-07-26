import TodoModel from './TodoModel';
import { createContext } from 'react';

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

const TodoContext = createContext({ state: { list: [] } });

const TodoProvider = ({ children }) => {
  const model = TodoModel({
    list: createBulkTodos(),
  });

  const value = {
    state: model.state,
    actions: model.actions,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

const { Consumer: TodoConsumer } = TodoContext;

export { TodoProvider, TodoConsumer };

export default TodoContext;
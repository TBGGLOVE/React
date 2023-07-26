import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';
import { List } from 'react-virtualized';

const TodoList = ({ model }) => {
  const rowRenderer = ({ index, key, style }) => {
    console.log('index->', index);
    const todo = model.todos[index];
    return (
      <TodoListItem
        todo={todo}
        key={key}
        removeTodo={model.removeTodo}
        changeChecked={model.changeChecked}
        style={style}
      />
    );
  };
  return (
    // <div className="TodoList">
    //   {model.todos.map((todo) => (
    //     <TodoListItem
    //       todo={todo}
    //       key={todo.id}
    //       removeTodo={model.removeTodo}
    //       changeChecked={model.changeChecked}
    //     />
    //   ))}
    // </div>
    <List
      className="TodoList"
      width={512}
      height={513}
      rowCount={model.todos.length}
      rowHeight={57}
      rowRenderer={rowRenderer}
      style={{ outline: 'none' }}
    />
  );
};

export default React.memo(TodoList);

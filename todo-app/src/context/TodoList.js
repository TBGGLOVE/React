import React, { useContext } from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';
import { List } from 'react-virtualized';
import TodoContext from './TodoContext';

const TodoList = () => {
  const { state, actions } = useContext(TodoContext);
  const rowRenderer = ({ index, key, style }) => {
    const todo = state.list[index];
    return <TodoListItem todo={todo} key={key} style={style} />;
  };
  return (
    // <div className="TodoList">
    //   {todos.map((todo) => (
    //     <TodoListItem
    //       todo={todo}
    //       key={todo.id}
    //       removeTodo={removeTodo}
    //       checkedTodo={checkedTodo}
    //     />
    //   ))}
    // </div>
    <List
      className="TodoList"
      width={512}
      height={513}
      rowCount={state.list.length}
      rowHeight={57} // 하나의 크기, border 포함
      rowRenderer={rowRenderer}
      //list={model.state.list} 이게 중요한 게 아니었당
      style={{ outline: 'none' }}
    />
  );
};

export default React.memo(TodoList);

import '../App.css';
import { TodoProvider } from './TodoContext';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import TodoTemplate from './TodoTemplate';

function ContextApp() {
  return (
    <TodoProvider>
      <TodoTemplate>
        <TodoInsert />
        <TodoList />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default ContextApp;

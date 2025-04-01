import { useState } from 'react';
import s from './TodoList.module.css';
import todo from '../../assets/todo.json';
import TodoItem from '../TodoItem/TodoItem';
import { HiOutlinePlusCircle } from 'react-icons/hi';

const TodoList = () => {
  const [todos, setTodos] = useState(todo);
  const [todoValue, setTodoValue] = useState('');

  console.log(todos);

  const handleDelete = id => {
    const newData = todos.filter(item => item.id !== id);
    setTodos(newData);
  };

  const handleAdd = () => {
    const newText = {
      id: crypto.randomUUID(),
      text: todoValue,
    };
    setTodos([...todos, newText]);
    setTodoValue('');
  };

  return (
    <div>
      <div className={s.todo}>
        <input
          value={todoValue}
          onChange={e => setTodoValue(e.target.value)}
          className={s.input}
        />
        <button onClick={handleAdd} className={s.button}>
          add Task <HiOutlinePlusCircle className={s.todo_icon} />
        </button>
      </div>
      <ul className={s.list}>
        {todos.map(
          item =>
            item.text.length > 0 && (
              <TodoItem onDelete={handleDelete} key={item.id} {...item} />
            )
        )}
      </ul>
    </div>
  );
};

export default TodoList;

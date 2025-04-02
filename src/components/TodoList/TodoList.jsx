import { useEffect, useState } from 'react';
import s from './TodoList.module.css';
import TodoItem from '../TodoItem/TodoItem';
import { HiOutlinePlusCircle } from 'react-icons/hi';

const TodoList = () => {
  const todo = [
    {
      id: 1,
      text: '',
    },
  ];
  const [todos, setTodos] = useState(() => {
    const saveText = JSON.parse(localStorage.getItem('save-text'));
    if (saveText?.length) {
      return saveText;
    }
    return todo;
  });
  const [todoValue, setTodoValue] = useState('');

  // const [todos, setTodos] = useState(()=>JSON.parse(localStorage.getItem('save-text') ?? todo))

  useEffect(() => {
    localStorage.setItem('save-text', JSON.stringify(todos));
  }, [todos]);

  const handleDelete = id => {
    const newData = todos.filter(item => item.id !== id);
    setTodos(newData);
  };

  const handleAdd = () => {
    const newText = {
      id: crypto.randomUUID(),
      text: todoValue,
    };
    if (todoValue.trim() === '') {
      console.log('fill in the field!');
      return;
    }

    setTodos([...todos, newText]);
    setTodoValue('');
  };

  const totalTask = String(todos.length - 1).padStart(2, '0');

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
      {todos.length > 1 && (
        <div className={s.total}>
          <p>total task: {totalTask}</p>
        </div>
      )}
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

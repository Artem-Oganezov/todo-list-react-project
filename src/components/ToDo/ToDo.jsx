import TodoList from '../TodoList/TodoList';
import s from './ToDo.module.css';

const ToDo = () => {
  return (
    <div className={s.container}>
      <TodoList />
    </div>
  );
};

export default ToDo;

import { FcTodoList } from 'react-icons/fc';
import s from './Header.module.css';
const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <FcTodoList className={s.icon} />
        <h1 className={s.todo}>todo</h1>
      </div>
    </header>
  );
};

export default Header;

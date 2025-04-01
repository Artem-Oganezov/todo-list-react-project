import clsx from 'clsx';
import { useState } from 'react';
import { BsFillTrash3Fill } from 'react-icons/bs';
import { LuCheckCheck } from 'react-icons/lu';
import s from './TodoItem.module.css';

const TodoItem = ({ id, text, onDelete }) => {
  const [isTrue, setIsTrue] = useState(false);
  const toggleValue = () => {
    setIsTrue(prevValue => !prevValue);
  };

  return (
    <li className={s.item}>
      <div className={s.item_box}>
        <button className={s.btn} onClick={toggleValue}>
          <LuCheckCheck className={clsx(s.check_true, isTrue && s.check)} />
        </button>
        <p className={clsx(s.todo_info, isTrue && s.text_end)}>{text}</p>
        <div className={s.icon_box}>
          <button onClick={() => onDelete(id)} className={s.btn}>
            <BsFillTrash3Fill className={s.icon} />
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;

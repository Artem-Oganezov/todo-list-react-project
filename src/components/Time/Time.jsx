import { useEffect, useState } from 'react';
import s from './Time.module.css';

const Time = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const year = time.getFullYear();
  const month = String(time.getMonth() + 1).padStart(2, '0');
  const day = String(time.getDate()).padStart(2, '0');
  const hours = String(time.getHours()).padStart(2, '0');
  const minutes = String(time.getMinutes()).padStart(2, '0');
  const seconds = String(time.getSeconds()).padStart(2, '0');

  return (
    <div className={s.container}>
      <ul className={s.list}>
        <li>
          <p>year</p>
          <p>{year}</p>
        </li>
        <li>
          <p>month</p>
          <p>{month}</p>
        </li>
        <li>
          <p>days</p>
          <p>{day}</p>
        </li>
        <li>
          <p>hours</p>
          <p>{hours}</p>
        </li>
        <li>
          <p>min.</p>
          <p>{minutes}</p>
        </li>
        <li>
          <p>sec.</p>
          <p>{seconds}</p>
        </li>
      </ul>
    </div>
  );
};

export default Time;

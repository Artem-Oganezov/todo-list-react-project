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
  const month = time.getMonth() + 1;
  const day = time.getDate();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return (
    <div className={s.container}>
      <div>
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
    </div>
  );
};

export default Time;

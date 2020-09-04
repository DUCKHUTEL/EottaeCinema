import React, { useCallback, useState } from 'react';
import AllTheaterPointContainer from '../../Containers/AllTheaterPointContainer';
import styles from './BookTheaterComponent.module.scss';
function BookTheaterComponent({ point }) {
  const [select, setSelect] = useState('all');

  const clickTheater = useCallback((e) => {
    if (!e.target.matches('button')) return;
    setSelect(e.target.id);
  }, []);

  return (
    <div className={styles.theater}>
      <h3>{point === '없음' ? '영화관' : point}</h3>
      <div className={styles.divide} onClick={clickTheater}>
        <div className={select === 'all' ? styles.clicked : styles.disable}>
          <button className={styles.all} id="all">
            전체
          </button>
          <AllTheaterPointContainer point={point} />
        </div>
        <div className={select === 'special' ? styles.clicked : styles.disable}>
          <button className={styles.special} id="special">
            스페셜관
          </button>
          <AllTheaterPointContainer point={point} />
        </div>
      </div>
    </div>
  );
}
export default React.memo(BookTheaterComponent);

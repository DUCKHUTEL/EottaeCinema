import React, { useCallback } from 'react';
import styles from './ScheduleComponent.module.scss';
import BookMoviesContainer from '../../Containers/BookMoviesContainer';
import BookTimeMoviesContainer from '../../Containers/BookTimeMoviesContainer';
import BookTheaterContainer from '../../Containers/BookTheaterContainer';
import { useState } from 'react';
import AllTheaterPointContainer from '../../Containers/AllTheaterPointContainer';
import { ScheduleTheaterContainer } from '../../Containers/ScheduleTheaterContainer';

function ScheduleComponent() {
  const [select, setSeclect] = useState('theater');
  const methodClick = useCallback((e) => {
    if (!e.target.matches('section > button')) return;
    setSeclect(e.target.id);
  }, []);
  console.log('1');

  return (
    <main className={styles.ScheduleMain}>
      <h2 className={styles.a11yHidden}>예매페이지</h2>
      <div className={styles.ScheduleContentsBox}>
        <div className={styles.ScheduleContents} onClick={methodClick}>
          <section>
            <button className={styles.scheduleTheater} id="theater">
              영화관별 상영시간표
            </button>
            <div className={select === 'theater' ? styles.active : ''}>
              <div className={styles.scheduleTheaterBox}>
                <ScheduleTheaterContainer />
              </div>
              <div className={styles.scheduleTimeBox}>
                <BookTimeMoviesContainer type="schedule" />
              </div>
            </div>
          </section>
          <section>
            <button className={styles.scheduleMovie} id="movie">
              영화별 상영시간표
            </button>
            <div className={select === 'movie' ? styles.active : ''}>
              <BookMoviesContainer />
              <div className={styles.scheduleTimeBox}>
                <BookTimeMoviesContainer type="schedule" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
export default React.memo(ScheduleComponent);

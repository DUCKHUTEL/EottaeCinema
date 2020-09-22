import React, { useCallback, useEffect } from 'react';
import styles from './ScheduleComponent.module.scss';
import { useState } from 'react';
import ScheduleTheaterTimeContainer from '../../Containers/ScheduleTheaterTimeContainer';
import { LoadingContainer } from '../../Containers/LoadingContainer';
import ScheduleMovieTimeContainer from '../../Containers/ScheduleMovieTimeContainer';

function ScheduleComponent({ selectTitle, selectPoint }) {
  const [select, setSeclect] = useState('theater');
  useEffect(() => {
    selectTitle('없음');
  }, [selectTitle]);
  const methodClick = useCallback((e) => {
    if (!e.target.matches('section > button')) return;
    setSeclect(e.target.id);
  }, []);

  const setTheaterAll = useCallback(() => {
    selectPoint('전체');
  }, [selectPoint]);

  const setTitleAll = useCallback(() => {
    selectTitle('없음');
    selectPoint('가양');
  }, [selectTitle, selectPoint]);

  return (
    <main className={styles.ScheduleMain}>
      <h2 className={styles.a11yHidden}>예매페이지</h2>
      <div className={styles.ScheduleContentsBox}>
        <div className={styles.ScheduleContents} onClick={methodClick}>
          <section>
            <button
              className={styles.scheduleTheater}
              id="theater"
              onClick={setTitleAll}
            >
              영화관별 상영시간표
            </button>
            <div className={select === 'theater' ? styles.active : ''}>
              <ScheduleTheaterTimeContainer />
            </div>
          </section>
          <section>
            <button
              className={styles.scheduleMovie}
              id="movie"
              onClick={setTheaterAll}
            >
              영화별 상영시간표
            </button>
            <div className={select === 'movie' ? styles.active : ''}>
              <ScheduleMovieTimeContainer />
            </div>
          </section>
        </div>
      </div>
      <LoadingContainer />
    </main>
  );
}
export default React.memo(ScheduleComponent);

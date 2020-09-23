import React from 'react';
import AllTheaterPointContainer from '../../Containers/AllTheaterPointContainer';
import BookTimeMoviesContainer from '../../Containers/BookTimeMoviesContainer';
import styles from './ScheduleTheaterTimeComponent.module.scss';
function ScheduleTheaterTimeComponent({ point }) {
  return (
    <>
      <div className={styles.scheduleThaeterBox}>
        <h3>{point}</h3>
        <AllTheaterPointContainer point={point} from="schedule" />
      </div>
      <div className={styles.scheduleTimeBox}>
        <BookTimeMoviesContainer from="schedule" type="1" />
      </div>
    </>
  );
}

export default React.memo(ScheduleTheaterTimeComponent);

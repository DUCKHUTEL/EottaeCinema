import React, { useState, useCallback } from 'react';
import styles from './ScheduleMovieTimeSortTheaterComponent.module.scss';
import 'moment/locale/ko';
import moment from 'moment';
import OwlCarouselComponent from '../OwlCarouselComponent/OwlCarouselComponent';
import BookPotalContainer from '../../Containers/BookPotalContainer';
import ScheduleMovieTimeSortTheaterResultComponent from '../ScheduleMovieTimeSortTheaterResultComponent/ScheduleMovieTimeSortTheaterResultComponent';

function ScheduleMovieTimeSortTheaterComponent({
  setStep,
  selectDate,
  selectedDate,
  bookData,
  theatersData,
  selectedTitle,
  movieDataSetTheater,
}) {
  moment.locale('ko');
  const [filtertBy, setfilter] = useState('서울');
  const [Booking, setMind] = useState(false);
  const doSortMovie = useCallback((e) => {
    setfilter(e.target.id);
  }, []);

  const selectBookData = useCallback(
    (e) => {
      setMind(true);
      bookData(e.currentTarget.id);
    },
    [bookData],
  );

  return (
    <div className={styles.BookTimeMovie}>
      <h3>
        {selectedDate === '2020-08-24'
          ? `${selectedDate} (오늘)`
          : `${selectedDate} (${moment(selectedDate).format('dddd')})`}
      </h3>
      <div className={styles.timeMovieContents}>
        <div className={styles.dateSelector}>
          <OwlCarouselComponent
            selectDate={selectDate}
            from="schedule"
            type="2"
          />
        </div>
        <ul className={styles.filtertBy} onClick={doSortMovie}>
          {theatersData
            .map((locations) => Object.keys(locations)[0])
            .map((item) => (
              <li
                key={item}
                id={item}
                className={
                  item === filtertBy
                    ? [styles.active, styles.filterItem].join(' ')
                    : styles.filterItem
                }
              >
                {item}
              </li>
            ))}
        </ul>
        <ScheduleMovieTimeSortTheaterResultComponent
          selectedTitle={selectedTitle}
          movieDataSetTheater={movieDataSetTheater}
          selectBookData={selectBookData}
          filtertBy={filtertBy}
        />
        {Booking && (
          <BookPotalContainer
            setStep={setStep}
            setMind={setMind}
            from="schedule"
            type="movieTime"
          />
        )}
      </div>
    </div>
  );
}
export default React.memo(ScheduleMovieTimeSortTheaterComponent);

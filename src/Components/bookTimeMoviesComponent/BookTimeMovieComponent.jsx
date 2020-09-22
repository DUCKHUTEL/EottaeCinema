import React, { useState, useRef, useCallback } from 'react';
import styles from './BookTimeMovuesComponent.module.scss';
import 'moment/locale/ko';
import moment from 'moment';
import OwlCarouselComponent from '../OwlCarouselComponent/OwlCarouselComponent';
import BookPotalContainer from '../../Containers/BookPotalContainer';
import BookTimeMovieViewComponent from '../BookTimeMovieViewComponent/BookTimeMovieViewComponent';
import LogInModalContainer from '../../Containers/LogInModalContainer';
function BookTimeMovieComponent({
  from,
  setStep,
  selectDate,
  bookData,
  selectedDate,
  movieDataForBookBtn,
  type,
  logModal,
}) {
  moment.locale('ko');
  const [filtertBy, setfilter] = useState('전체');
  const [Booking, setMind] = useState(false);
  const filterItems = useRef([
    '전체',
    '스페셜관',
    'Atoms',
    '13시 이후',
    '19시 이후',
    '심야',
  ]);

  const doSortMovie = useCallback((e) => {
    setfilter(e.target.id);
  }, []);
  const selectBookData = useCallback(
    (e) => {
      bookData(e.currentTarget.id);
      setMind(true);
    },
    [bookData],
  );
  return (
    <div
      className={
        from
          ? [styles.BookTimeMovie, styles.schduleBookTimeMoive].join(' ')
          : styles.BookTimeMovie
      }
    >
      <h3>
        {selectedDate === '2020-08-24'
          ? `${selectedDate} (오늘)`
          : `${selectedDate} (${moment(selectedDate).format('dddd')})`}
      </h3>
      <div className={styles.timeMovieContents}>
        <div className={styles.dateSelector}>
          <OwlCarouselComponent
            selectDate={selectDate}
            from={from}
            type={type}
          />
        </div>
        <ul className={styles.filtertBy} onClick={doSortMovie}>
          {filterItems.current.map((item) => (
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
        <article>
          <BookTimeMovieViewComponent
            movieDataForBookBtn={movieDataForBookBtn}
            selectBookData={selectBookData}
            filtertBy={filtertBy}
          />
        </article>
        {Booking && (
          <BookPotalContainer setStep={setStep} setMind={setMind} from={from} />
        )}
        {logModal && <LogInModalContainer />}
      </div>
    </div>
  );
}
export default React.memo(BookTimeMovieComponent);

import React, { useState, useRef, useCallback } from 'react';
import styles from './ScheduleMovieTimeSortTheaterComponent.module.scss';
import 'moment/locale/ko';
import moment from 'moment';
import OwlCarouselComponent from '../OwlCarouselComponent/OwlCarouselComponent';
import BookPotalContainer from '../../Containers/BookPotalContainer';

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
  console.log(Booking);

  const selectBookData = useCallback((e) => {
    setMind(true);
    bookData(e.currentTarget.id);
  }, []);

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
        <article>
          {selectedTitle === '없음' ? (
            <></>
          ) : movieDataSetTheater.length === 0 ? (
            <div className={styles.notice}>
              <p>조회되는 정보가 없어요오~</p>
              <p>조건을 변경해 주세여!</p>
            </div>
          ) : (
            movieDataSetTheater.map((movies, i) => {
              const movie = movies[Object.keys(movies)[0]].filter(
                (movies) => movies.locationName === filtertBy,
              );
              if (movie.length === 0) return;
              return (
                <div className={styles.BookTitleArea} key={i}>
                  <div>{Object.keys(movies)[0]}</div>
                  <p>2D</p>
                  <ul className={styles.BookBtnContainer}>
                    {movie.map((willBtnData, idx) => (
                      <li
                        key={willBtnData.bookId}
                        id={willBtnData.bookId}
                        onClick={selectBookData}
                      >
                        <a role="button" className={styles.bookBtn}>
                          <dl>
                            <dt className={styles.a11yHidden}>상영시간</dt>
                            <dd className={styles.showTime}>
                              <span>{willBtnData.movieTime.slice(0, 5)}</span>
                              <div
                                className={styles.toolTipText}
                              >{`종료 ${willBtnData.movieEndTime.slice(
                                0,
                                5,
                              )}`}</div>
                            </dd>
                            <dt className={styles.a11yHidden}>잔여석</dt>
                            <dd className={styles.seatData}>
                              <span>{willBtnData.bookedSeatCnt}</span>/
                              {willBtnData.allSeat}
                            </dd>
                            <dt className={styles.a11yHidden}>상영관</dt>
                            <dd className={styles.stageData}>
                              {willBtnData.stage}관
                            </dd>
                          </dl>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })
          )}
        </article>
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

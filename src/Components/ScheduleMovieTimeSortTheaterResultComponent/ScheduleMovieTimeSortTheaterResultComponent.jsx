import React from 'react';
import styles from './ScheduleMovieTimeSortTheaterResultComponent.module.scss';

function ScheduleMovieTimeSortTheaterResultComponent({
  selectedTitle,
  movieDataSetTheater,
  selectBookData,
  filtertBy,
}) {
  return (
    <article className={styles.scheduleMovieArticle}>
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
                {movie.map((willBtnData) => (
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
  );
}
export default React.memo(ScheduleMovieTimeSortTheaterResultComponent);

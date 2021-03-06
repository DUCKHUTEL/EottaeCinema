import React from 'react';
import styles from './BookTimeMovieViewComponent.module.scss';
function BookTimeMovieViewComponent({
  movieDataForBookBtn,
  selectBookData,
  filtertBy,
}) {
  return movieDataForBookBtn.length === 0 ? (
    <div className={styles.notice}>
      <p>조회되는 정보가 없어요오~</p>
      <p>조건을 변경해 주세여!</p>
      <p></p>
    </div>
  ) : (
    movieDataForBookBtn.map((movies, i) => {
      const movie = movies[Object.keys(movies)[0]].filter((movies) => {
        if (filtertBy === '전체') return true;
        if (filtertBy === '13시 이후')
          return movies.movieTime.split(':').join('') >= 133000;
        if (filtertBy === '19시 이후')
          return movies.movieTime.split(':').join('') >= 190000;
        if (filtertBy === '심야')
          return movies.movieTime.split(':').join('') >= 210000;
        if (filtertBy === '스페셜관' || filtertBy === 'Atoms') return false;
        return;
      });
      if (movie.length === 0) return;
      return (
        <div className={styles.BookTitleArea} key={i}>
          <div>
            <span className={styles[`ageCut${movie[0].ageCut}`]}>
              {movie[0].ageCut === 0 ? '전체' : movie[0].ageCut}
            </span>
            {movie[0].movieTitle}
          </div>
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
                      >{`종료 ${willBtnData.movieEndTime.slice(0, 5)}`}</div>
                    </dd>
                    <dt className={styles.a11yHidden}>잔여석</dt>
                    <dd className={styles.seatData}>
                      {willBtnData.bookedSeatCnt === willBtnData.allSeat ? (
                        <span>만석</span>
                      ) : (
                        <>
                          <span>{willBtnData.bookedSeatCnt}</span>/
                          {willBtnData.allSeat}
                        </>
                      )}
                    </dd>
                    <dt className={styles.a11yHidden}>상영관</dt>
                    <dd className={styles.stageData}>{willBtnData.stage}관</dd>
                  </dl>
                </a>
              </li>
            ))}
          </ul>
        </div>
      );
    })
  );
}
export default React.memo(BookTimeMovieViewComponent);

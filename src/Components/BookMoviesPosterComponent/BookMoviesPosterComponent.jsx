import React from 'react';
import styles from './BookMoviesPosterComponent.module.scss';
function BookMoviesPosterComponent({
  moviesData,
  sort,
  selectedTitle,
  selectingMoivePoster,
}) {
  return moviesData
    .sort((a, b) => (a[sort] > b[sort] ? -1 : a[sort] < b[sort] ? 1 : 0))
    .map((movie, idx) => (
      <li
        key={movie.movieId}
        className={
          selectedTitle === movie.movieTitle
            ? [styles.active, styles.movieLi].join(' ')
            : styles.movieLi
        }
      >
        <a
          data-title={movie.movieTitle}
          href="#"
          onClick={selectingMoivePoster}
        >
          <img src={movie.moviePoster} alt={movie.movieTitle + '포스터'} />
          <p>{idx + 1}</p>
          <div className={styles.info}>
            <div className={styles.infoTitle}>
              <span className={styles[`ageCut${movie.ageCut}`]}>
                {movie.ageCut === 0 ? '전체' : movie.ageCut}
              </span>
              <span className={styles.movieTitle}>{movie.movieTitle}</span>
            </div>
            <div className={styles.calc}>
              <span className={styles.movieBookPer}>
                예매율 {movie.movieBookPer}% <span>|</span>{' '}
              </span>
              <span className={styles.moviePoing}>
                <span>★</span>
                {movie.moviePoing}
              </span>
            </div>
            <span className={styles.movieOpenDate}>
              개봉일 {movie.movieOpenDate.slice(0, 10).split('-').join('.')}
            </span>
          </div>
        </a>
      </li>
    ));
}
export default React.memo(BookMoviesPosterComponent);

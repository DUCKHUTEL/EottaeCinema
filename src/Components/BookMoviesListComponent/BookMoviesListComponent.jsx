import React from 'react';
import styles from './BookMoviesListComponent.module.scss';
function BookMoviesListComponent({ moviesData, sort, selectedTitle }) {
  return moviesData
    .sort((a, b) => (a[sort] > b[sort] ? -1 : a[sort] < b[sort] ? 1 : 0))
    .map((movie, idx) => (
      <li
        key={idx}
        className={
          selectedTitle === movie.movieTitle
            ? [styles.active, styles.movieLi].join(' ')
            : styles.movieLi
        }
      >
        <a href="#" data-title={movie.movieTitle}>
          <span className={styles[`ageCut${movie.ageCut}`]}>
            {movie.ageCut === 0 ? '전체' : movie.ageCut}
          </span>
          <span className={styles.movieTitle}>{movie.movieTitle}</span>
        </a>
      </li>
    ));
}

export default React.memo(BookMoviesListComponent);

import React, { useState, useCallback } from 'react';
import styles from './BookMoviesComponent.module.scss';
import { useEffect } from 'react';
import BookMoviesListComponent from '../BookMoviesListComponent/BookMoviesListComponent';
import BookMoviesPosterComponent from '../BookMoviesPosterComponent/BookMoviesPosterComponent';
function BookmoviesComponent({ selectTitle, selectedTitle, moviesData, from }) {
  const [sort, setSort] = useState('movieBookPer');
  const [show, setShow] = useState('hamberger');
  useEffect(() => {
    if (from === undefined) {
      if (selectedTitle === '없음') selectTitle('테넷');
    }
  }, [from, selectedTitle, selectTitle]);

  const changeSort = useCallback((e) => {
    setSort(e.target.value);
  }, []);

  const selectingMoive = useCallback(
    (e) => {
      e.preventDefault();
      if (!e.target.matches('span') && !e.target.matches('a')) return;
      if (e.target.matches('span')) {
        selectTitle(e.target.parentNode.dataset.title);
        return;
      }
      selectTitle(e.target.dataset.title);
    },
    [selectTitle],
  );

  const selectingMoivePoster = useCallback(
    (e) => {
      e.preventDefault();
      selectTitle(e.currentTarget.dataset.title);
    },
    [selectTitle],
  );

  return (
    <div className={styles.bookMovies}>
      <h3 className={from && styles.schedule}>
        {selectedTitle === '없음' ? '영화 선택' : selectedTitle}
      </h3>
      <div className={styles.bookMovieContents}>
        <div className={styles.bookMovieHeader}>
          <select
            name="movieSort"
            className={styles.sortBox}
            onChange={changeSort}
          >
            <option value="movieBookPer">예매순</option>
            <option value="moviePoing">평점순</option>
            <option value="movieBookPer">관객순</option>
          </select>
          <div className={styles.btnBox}>
            <button
              id="hambergerBtn"
              className={
                show === 'hamberger'
                  ? [styles.active, styles.hambergerBtn].join(' ')
                  : styles.hambergerBtn
              }
              onClick={() => {
                setShow('hamberger');
              }}
            ></button>
            <button
              id="posterBtn"
              className={
                show === 'poster'
                  ? [styles.active, styles.posterBtn].join(' ')
                  : styles.posterBtn
              }
              onClick={() => {
                setShow('poster');
              }}
            ></button>
          </div>
        </div>
        <ul
          className={
            show === 'hamberger'
              ? [styles.active, styles.hambergerLi].join(' ')
              : styles.hambergerLi
          }
          onClick={selectingMoive}
        >
          <BookMoviesListComponent
            moviesData={moviesData}
            sort={sort}
            selectedTitle={selectedTitle}
          />
        </ul>
        <ul
          className={
            show === 'poster'
              ? [styles.active, styles.posterLi].join(' ')
              : styles.posterLi
          }
        >
          <BookMoviesPosterComponent
            moviesData={moviesData}
            sort={sort}
            selectedTitle={selectedTitle}
            selectingMoivePoster={selectingMoivePoster}
          />
        </ul>
      </div>
    </div>
  );
}
export default React.memo(BookmoviesComponent);

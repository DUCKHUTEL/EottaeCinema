import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import DetailContent from '../Detail2/DetailContent';
import styles from './ShowingMovieComponent.module.scss';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';

function ShowingMovieComponent() {
  const movies = useSelector((state) => state.movies.movies);

  const [movieInfo, setMovieInfo] = useState([...movies]);

  const nowClick = useCallback(() => {
    setMovieInfo(() => [...movies]);
  }, []);

  const preClick = useCallback(() => {
    setMovieInfo(() => [
      movies.filter((movie) => console.log(movie.movieOpenDate.split('-'))),
    ]);
  }, []);

  return (
    <main className={styles['movies-info']}>
      <nav className={styles['nav']}>
        <ul className={styles['nav-1']}>
          <li className={styles['now']} onClick={nowClick}>
            현재 상영작
          </li>
          <li className={styles['prearranged']} onClick={preClick}>
            상영 예정작
          </li>
        </ul>
        <ul className={styles['nav-2']}>
          <div className={styles['reservation']}>예매순</div>
          <div className={styles['mark']}>평점순</div>
        </ul>
      </nav>
      <ul>
        {movieInfo.map((movie, i) => (
          <li key={i}>
            <figure>
              <img src={movie.moviePoster} alt={movie.movieTitle}></img>
              <figcaption>{movie.movieId}</figcaption>
            </figure>
            <table className={styles['table']}>
              <caption></caption>
              <thead>
                <tr>
                  <th colSpan="3" className={styles['title']}>
                    {movie.movieTitle}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{movie.movieBookPer}%</td>
                  <td>{movie.moviePoing}</td>
                  <td>하트</td>
                </tr>
              </tbody>
            </table>
            <nav className={styles['slide-button']}>
              <div>
                <button className={styles['button-1']}>
                  <Link to="/ticketing">예매하기</Link>
                </button>
                <button
                  className={styles['button-2']}
                  onClick={() => <DetailContent title={movie.movieTitle} />}
                >
                  <Link
                    onClick={() => <DetailContent title={movie.movieTitle} />}
                    to={'/detail?title=' + movie.movieTitle}
                  >
                    상세정보
                  </Link>
                </button>
              </div>
            </nav>
          </li>
        ))}
      </ul>
    </main>
  );
}
export default React.memo(ShowingMovieComponent);

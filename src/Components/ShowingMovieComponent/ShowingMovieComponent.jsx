import React from 'react';
import { useEffect, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './ShowingMovieComponent.module.scss';
import DetailContent from '../Detail2/DetailContent';

function ShowingMovieComponent() {
  const movies = useSelector((state) => state.movies.movies);

  const [movieInfo, setMovieInfo] = useState([...movies]);

  const nowClick = useCallback(() => {
    setMovieInfo(() => [...movies]);
  }, [movieInfo]);

  const preClick = useCallback(() => {
    setMovieInfo(() => [
      movies.filter((movie) => console.log(new Date(movie.movieOpenDate))),
    ]);
  }, [movieInfo]);

  const appearAge = useCallback((age) => {
    if (age < 1) return styles['age-all'];
    if (age === 12) return styles['age-12'];
    if (age === 15) return styles['age-15'];
  }, []);

  return (
    <main className={styles['movies-info']}>
      <nav className={styles['nav']}>
        <ul className={styles['nav-1']}>
          <li className={styles['now']}>
            <button onClick={nowClick}>현재 상영작</button>
          </li>
          <li className={styles['prearranged']}>
            <button onClick={preClick}>상영 예정작</button>
          </li>
        </ul>
        <ul className={styles['nav-2']}>
          <li className={styles['reservation']}>
            <button>예매순</button>
          </li>
          <li className={styles['mark']}>
            <button>평점순</button>
          </li>
        </ul>
      </nav>
      <ul>
        {movies.map((movie, i) => (
          <li key={i}>
            <figure className={styles['movie-poster']}>
              <img src={movie.moviePoster} alt={movie.movieTitle}></img>
              <figcaption>{movie.movieId}</figcaption>
              <span className={appearAge(movie.ageCut)}>
                {movie.ageCut < 1 ? '전체' : movie.ageCut}
              </span>
            </figure>
            <table className={styles['table']}>
              <caption></caption>
              <thead>
                <tr>
                  <th colSpan="2" className={styles['movie-title']}>
                    {movie.movieTitle}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className={styles['movie-info']}>
                  <td className={styles['movie-per']}>
                    예매율{movie.movieBookPer}%
                  </td>
                  <td className={styles['movie-point']}>{movie.moviePoing}</td>
                </tr>
              </tbody>
            </table>
            <nav className={styles['modal-button']}>
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

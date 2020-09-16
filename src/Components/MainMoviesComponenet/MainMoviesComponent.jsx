import React from 'react';
import styles from './MainMoviesComponent.module.scss';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import DetailContent from '../Detail2/DetailContent';
import { useCallback } from 'react';

function MainMoviesComponent({ movies, getMovies }) {
  const [slideInfo, setSlideInfo] = useState({
    count: 0,
    print: { transform: `translate3d(${-198 * 0}px, 0, 0)` },
  });

  useEffect(() => {
    getMovies();
  }, []);

  const clickRight = useCallback(() => {
    if (slideInfo.count >= 5) return;
    setSlideInfo((state) => ({
      ...state,
      count: state.count + 1,
    }));
    setSlideInfo((state) => ({
      ...state,
      print: { transform: `translate3d(${-198 * state.count}px, 0, 0)` },
    }));
  }, [slideInfo]);

  const clickLeft = useCallback(() => {
    if (slideInfo.count < 0) return;
    setSlideInfo((state) => ({
      ...state,
      count: state.count - 1,
    }));
    setSlideInfo((state) => ({
      ...state,
      print: { transform: `translate3d(${-198 * state.count}px, 0, 0)` },
    }));
  }, []);

  const appearAge = useCallback((age) => {
    if (age < 1) return styles['age-all'];
    if (age === 12) return styles['age-12'];
    if (age === 15) return styles['age-15'];
  }, []);

  return (
    <main className={styles['movies-info']}>
      <div className={styles['standard-time']}>
        <div className={styles['time-item']}>08.29 19:15기준</div>
      </div>
      <ul>
        {movies.map((movie, i) => (
          <li key={i} style={slideInfo.print}>
            <figure className={styles['movie-poster']}>
              <img src={movie.moviePoster} alt={movie.movieTitle}></img>
              <figcaption>{movie.movieId}</figcaption>
              <span className={appearAge(movie.ageCut)}>
                {movie.ageCut < 1 ? '전체' : movie.ageCut}
              </span>
            </figure>
            <table>
              <caption></caption>
              <thead>
                <tr>
                  <th colSpan="3" className={styles['movie-title']}>
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
                  <td className={styles['movie-hart']}>하트</td>
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
      <nav className={styles['slide-button']}>
        {slideInfo.count > 0 ? (
          <button className={styles['left']} onClick={clickLeft}>
            이전
          </button>
        ) : (
          ''
        )}

        <button className={styles['right']} onClick={clickRight}>
          이후
        </button>
      </nav>
    </main>
  );
}
export default React.memo(MainMoviesComponent);

import React from 'react';
import styles from './MainMoviesComponent.module.scss';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import DetailContent from '../Detail2/DetailContent';

function MainMoviesComponent({ movies, getMovies }) {
  const [slideInfo, setSlideInfo] = useState({
    count: 0,
    print: { transform: `translate3d(${-198 * 0}px, 0, 0)` },
  });

  useEffect(() => {
    getMovies();
  }, []);

  const clickRight = () => {
    if (slideInfo.count >= 5) return;
    setSlideInfo((state) => ({
      ...state,
      count: state.count + 1,
    }));
    setSlideInfo((state) => ({
      ...state,
      print: { transform: `translate3d(${-198 * state.count}px, 0, 0)` },
    }));
  };

  const clickLeft = () => {
    if (slideInfo.count < 0) return;
    setSlideInfo((state) => ({
      ...state,
      count: state.count - 1,
    }));
    setSlideInfo((state) => ({
      ...state,
      print: { transform: `translate3d(${-198 * state.count}px, 0, 0)` },
    }));
  };

  return (
    <main className={styles['movies-info']}>
      <div className={styles['standard-time']}>08.29 19:15기준</div>
      <ul>
        {movies.map((movie, i) => (
          <li key={i} style={slideInfo.print}>
            <figure>
              <img src={movie.moviePoster} alt={movie.movieTitle}></img>
              <figcaption>{movie.movieId}</figcaption>
            </figure>
            <table>
              <caption></caption>
              <thead>
                <tr>
                  <th colSpan="3">{movie.movieTitle}</th>
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

      <nav>
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

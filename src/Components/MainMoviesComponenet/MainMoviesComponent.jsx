import React from 'react';
import styles from './MainMoviesComponent.module.scss';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function MainMoviesComponent({ movies, getMovies }) {
  const [count, setcount] = useState(0);
  const num = 198 * count;
  const [print, setprint] = useState({
    transform: `translate3d(${num}px, 0, 0)`,
  });

  useEffect(() => {
    getMovies();
  }, []);

  const clickRight = (e) => {
    if (count > 5) return;
    setcount(count + 1);
    console.log(count);
    const num = count * -198;
    setprint({ transform: `translate3d(${num}px, 0, 0)` });
  };

  const clickLeft = () => {
    if (count <= 0) return;
    setcount(count - 1);
    const num = count * -198;
    setprint({ transform: `translate3d(${num}px, 0, 0)` });
  };
  return (
    <main className={styles['movies-info']}>
      <div className={styles['standard-time']}>08.29 19:15기준</div>
      <ul>
        {movies.map((movie, i) => (
          <li key={i} style={print}>
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
            <nav>
              <div>
                <button className={styles['button-1']}>
                  <Link to="/ticketing">예매하기</Link>
                </button>
                <button className={styles['button-2']}>
                  <Link to="/detail">상세정보</Link>
                </button>
              </div>
            </nav>
          </li>
        ))}
      </ul>

      <nav>
        {count > 0 ? (
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

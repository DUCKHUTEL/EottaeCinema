import React, { useCallback, useState } from 'react';
import styles from './AlltheaterPointComponent.module.scss';

function AllTheaterPointComponent({
  allTheater,
  resTheater,
  selectPoint,
  point,
  resMovies,
}) {
  const [active, setActive] = useState(point !== '없음' ? point : '서울');
  const [clickedPoint, setPoint] = useState('');

  const localTabChange = useCallback((e) => {
    e.preventDefault();
    if (!e.target.matches('#locationTitle')) return;
    setActive(e.target.parentNode.id);
  }, []);

  const selectTheater = useCallback((e) => {
    if (!e.target.matches('a')) return;
    e.preventDefault();
    selectPoint(e.target.id);
    setPoint(e.target.id);
  }, []);

  return (
    <ul className={styles.pointList} onClick={localTabChange}>
      <li
        id="my영화관"
        className={
          active === 'my영화관'
            ? [styles.active, styles.theaterTitle].join(' ')
            : styles.theaterTitle
        }
      >
        <a id="locationTitle" href="#">
          MY 영화관 (0)
        </a>
        <ul>
          <li>
            <p>
              my 영화관을 등록 후 <br />
              이용해주세요
            </p>
          </li>
        </ul>
      </li>
      {allTheater.map((allT) => {
        let location = Object.keys(allT)[0];
        return (
          <li
            key={location}
            id={location}
            className={
              active === location
                ? [styles.active, styles.theaterTitle].join(' ')
                : styles.theaterTitle
            }
          >
            <a id="locationTitle" href="#">
              {location} (
              {point === '없음' && resTheater.length === 0
                ? allT[location].length
                : resTheater.filter((resT) =>
                    allT[location].includes(resT[location]),
                  ).length}
              )
            </a>
            <ul onClick={selectTheater}>
              {allT[location].map((point) => (
                <li key={point}>
                  <a
                    href="#"
                    id={point}
                    className={
                      clickedPoint === point
                        ? [styles.activePoint, styles.point].join(' ')
                        : styles.point
                    }
                  >
                    {point} (
                    {
                      resMovies.filter(
                        (movie) => movie.theaterLocation === point,
                      ).length
                    }
                    )
                  </a>
                </li>
              ))}
            </ul>
          </li>
        );
      })}
    </ul>
  );
}

export default React.memo(AllTheaterPointComponent);

import React from 'react';
import { useSelector } from 'react-redux';
import styles from './DetailContent.module.scss';

export default function DetailContent({ movieAPIData, DBData }) {
  const title = useSelector((state) => console.log(state.router.location));
  // React.useEffect(() => {
  //   getMovieAPIData();
  // }, []);

  // React.useEffect(() => {
  //   getMoviesDBData();
  // }, []);

  const APIData = movieAPIData;
  // const DBData = moviesDBData.find(
  //   (DBdata) => DBdata.movieTitle === APIData.title,
  // );

  console.log(movieAPIData.actors);

  return (
    <div className={styles.content}>
      <h2 className={styles['a11y-hidden']}>영화</h2>
      <h3 className={styles['a11y-hidden']}>영화 상세정보</h3>
      <div className={styles['detail-wrap']}>
        <div className={styles.poster}>
          {APIData === undefined || (
            <img src={`${APIData.poster}`} alt="poster" />
          )}
        </div>
        <div className={styles['title-info']}>
          <span>{APIData === undefined || APIData.rating}</span>
          <strong>{DBData === undefined || DBData.movieTitle}</strong>
        </div>
        <ul className={styles['detail-info1']}>
          <li className={styles['sub-info']}>
            <em>관람객 평점</em>
            <strong>
              <em>
                <span className={styles['a11y-hidden']}>평점</span>
              </em>
              <strong>{DBData === undefined || DBData.moviePoing}</strong>
            </strong>
          </li>
          <li className={styles['sub-info']}>
            <em>예매율 {DBData === undefined || DBData.movieBookRank}위</em>
            <strong>{DBData === undefined || DBData.movieBookPer}%</strong>
          </li>
          <li className={styles['sub-info']}>
            <em>누적 관객수</em>
            <strong>
              {DBData === undefined ||
                DBData.movieCumAud
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              명
            </strong>
          </li>
        </ul>
        <ul className={styles['detail-info2']}>
          <li className={styles['sub-info1']}>
            <em>장르</em>
            <strong>
              <em>
                {APIData.genre === undefined ||
                  APIData.genre.split(',').join(', ')}{' '}
                / {APIData === undefined || APIData.nation}
              </em>
              <em className={styles['sub-info1-before']}>
                {APIData === undefined ||
                  (APIData.rlsDate + '').substring(0, 4) +
                    '.' +
                    (APIData.rlsDate + '').substring(4, 6) +
                    '.' +
                    (APIData.rlsDate + '').substring(6, 8)}{' '}
                개봉
              </em>
              <em className={styles['sub-info1-before']}>
                {APIData === undefined || APIData.runtime}분
              </em>
            </strong>
          </li>
          <li className={styles['sub-info2']}>
            <em>감독</em>
            <strong>{APIData === undefined || APIData.director}</strong>
          </li>
          <li className={styles['sub-info2']}>
            <em>출연</em>
            <strong>
              {APIData.actors === undefined ||
                APIData.actors[0] +
                  ', ' +
                  APIData.actors[1] +
                  ', ' +
                  APIData.actors[2]}
            </strong>
          </li>
        </ul>
        <div className={styles['spacial-hall-info']}>
          <span>
            <img
              src="http://caching.lottecinema.co.kr//Media/WebAdmin/f8f9fe68882649a18b4c310c3fd3db4b.PNG"
              alt="씨네커플"
            />
          </span>
          <span>
            <img
              src="http://caching.lottecinema.co.kr//Media/WebAdmin/5c23288d3a104f7fa4f7d3e725a2c6a8.PNG"
              alt="씨네컴포트"
            />
          </span>
          <span>
            <img
              src="http://caching.lottecinema.co.kr//Media/WebAdmin/208a5ede362244fb8ab2e5cc3ab07529.PNG"
              alt="씨네살론"
            />
          </span>
        </div>
        <div className={styles['movie-detail-aside-menu']}>
          <div>
            <button className={styles.share}>
              <span className={styles['a11y-hidden']}>공유하기</span>
            </button>
          </div>
          <div>
            <button className={styles.heart}>
              <span className={styles['a11y-hidden']}>좋아요</span>
            </button>
          </div>
          <div>
            <button className={styles.book}>예매하기</button>
          </div>
        </div>
      </div>
    </div>
  );
}

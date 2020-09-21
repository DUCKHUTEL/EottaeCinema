import React from 'react';
import styles from './DetailReviewScore.module.scss';

export default function DetailReviewScore({ DBData }) {
  return (
    <div className={styles['movie-score-box']}>
      <span className={styles['score-info']}>
        <em>총 평점</em>
        <span className={styles.rating}>
          {DBData === undefined || (DBData.moviePoing + '')[0]}
        </span>
        <span className={styles['max-rating']}>10</span>
      </span>
      <p className={styles['score-notion']}>
        영화 관람 후 관람평을 작성하시면 <br />
        L.POINT 50P를 적립해 드립니다.
      </p>
    </div>
  );
}

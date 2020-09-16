import React from 'react';
import styles from './DetailPeople.module.scss';

export default function DetailPeople({ movieAPIData, moviesDBData }) {
  return (
    <div className={styles['movie-people-box']}>
      <div className={styles['movie-people-text']}>감독 및 배우</div>
      <div className={styles['movie-people-list-box']}>
        <ul>
          <li>
            <div className={styles['picture']}></div>
            <div className={styles['people-info-box']}>
              <div className={styles['people-inner']}>
                <span className={styles['people-name']}>크리스토퍼 놀란</span>
                <span className={styles['people-cast-name']}>감독</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

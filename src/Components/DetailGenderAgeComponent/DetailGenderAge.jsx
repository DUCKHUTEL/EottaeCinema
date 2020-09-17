import React from 'react';
import styles from './DetailGenderAge.module.scss';

export default function DetailGenderAge({ DBData }) {
  console.log('gender', DBData);

  return (
    <div className={styles['right-con']}>
      <strong>관람 선호도</strong>
      <div className={styles['group-graph']}>
        <div className={styles['bx-graph01']}>
          <div className={styles.bg}></div>
          <dl>
            <dt className={styles.mal}>남성</dt>
            <dd className={styles.mal}>
              <span
                className={styles.bar}
                style={
                  DBData === undefined
                    ? { height: 0 }
                    : { height: `${DBData.movieManPer}%` }
                }
              ></span>
              <strong>
                {DBData === undefined ? '00.0' : DBData.movieManPer}
                <span>%</span>
              </strong>
            </dd>
            <dt className={styles.fem}>여성</dt>
            <dd className={styles.fem}>
              <span
                className={styles.bar}
                style={
                  DBData === undefined
                    ? { height: 0 }
                    : { height: `${DBData.movieWomanPer}%` }
                }
              ></span>
              <strong>
                {DBData === undefined ? '00.0' : DBData.movieWomanPer}
                <span>%</span>
              </strong>
            </dd>
          </dl>
        </div>
        <div className={styles['bx-graph02']}>
          <dl>
            <dt className={styles.gen10}>10대</dt>
            <dd
              className={`${styles.gen10}`}
              style={
                DBData === undefined
                  ? { height: 0 }
                  : { height: `${DBData.movieRate10}%` }
              }
            >
              <span className={styles.bar}></span>
              <strong>
                {DBData === undefined ? 0 : DBData.movieRate10}
                <span>%</span>
              </strong>
            </dd>
            <dt className={styles.gen20}>20대</dt>
            <dd
              className={`${styles.gen20} ${styles.top}`}
              style={
                DBData === undefined
                  ? { height: 0 }
                  : { height: `${DBData.movieRate20}%` }
              }
            >
              <span className={styles.bar}></span>
              <strong>
                {DBData === undefined ? 0 : DBData.movieRate20}
                <span>%</span>
              </strong>
            </dd>
            <dt className={styles.gen30}>30대</dt>
            <dd
              className={`${styles.gen30}`}
              style={
                DBData === undefined
                  ? { height: 0 }
                  : { height: `${DBData.movieRate30}%` }
              }
            >
              <span className={styles.bar}></span>
              <strong>
                {DBData === undefined ? 0 : DBData.movieRate30}
                <span>%</span>
              </strong>
            </dd>
            <dt className={styles.gen40}>40대</dt>
            <dd
              className={`${styles.gen40}`}
              style={
                DBData === undefined
                  ? { height: 0 }
                  : { height: `${DBData.movieRate40}%` }
              }
            >
              <span className={styles.bar}></span>
              <strong>
                {DBData === undefined ? 0 : DBData.movieRate40}
                <span>%</span>
              </strong>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  );
}

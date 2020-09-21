import React from 'react';
import styles from './DetailPeople.module.scss';

export default function DetailPeople({ loading, APIData, DBData }) {
  console.log(DBData);
  return (
    <div className={styles['movie-people-box']}>
      <div className={styles['movie-people-text']}>감독 및 배우</div>
      <div className={styles['movie-people-list-box']}>
        <ul>
          <li>
            <div className={styles['picture']}>
              <img
                src={`https://caching.lottecinema.co.kr//Media/MovieFile/${
                  DBData === undefined ||
                  DBData.movieDirectorImg.substring(
                    1,
                    DBData.movieDirectorImg.length - 1,
                  )
                }`}
                alt="감독"
              />
            </div>
            <div className={styles['people-info-box']}>
              <div className={styles['people-inner']}>
                <span className={styles['people-name']}>
                  {DBData === undefined || DBData.movieDirector}
                </span>
                <span className={styles['people-cast-name']}>감독</span>
              </div>
            </div>
          </li>
          {DBData === undefined ||
            DBData.movieActors.split(';').map((url, index) => {
              return (
                <li key={index}>
                  <div className={styles['picture']}>
                    <img
                      src={`https://caching.lottecinema.co.kr//Media/MovieFile/${url.replace(
                        /"/gi,
                        '',
                      )}`}
                      alt={`출연배우${index + 1}`}
                    />
                  </div>
                  <div className={styles['people-info-box']}>
                    <div className={styles['people-inner']}>
                      <span className={styles['people-name']}>
                        {APIData.length === 0 || APIData.actors[index]}
                      </span>
                      <span className={styles['people-cast-name']}>
                        {DBData === undefined ||
                          (DBData === null &&
                            DBData.movieCastName
                              .split(';')
                              [index].substring(
                                1,
                                DBData.movieCastName.split(';')[index].length -
                                  1,
                              ))}
                      </span>
                    </div>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

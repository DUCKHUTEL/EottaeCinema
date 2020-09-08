import React from 'react';
import styles from './DetailInfo.module.scss';
import Scrollbars from 'react-custom-scrollbars';
import DetailTrailer from './DetailTrailer';
import DetailStillCut from './DetailStillCut';

export default function DetailInfo({ movieAPIData, moviesDBData }) {
  const APIData = movieAPIData;
  const DBData = moviesDBData;

  console.log(APIData, DBData);
  return (
    <div className={styles.info}>
      <div className={styles['movie-info1']}>
        <button className={styles['movie-info1-button']}>
          <span>영화정보</span>
        </button>
        <div className={styles['tab-icon']}>
          <div className={styles['movie-tab-info1']}>
            <div className={styles['left-con']}>
              <strong className={styles['synopsys-text']}>시놉시스</strong>
              <div className={styles['synopsys-wrap']}>
                <div className={styles['synopsys-box']}>
                  <Scrollbars
                    style={{ width: '100%', height: '115px' }}
                    autoHide
                    autoHideTimeout={2000}
                    autoHideDuration={200}
                  >
                    <div className={styles['synopsys-inner']}>
                      {APIData === undefined || APIData.synopsys}
                    </div>
                  </Scrollbars>
                </div>
              </div>
            </div>
            <div className={styles['right-con']}>
              <strong>관람 선호도</strong>
            </div>
          </div>
          <DetailTrailer
            movieAPIData={movieAPIData}
            moviesDBData={moviesDBData}
          />
          <DetailStillCut
            movieAPIData={movieAPIData}
            moviesDBData={moviesDBData}
          />
        </div>
      </div>
      <div className={`${styles['movie-info2']} ${styles.none}`}>
        <button>
          <span>평점 및 관람평</span>
        </button>
        <div className={styles.none}>
          <em>총 평점</em>
          <strong>8</strong>
          <span>10</span>
        </div>
        <div className="review-box">
          <div className="star-score-box">
            <strong>
              <em>8</em>점
            </strong>
            <div>
              <div>
                <span>별</span>
                <span>별</span>
                <span>별</span>
                <span>별</span>
                <span>별</span>
                <span>별</span>
                <span>별</span>
                <span>별</span>
                <span>별</span>
                <span>별</span>
              </div>
            </div>
          </div>
          <div>
            <textarea placeholder="평점 및 영화 관람평을 작성해주세요. 한글 110자 / 영문 220자 작성 가능합니다."></textarea>
            <span>
              <strong>0</strong>/<em>220</em>
            </span>
          </div>
          <button>관람평 작성</button>
        </div>
      </div>
      <div className="movie-info3">
        <div>감독 및 배우</div>
        <iframe
          title="예고편"
          width="920"
          height="517.5"
          src="https://www.youtube.com/embed/919GruRSZzE"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    </div>
  );
}

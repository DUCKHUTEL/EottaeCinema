import React from 'react';
import styles from './DetailInfo.module.scss';
import Scrollbars from 'react-custom-scrollbars';
import DetailTrailer from './DetailTrailer';
import DetailStillCut from './DetailStillCut';
import DetailPeople from './DetailPeople';
import DetailGenderAge from './DetailGenderAge';
import DetailReview from './DetailReview';

export default function DetailInfo({ movieAPIData, DBData }) {
  const [infoState, setInfoState] = React.useState('movie');

  function movieInfoClick() {
    setInfoState('movie');
  }

  function reviewInfoClick() {
    setInfoState('review');
  }

  const APIData = movieAPIData;

  console.log(APIData, DBData);
  return (
    <ul className={styles.info}>
      <li className={styles['movie-info1']}>
        <button
          className={`${styles['movie-info1-button']} ${
            infoState === 'movie' && styles['info-active']
          }`}
          onClick={movieInfoClick}
        >
          <span>영화정보</span>
        </button>
        {infoState === 'movie' && (
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
              <DetailGenderAge DBData={DBData} />
            </div>
            <DetailTrailer movieAPIData={movieAPIData} DBData={DBData} />
            <DetailStillCut movieAPIData={movieAPIData} DBData={DBData} />
            <DetailPeople movieAPIData={movieAPIData} DBData={DBData} />
          </div>
        )}
      </li>
      <DetailReview infoState={infoState} reviewInfoClick={reviewInfoClick} />
    </ul>
  );
}

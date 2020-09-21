import React from 'react';
import styles from './DetailInfo.module.scss';
import Scrollbars from 'react-custom-scrollbars';
import DetailGenderAge from '../DetailGenderAgeComponent/DetailGenderAge';
import DetailTrailer from '../DetailTrailerComponent/DetailTrailer';
import DetailStillCut from '../DetailStillCutComponent/DetailStillCut';
import DetailPeople from '../DetailPeopleComponent/DetailPeople';
import DetailReviewContainer from '../../Containers/DetailReviewContainer';

export default function DetailInfo({
  loading,
  APIData,
  DBData,
  getMoviesDBData,
  selectedMovie,
}) {
  const [infoState, setInfoState] = React.useState('movie');
  React.useEffect(() => {
    getMoviesDBData();
  }, [getMoviesDBData]);

  function movieInfoClick() {
    setInfoState('movie');
  }

  function reviewInfoClick() {
    setInfoState('review');
  }

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
                        {APIData.synopsys === undefined || APIData.synopsys}
                      </div>
                    </Scrollbars>
                  </div>
                </div>
              </div>
              <DetailGenderAge DBData={DBData} />
            </div>
            <DetailTrailer APIData={APIData} DBData={DBData} />
            <DetailStillCut APIData={APIData} DBData={DBData} />
            <DetailPeople loading={loading} APIData={APIData} DBData={DBData} />
          </div>
        )}
      </li>
      <DetailReviewContainer
        infoState={infoState}
        reviewInfoClick={reviewInfoClick}
        DBData={DBData}
        getMoviesDBData={getMoviesDBData}
        selectedMovie={selectedMovie}
      />
    </ul>
  );
}

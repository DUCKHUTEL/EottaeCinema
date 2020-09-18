import React from 'react';
import styles from './DetailReview.module.scss';
import DetailReviewScore from '../DetailReviewScoreComponent/DetailReviewScore';
import DetailReviewNotice from '../DetailReviewNoticeComponent/DetailReviewNotice';
import DetailReviewInputContainer from '../../Containers/DetailReviewInputContainer';
import DetailReviewsListContainer from '../../Containers/DetailReviewsListContainer';

export default function DetailReview({
  infoState,
  reviewInfoClick,
  DBData,
  selectedMovie,
  reviewsData,
}) {
  console.log(reviewsData);

  return (
    <li className={styles['movie-info2']}>
      <button
        className={`${styles['movie-info2-button']} ${
          infoState === 'review' && styles['info-active']
        }`}
        onClick={reviewInfoClick}
      >
        <span>
          평점 및 관람평&nbsp;({reviewsData === undefined || reviewsData.total})
        </span>
      </button>
      {infoState === 'review' && (
        <div>
          <div className={styles['tab-icon']}>
            <DetailReviewScore DBData={DBData} />
            <DetailReviewInputContainer selectedMovie={selectedMovie} />
            <DetailReviewsListContainer reviewsData={reviewsData} />
            <DetailReviewNotice />
          </div>
        </div>
      )}
    </li>
  );
}

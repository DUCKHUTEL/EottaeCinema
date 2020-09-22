import React from 'react';
import styles from './DetailReview.module.scss';
import DetailReviewScore from '../DetailReviewScoreComponent/DetailReviewScore';
import DetailReviewInputContainer from '../../Containers/DetailReviewInputContainer';
import DetailReviewsList from '../DetailReviewsListComponent/DetailReviewsList';
import DetailReviewNotice from '../DetailReviewNoticeComponent/DetailReviewNotice';

export default function DetailReview({
  infoState,
  reviewInfoClick,
  DBData,
  selectedMovie,
  order,
  setOrder,
  count,
  reviewsData,
  countIncrement,
  latestClick,
  byLikeClick,
}) {
  const user = JSON.parse(localStorage.getItem('user'));
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
            <DetailReviewInputContainer
              selectedMovie={selectedMovie}
              count={count}
              setOrder={setOrder}
            />
            <DetailReviewsList
              order={order}
              count={count}
              reviewsData={reviewsData}
              countIncrement={countIncrement}
              latestClick={latestClick}
              byLikeClick={byLikeClick}
              user={user}
            />
            <DetailReviewNotice />
          </div>
        </div>
      )}
    </li>
  );
}

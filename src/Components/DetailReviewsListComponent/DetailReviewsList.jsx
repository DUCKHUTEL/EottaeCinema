import React from 'react';
import styles from './DetailReviewsList.module.scss';

export default function DetailReviewsList({ reviewsData, nickName }) {
  const imogiImg = React.useCallback((star) => {
    if (star > 8) return 1;
    if (star > 6) return 2;
    if (star > 4) return 3;
    if (star > 2) return 4;
    if (star > 0) return 5;
  }, []);

  return (
    <div className={styles['review-list-box']}>
      <div className={styles['review-list-top']}>
        <div className={styles['review-total']}>
          총 <em>{reviewsData === undefined || reviewsData.total || '0'}</em>건
        </div>
        <ul className={styles['sort-list']}>
          <li>
            <button>최신순</button>
          </li>
          <li>
            <button>공감순</button>
          </li>
        </ul>
      </div>
      <ul className={styles['review-list-con']}>
        {reviewsData === undefined ||
          reviewsData.datas.map((review, i) => {
            return (
              <li key={i}>
                <span className={styles['img-info']}>
                  <img
                    src={`https://www.lottecinema.co.kr/NLCHS/Content/images/customer/ic_survey_0${imogiImg(
                      review.star,
                    )}.png`}
                    alt="이모지"
                  />
                </span>
                <div className={styles['review-con-top']}>
                  <span className={styles.name}>{review.user}</span>
                  <span className={styles['review-list-score-box']}>
                    <em className={styles.star}>
                      <span className="a11yHidden">평점</span>
                    </em>
                    <span className={styles.score}>{review.star}</span>
                  </span>
                </div>
                <div className={styles['review-con-info']}>
                  {review.content}
                </div>
                <div className={styles['review-con-bottom']}>
                  <span className={styles.date}>{`${review[
                    'updated_at'
                  ].substring(0, 4)}.${review['updated_at'].substring(
                    5,
                    7,
                  )}.${review['updated_at'].substring(8, 10)}`}</span>
                  <button>
                    <em>
                      <span className="a11yHidden">좋아요</span>
                    </em>
                    <span>{review.favorit}</span>
                  </button>
                </div>
                {nickName === null || nickName !== review.user || (
                  <div className={styles.private}>
                    <button className={styles.edit}>수정</button>
                    <span>|</span>
                    <button>삭제</button>
                  </div>
                )}
              </li>
            );
          })}
      </ul>
      <button className={styles['review-list-more']}>
        <span>펼쳐보기</span>
      </button>
    </div>
  );
}

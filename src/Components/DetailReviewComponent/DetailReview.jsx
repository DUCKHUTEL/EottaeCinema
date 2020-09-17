import React from 'react';
import styles from './DetailReview.module.scss';
import boardService from '../../Services/boardService';

export default function DetailReview({ infoState, reviewInfoClick }) {
  const reviewData = boardService.getReviewsOnTime('테넷', 1);
  console.log('reviewData', reviewData);
  return (
    <li className={styles['movie-info2']}>
      <button
        className={`${styles['movie-info2-button']} ${
          infoState === 'review' && styles['info-active']
        }`}
        onClick={reviewInfoClick}
      >
        <span>평점 및 관람평</span>
      </button>
      {infoState === 'review' && (
        <div>
          <div className={styles['tab-icon']}>
            <div className={styles['movie-score-box']}>
              <span className={styles['score-info']}>
                <em>총 평점</em>
                <strong>8</strong>
                <span>10</span>
              </span>
              <p className={styles['score-notion']}>
                영화 관람 후 관람평을 작성하시면 <br /> L.POINT 50P를 적립해
                드립니다.
              </p>
            </div>
            <div className={styles['review-box']}>
              <div className={styles['star-score-box']}>
                <strong className={styles['selected-score']}>
                  <em>8</em> 점
                </strong>
                <div className={styles['star-select-box']}>
                  <div className={styles['star-rate']}>
                    <button className={`${styles.star}`} />
                    <button className={`${styles.star}`} />
                    <button className={`${styles.star}`} />
                    <button className={`${styles.star}`} />
                    <button className={`${styles.star}`} />
                    <button className={`${styles.star}`} />
                    <button className={`${styles.star}`} />
                    <button className={`${styles.star}`} />
                    <button className={`${styles.star}`} />
                    <button className={`${styles.star}`} />
                  </div>
                </div>
              </div>
              <div className={styles['review-write-box']}>
                <textarea placeholder="평점 및 영화 관람평을 작성해주세요. 한글 110자 / 영문 220자 작성 가능합니다." />
                <span className={styles['byte-info']}>
                  <strong className={styles.byte}>0</strong>/<em>220</em>
                </span>
              </div>
              <button className={styles['submit-button']}>관람평 작성</button>
            </div>
            <div className={styles['review-list-box']}>
              <div className={styles['review-list-top']}>
                <div className={styles['review-total']}>
                  총 <em>1,888</em>건
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
                <li>
                  <span className={styles['img-info']}>
                    <img
                      src="https://www.lottecinema.co.kr/NLCHS/Content/images/customer/ic_survey_01.png"
                      alt="이모지"
                    />
                  </span>
                  <div className={styles['review-con-top']}>
                    <span className={styles.name}>김*립</span>
                    <span className={styles['review-list-score-box']}>
                      <em className={styles['a11y-hidden']}>평점</em>
                      <storng>10</storng>
                    </span>
                  </div>
                  <div className={styles['review-con-info']}>
                    와우 개재밌어연~
                  </div>
                  <div className={styles['review-con-bottom']}>
                    <span>2020.09.10</span>
                    <button>
                      <em>좋아요</em>
                      <span>13</span>
                    </button>
                  </div>
                </li>
                <li>
                  <span className={styles['img-info']}>
                    <img
                      src="https://www.lottecinema.co.kr/NLCHS/Content/images/customer/ic_survey_01.png"
                      alt="이모지"
                    />
                  </span>
                  <div className={styles['review-con-top']}>
                    <span className={styles.name}>김*립</span>
                    <span className={styles['review-list-score-box']}>
                      <em className={styles['a11y-hidden']}>평점</em>
                      <storng>10</storng>
                    </span>
                  </div>
                  <div className={styles['review-con-info']}>
                    와우 개재밌어연~
                  </div>
                  <div className={styles['review-con-bottom']}>
                    <span>2020.09.10</span>
                    <button>
                      <em>좋아요</em>
                      <span>13</span>
                    </button>
                  </div>
                </li>
                <li>
                  <span className={styles['img-info']}>
                    <img
                      src="https://www.lottecinema.co.kr/NLCHS/Content/images/customer/ic_survey_01.png"
                      alt="이모지"
                    />
                  </span>
                  <div className={styles['review-con-top']}>
                    <span className={styles.name}>김*립</span>
                    <span className={styles['review-list-score-box']}>
                      <em className={styles['a11y-hidden']}>평점</em>
                      <storng>10</storng>
                    </span>
                  </div>
                  <div className={styles['review-con-info']}>
                    와우 개재밌어연~
                  </div>
                  <div className={styles['review-con-bottom']}>
                    <span className={styles.date}>2020.09.10</span>
                    <button>
                      <em>좋아요</em>
                      <span>13</span>
                    </button>
                  </div>
                </li>
              </ul>
              <button className={styles['review-list-more']}>
                <span>펼쳐보기</span>
              </button>
            </div>
            <div className={styles['list-bdr-box']}>
              <p className={styles['list-title']}>유의사항</p>
              <ul>
                <li>
                  관람평 작성에 대한 L.POINT는 익일 적립되며, 관람 후 초기 1회에
                  대해서만 적립됩니다.
                </li>
                <li>수정/삭제 후 재등록 시에는 포인트 적립이 되지 않습니다.</li>
                <li>
                  관람평은 관람 내역당 1회만 작성 가능하며, 상영종료된 영화의
                  관람평은 작성 불가합니다.
                </li>
                <li>
                  작성하신 관람평은 마이페이지 > MY무비로그 > 내가 본 영화에서
                  확인하실 수 있습니다.
                </li>
                <li>
                  관람 평점은 롯데시네마에서 실제 관람한 회원의 평점 입니다.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </li>
  );
}

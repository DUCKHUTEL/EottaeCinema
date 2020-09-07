import React from 'react';
import styles from './DetailContent.module.scss';

export default function DetailContent(props) {
  console.log('DetailContent', props);
  return (
    <div className={styles.content}>
      <h2 className={styles['a11y-hidden']}>영화</h2>
      <h3 className={styles['a11y-hidden']}>영화 상세정보</h3>
      <div className={styles['detail-wrap']}>
        <div className={styles.poster}>포스터</div>
        <div className={styles['title-info']}>
          <span>15</span>
          <strong>타이틀</strong>
        </div>
        <ul className={styles['detail-info1']}>
          <li className={styles['sub-info']}>
            <em>관람객 평점</em>
            <strong>
              <em>
                <span className={styles['a11y-hidden']}>평점</span>
              </em>
              <strong>8.6</strong>
            </strong>
          </li>
          <li className={styles['sub-info']}>
            <em>예매율 3위</em>
            <strong>10.4%</strong>
          </li>
          <li className={styles['sub-info']}>
            <em>누적 관객수</em>
            <strong>4,231,329명</strong>
          </li>
        </ul>
        <ul className={styles['detail-info2']}>
          <li className={styles['sub-info1']}>
            <em>장르</em>
            <strong>
              <em>범죄, 액션 / 한국</em>
              <em className={styles['sub-info1-before']}>2020.08.05 개봉</em>
              <em className={styles['sub-info1-before']}>108분</em>
            </strong>
          </li>
          <li className={styles['sub-info2']}>
            <em>감독</em>
            <strong>홍원찬</strong>
          </li>
          <li className={styles['sub-info2']}>
            <em>출연</em>
            <strong>황정민, 이정재, 박정민</strong>
          </li>
        </ul>
        <div className={styles['spacial-hall-info']}>
          <span>
            <img
              src="http://caching.lottecinema.co.kr//Media/WebAdmin/f8f9fe68882649a18b4c310c3fd3db4b.PNG"
              alt="씨네커플"
            />
          </span>
          <span>
            <img
              src="http://caching.lottecinema.co.kr//Media/WebAdmin/5c23288d3a104f7fa4f7d3e725a2c6a8.PNG"
              alt="씨네컴포트"
            />
          </span>
          <span>
            <img
              src="http://caching.lottecinema.co.kr//Media/WebAdmin/208a5ede362244fb8ab2e5cc3ab07529.PNG"
              alt="씨네살론"
            />
          </span>
        </div>
        <div className={styles['movie-detail-aside-menu']}>
          <div>
            <button className={styles.share}>
              <span className={styles['a11y-hidden']}>공유하기</span>
            </button>
          </div>
          <div>
            <button className={styles.heart}>
              <span className={styles['a11y-hidden']}>좋아요</span>
            </button>
          </div>
          <div>
            <button className={styles.book}>예매하기</button>
          </div>
        </div>
      </div>
    </div>
  );
}

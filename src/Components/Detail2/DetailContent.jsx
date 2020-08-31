import React from "react";
import styles from "./DetailContent.module.scss";

export default function DetailContent() {
  return (
    <div className={styles.content}>
      <h2 className={styles["a11y-hidden"]}>영화</h2>
      <h3 className={styles["a11y-hidden"]}>영화 상세정보</h3>
      <div className={styles["detail-wrap"]}>
        <div className={styles.poster}>포스터</div>
        <div className={styles["title-info"]}>
          <span>15</span>
          <strong>타이틀</strong>
        </div>
        <ul className={styles["detail-info1"]}>
          <li className={styles[""]}>
            <em>관람객 평점</em>
          </li>
          <li>
            <em>예매율</em>
          </li>
          <li>
            <em>누적 관객수</em>
          </li>
        </ul>
        <ul>
          <li>
            <em>장르</em>
          </li>
          <li>
            <em>감독</em>
          </li>
          <li>
            <em>출연</em>
          </li>
        </ul>
        <div>
          <div></div>
          <div></div>
          <button>예매하기</button>
        </div>
      </div>
      <div>
        <div></div>
        <div className="movie-info2">
          <button>
            <span>평점 및 관람평</span>
          </button>
          <div>
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
          <h5>포스터 스틸컷</h5>
          <div>슬라이드</div>
          <div>뷰</div>
          <div>감독 및 배우</div>
        </div>
      </div>
    </div>
  );
}

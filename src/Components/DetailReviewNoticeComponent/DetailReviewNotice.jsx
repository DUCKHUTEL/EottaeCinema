import React from 'react';
import styles from './DetailReviewNotice.module.scss';

export default function DetailReviewNotice() {
  return (
    <div className={styles['list-notice-box']}>
      <p className={styles['list-title']}>유의사항</p>
      <ul>
        <li>
          관람평 작성에 대한 L.POINT는 익일 적립되며, 관람 후 초기 1회에
          대해서만 적립됩니다.
        </li>
        <li>수정/삭제 후 재등록 시에는 포인트 적립이 되지 않습니다.</li>
        <li>
          관람평은 관람 내역당 1회만 작성 가능하며, 상영종료된 영화의 관람평은
          작성 불가합니다.
        </li>
        <li>
          작성하신 관람평은 마이페이지 &gt; MY무비로그 &gt; 내가 본 영화에서
          확인하실 수 있습니다.
        </li>
        <li>관람 평점은 롯데시네마에서 실제 관람한 회원의 평점 입니다.</li>
      </ul>
    </div>
  );
}

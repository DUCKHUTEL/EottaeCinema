import React from 'react';
import styles from './PayMethodComponent.module.scss';
function PayMethodComponent() {
  return (
    <article className={styles.payMethod}>
      <h4>결제수단</h4>
      <div className={styles.discount}>
        <div className={styles.point}>할인/포인트</div>
        <div className={styles.selectPoint}>
          <button>
            L. POINT <span>6,350P</span>
          </button>
          <button>L. POINT 카드 번호</button>
        </div>
        <ul className={styles.selectDiscount}>
          <li>
            <button>VIP</button>
          </li>
          <li>
            <button>관람권</button>
          </li>
          <li>
            <button>할인권</button>
          </li>
          <li>
            <button>제휴포인트/할인</button>
          </li>
        </ul>
      </div>
      <div className={styles.finalPayMethod}>
        <div className={styles.finalPayMethodTitle}>최종 결제 수단</div>
        <ul className={styles.selectPay}>
          <li>
            <button>VIP</button>
          </li>
          <li>
            <button>관람권</button>
          </li>
          <li>
            <button>할인권</button>
          </li>
          <li>
            <button>제휴포인트/할인</button>
          </li>
        </ul>
      </div>
    </article>
  );
}
export default React.memo(PayMethodComponent);

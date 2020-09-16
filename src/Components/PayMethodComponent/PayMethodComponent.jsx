import React from 'react';
import styles from './PayMethodComponent.module.scss';
function PayMethodComponent() {
  return (
    <article className={styles.payMethod}>
      <h4>결제수단</h4>
      <div className={styles.discount}></div>
      <div className={styles.finalPayMethod}></div>
    </article>
  );
}
export default React.memo(PayMethodComponent);

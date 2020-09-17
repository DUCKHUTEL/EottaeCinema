import React from 'react';
import { useCallback } from 'react';
import styles from './PayingComponent.module.scss';
function PayingComponent({
  setStep,
  bookingPeople,
  bookingData,
  pay,
  bookingSeat,
}) {
  const justPay = useCallback((e) => {
    const { nickName, accessToken } = JSON.parse(localStorage.getItem('user'));
    const { bookId, bookedSeat } = bookingData;
    const selecetedSeat = bookingSeat.join(';');
    const newBookedSeat = bookedSeat + ';' + selecetedSeat;
    pay(bookId, newBookedSeat, selecetedSeat, nickName, accessToken);
    setStep(4);
  });
  return (
    bookingPeople && (
      <article className={styles.payBox}>
        <h4 className={styles.payBoxTitle}>결제하기</h4>
        <div className={styles.accumulate}>
          <label className={styles.container} htmlFor="lpoint">
            L.POINT 적립
            <input type="checkBox" id="lpoint" />
            <span className={styles.checkmark}></span>
          </label>
          <label htmlFor="idCheck">
            <input type="radio" id="idCheck" name="check" />
            ID 적립
          </label>
          <label htmlFor="cardCheck">
            <input type="radio" id="cardCheck" name="check" />
            카드번호 적립
          </label>
        </div>
        <div className={styles.payData}>
          <p>
            <span>상품 금액</span>
            <span>
              <span className={styles.momey}>{bookingPeople.all * 10000}</span>{' '}
              원
            </span>
          </p>
          <p>
            <span>할인 금액</span>
            <span>
              <span className={styles.momey}>- 0</span>원
            </span>
          </p>
          <p>
            <span>상품 금액</span>
            <span>
              <span className={styles.momey}>{bookingPeople.all * 10000}</span>{' '}
              원
            </span>
          </p>
          <button onClick={justPay}>결제하기</button>
        </div>
      </article>
    )
  );
}
export default React.memo(PayingComponent);

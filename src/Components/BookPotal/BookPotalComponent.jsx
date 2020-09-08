import React, { useCallback } from 'react';
import styles from './BookPotalComponent.module.scss';
import FirstSeat from '../TheaterSeatComponents/FirstSeat/FirstSeat';
import SixthSeat from '../TheaterSeatComponents/SixSeat/SixthSeat';
import SecondSeat from '../TheaterSeatComponents/SecondSeat/SecondSeat';
import { history } from '../../Redux/create';
function BookPotalComponent({
  bookingData,
  setMind,
  setStep,
  selectTitle,
  selectPoint,
  type,
}) {
  const close = useCallback(() => {
    setMind(false);
  }, [setMind]);

  const goSelectSeat = useCallback(() => {
    if (setStep !== undefined) {
      setStep(2);
    } else if (type) {
      history.push('/ticketing', { step: 2 });
      selectPoint(bookingData.theaterLocation);
    } else {
      history.push('/ticketing', { step: 2 });
      console.log(bookingData);
    }
    setMind(false);
  }, []);

  return (
    <div
      className={styles.bookModal}
      onClick={(e) => {
        console.log(e.target);
      }}
    >
      <h3 className={styles.a11yHidden}>영화예매알림</h3>
      <div className={styles.ModalHead}>
        {bookingData.movieTime.slice(0, 5)}~
        {bookingData.movieEndTime.slice(0, 5)}({bookingData.stage}관)
        <button onClick={close}>X</button>
      </div>
      <div className={styles.ModalBody}>
        <div className={styles.leftSeat}>
          잔여좌석
          <span className={styles.canBookCnt}>
            {bookingData.allSeat - bookingData.bookedSeatCnt}
          </span>
          <span className={styles.allSeatCnt}>/{bookingData.allSeat * 2}</span>
        </div>
        <div className={styles.screen}>screen</div>
        {bookingData.stage === '1' ? (
          <FirstSeat bookedSeat={bookingData.bookedSeat} type="miniMap" />
        ) : bookingData.stage === '6' ? (
          <SixthSeat bookedSeat={bookingData.bookedSeat} type="miniMap" />
        ) : (
          <SecondSeat bookedSeat={bookingData.bookedSeat} type="miniMap" />
        )}
        <div className={styles.ageInfo}>
          <p>
            <span className={styles[`ageCut${bookingData.ageCut}`]}>
              {bookingData.ageCut === 0 ? '전체' : bookingData.ageCut}
            </span>
            본 영화는
            <span className={styles[`age${bookingData.ageCut}`]}>
              {bookingData.ageCut === 0
                ? '전체'
                : `${bookingData.ageCut}세 이상 `}
              관람가
            </span>
            영화입니다.
          </p>
          {bookingData.ageCut === 0 ? (
            ''
          ) : (
            <p className={styles.warning}>
              만{bookingData.ageCut}세 미만의 고객님(영, 유아 포함)은 반드시
              부모님 또는 성인 보호자의 동반하에 관람이 가능합니다. 연령확인
              불가 시 입장이 제한될 수 있습니다.
            </p>
          )}
        </div>
        <div className={styles.btnBox}>
          <button className={styles.closeBtn} onClick={close}>
            취소
          </button>
          <button className={styles.selectSeat} onClick={goSelectSeat}>
            {' '}
            인원/좌석 선택
          </button>
        </div>
      </div>
    </div>
  );
}

export default React.memo(BookPotalComponent);

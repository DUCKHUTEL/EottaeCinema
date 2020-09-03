// @flow
import React from 'react';
import styles from "./BookPotalComponent.module.scss"
import FirstSeat from '../TheaterSeatComponents/FirstSeat/FirstSeat';
import SixthSeat from '../TheaterSeatComponents/SixSeat/SixthSeat';
import SecondSeat from '../TheaterSeatComponents/SecondSeat/SecondSeat';
export function BookPotalComponent({bookingData}) {
  return(
    <div>
      <h3 className={styles.a11yHidden}></h3>
      <div>{bookingData.movieTime.slice(0,5)}~{bookingData.movieEndTime.slice(0,5)}({bookingData.stage}관)</div>
      <div>
        <div>
          잔여좌석<span>{bookingData.allSeat-bookingData.bookedSeatCnt}</span>/{bookingData.allSeat*2}
        </div>
        {bookingData.stage === "1" ? <FirstSeat bookedSeat={bookingData.bookedSeat} type="miniMap"/> : bookingData.stage === "6"? <SixthSeat bookedSeat={bookingData.bookedSeat} type="miniMap"/> : <SecondSeat bookedSeat={bookingData.bookedSeat} type="miniMap"/>}
        <div>
          <span className={styles[`ageCut${bookingData.ageCut}`]}>{bookingData.ageCut === 0 ? "전체":bookingData.ageCut}</span>
          본 영화는 <span>{bookingData.ageCut===0?"전체":`${bookingData.ageCut}세 이상 `}관람가</span> 영화입니다.
        </div>
        {bookingData.ageCut===0?"":
          <p>만{bookingData.ageCut}세 미만의 고객님(영, 유아 포함)은 반드시 부모님 또는 성인 보호자의 동반하에 관람이 가능합니다. 연령확인 불가 시 입장이 제한될 수 있습니다.</p>
        }
        <div className={styles.btnBox}>
          <button>취소</button>
          <button>인원/좌석 선택</button>
        </div>
      </div>
      <button>X</button>
    </div>
  );
};
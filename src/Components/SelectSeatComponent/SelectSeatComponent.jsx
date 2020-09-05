import React, { useState, useCallback } from 'react';
import styles from './SelectSeatComponent.module.scss';
import SixthSeat from '../TheaterSeatComponents/SixSeat/SixthSeat';
import SecondSeat from '../TheaterSeatComponents/SecondSeat/SecondSeat';
import FirstSeat from '../TheaterSeatComponents/FirstSeat/FirstSeat';
import moment from 'moment';

function SelectSeatComponent({ setStep, movies, bookingData }) {
  moment.locale('ko');
  const [adult, setAdultCnt] = useState(0);
  const [junior, setJunior] = useState(0);
  const [senior, setSenior] = useState(0);
  const [handicaped, setHandicapedCnt] = useState(0);
  const [peopleCnt, setPeopleCnt] = useState(0);
  const [clickedSeat, clickSeat] = useState([]);
  const setBookPeopleCnt = useCallback((e) => {
    if (!e.target.matches('button')) return;
    if (e.target.parentNode.id === 'adult') {
      if (e.target.id === 'plus') {
        setAdultCnt((state) => state + 1);
        setPeopleCnt((state) => state + 1);
      } else if (adult === 0) {
        return;
      } else {
        setAdultCnt((state) => state - 1);
        setPeopleCnt((state) => state - 1);
      }
    }
    if (e.target.parentNode.id === 'junior') {
      if (e.target.id === 'plus') {
        setJunior((state) => state + 1);
        setPeopleCnt((state) => state + 1);
      } else if (junior === 0) {
        return;
      } else {
        setJunior((state) => state - 1);
        setPeopleCnt((state) => state - 1);
      }
    }
    if (e.target.parentNode.id === 'senior') {
      if (e.target.id === 'plus') {
        setSenior((state) => state + 1);
        setPeopleCnt((state) => state + 1);
      } else if (senior === 0) {
        return;
      } else {
        setSenior((state) => state - 1);
        setPeopleCnt((state) => state - 1);
      }
    }
    if (e.target.parentNode.id === 'handicaped') {
      if (e.target.id === 'plus') {
        setHandicapedCnt((state) => state + 1);
        setPeopleCnt((state) => state + 1);
      } else if (handicaped === 0) {
        return;
      } else {
        setHandicapedCnt((state) => state - 1);
        setPeopleCnt((state) => state - 1);
      }
    }
  });
  return bookingData === undefined ? (
    <></>
  ) : (
    <div className={styles.selectSeat}>
      <h3>인원/좌석 선택</h3>
      <div className={styles.bookData}>
        <div className={styles.bookingMovieData}>
          <div className={styles.moviePoster}>
            <img
              src={
                movies.filter(
                  (movie) => movie.movieTitle === bookingData.movieTitle,
                )[0].moviePoster
              }
              alt={''}
            />
          </div>
          <div className={styles.movieInfo}>
            <div className={styles.ageTitle}>
              <span className={styles[`ageCut${bookingData.ageCut}`]}>
                {bookingData.ageCut === 0 ? '전체' : bookingData.ageCut}
              </span>
              <span className={styles.title}>{bookingData.movieTitle}</span>
            </div>
            <div className={styles.time}>
              <span>
                {bookingData.moviedate.slice(2, 10).split('-').join('.')}(
                {moment(bookingData.moviedate.slice(0, 10))
                  .format('dddd')
                  .slice(0, 1)}
                )
              </span>
              <span className={styles.startTime}>
                {bookingData.movieTime.slice(0, 5)} ~{' '}
                {bookingData.movieEndTime.slice(0, 5)}
              </span>
            </div>
            <div className={styles.stage}>
              <span>{bookingData.stage}관(6층 입장) · 일반</span>
            </div>
          </div>
        </div>
        <ul className={styles.btnBox} onClick={setBookPeopleCnt}>
          <li>
            <span>성인</span>
            <div id="adult">
              <button id="minus" className={styles.minus}></button>
              <span>{adult}</span>
              <button id="plus" className={styles.plus}></button>
            </div>
          </li>
          <li>
            <span>청소년</span>
            <div id="junior">
              <button id="minus" className={styles.minus}></button>
              <span>{junior}</span>
              <button id="plus" className={styles.plus}></button>
            </div>
          </li>
          <li>
            <span>시니어</span>
            <div id="senior">
              <button id="minus" className={styles.minus}></button>
              <span>{senior}</span>
              <button id="plus" className={styles.plus}></button>
            </div>
          </li>
          <li>
            <span>장애인</span>
            <div id="handicaped">
              <button id="minus" className={styles.minus}></button>
              <span>{handicaped}</span>
              <button id="plus" className={styles.plus}></button>
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.selectSection}>
        <p>- 좌석 선택 후 결제하기 버튼을 클릭하세요</p>
        <div className={styles.screen}>SCREEN</div>
        {bookingData.stage === '1' ? (
          <FirstSeat
            bookedSeat={bookingData.bookedSeat}
            clickedSeat={clickedSeat}
            clickSeat={clickSeat}
            peopleCnt={peopleCnt}
            type="select"
          />
        ) : bookingData.stage === '6' ? (
          <SixthSeat
            bookedSeat={bookingData.bookedSeat}
            clickedSeat={clickedSeat}
            clickSeat={clickSeat}
            peopleCnt={peopleCnt}
            type="select"
          />
        ) : (
          <SecondSeat
            bookedSeat={bookingData.bookedSeat}
            clickedSeat={clickedSeat}
            clickSeat={clickSeat}
            peopleCnt={peopleCnt}
            type="select"
          />
        )}
      </div>
      <div className={styles.checkOut}>
        <div className={styles.costBox}>
          총 합계{' '}
          <span className={styles.cost}>{` ${
            clickedSeat.length * 12000
          }`}</span>
          원
        </div>
        <div>
          <button className={styles.justBuy}>결제하기</button>
          <button className={styles.lpayBuy}>
            <span className={styles.lpay}></span>결제하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default React.memo(SelectSeatComponent);

import React, { useState, useCallback } from 'react';
import styles from './SelectSeatComponent.module.scss';
import SixthSeat from '../TheaterSeatComponents/SixSeat/SixthSeat';
import SecondSeat from '../TheaterSeatComponents/SecondSeat/SecondSeat';
import FirstSeat from '../TheaterSeatComponents/FirstSeat/FirstSeat';
import moment from 'moment';
import { useEffect } from 'react';

function SelectSeatComponent({
  setStep,
  steps,
  movies,
  bookingData,
  selectingSeat,
}) {
  moment.locale('ko');

  const [ppc, setppc] = useState({
    adult: 0,
    junior: 0,
    senior: 0,
    handicaped: 0,
    all: 0,
  });

  const [clickedSeat, clickSeat] = useState([]);

  useEffect(() => {
    setppc(() => ({
      adult: 0,
      junior: 0,
      senior: 0,
      handicaped: 0,
      all: 0,
    }));
  }, [steps]);

  const sBPC = useCallback((e) => {
    const clickAge = e.target.parentNode.id;
    if (e.target.id === 'plus') {
      setppc((state) => ({
        ...state,
        [clickAge]: state[clickAge] + 1,
        all: state.all + 1,
      }));
    } else if (ppc[clickAge] === 0) {
      return;
    } else {
      setppc((state) => ({
        ...state,
        [clickAge]: state[clickAge] - 1,
        all: state.all - 1,
      }));
    }
  });
  const setBookPeopleCnt = useCallback((e) => {
    if (!e.target.matches('button')) return;
    sBPC(e);
  });

  const pay = useCallback(
    (e) => {
      if (ppc.all === 0 || ppc.all !== clickedSeat.length) return;
      selectingSeat(clickedSeat, ppc);
      setStep(3);
    },
    [ppc, clickedSeat],
  );

  return (
    bookingData && (
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
                <span>{ppc.adult}</span>
                <button id="plus" className={styles.plus}></button>
              </div>
            </li>
            <li>
              <span>청소년</span>
              <div id="junior">
                <button id="minus" className={styles.minus}></button>
                <span>{ppc.junior}</span>
                <button id="plus" className={styles.plus}></button>
              </div>
            </li>
            <li>
              <span>시니어</span>
              <div id="senior">
                <button id="minus" className={styles.minus}></button>
                <span>{ppc.senior}</span>
                <button id="plus" className={styles.plus}></button>
              </div>
            </li>
            <li>
              <span>장애인</span>
              <div id="handicaped">
                <button id="minus" className={styles.minus}></button>
                <span>{ppc.handicaped}</span>
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
              peopleCnt={ppc.all}
              type="select"
            />
          ) : bookingData.stage === '6' ? (
            <SixthSeat
              bookedSeat={bookingData.bookedSeat}
              clickedSeat={clickedSeat}
              clickSeat={clickSeat}
              peopleCnt={ppc.all}
              type="select"
            />
          ) : (
            <SecondSeat
              bookedSeat={bookingData.bookedSeat}
              clickedSeat={clickedSeat}
              clickSeat={clickSeat}
              peopleCnt={ppc.all}
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
            <button className={styles.justBuy} onClick={pay}>
              결제하기
            </button>
            <button className={styles.lpayBuy} onClick={pay}>
              <span className={styles.lpay}></span>결제하기
            </button>
          </div>
        </div>
      </div>
    )
  );
}

export default React.memo(SelectSeatComponent);

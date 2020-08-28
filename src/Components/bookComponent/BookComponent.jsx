// @flow
import React from 'react';
import styles from './BookComponent.module.scss';
import { AllTheaterPointContainer } from '../../Containers/AllTheaterPointContainer';
import { BookMoviesContainer } from '../../Containers/BookMoviesContainer';
import { BookTimeMoviesContainer } from '../../Containers/BookTimeMoviesContainer';

function BookComponent({point}) {
  return (
    <main className={styles.main}>
      <div className={styles.BookContents}>
        <h2 className={styles.a11yHidden}>예매페이지</h2>
        <ul className={styles.steps}>
          <li className={styles.active}>
            <a href="#">01<br/>상영시간</a>
          </li>
          <li className={styles.disable}>
            <a href="#">02<br/>인원좌석</a>
          </li>
          <li className={styles.disable}>
            <a href="#">03<br/>결제</a>
          </li>
          <li className={styles.disable}>
            <a href="#">04<br/>결제완료</a>
          </li>
        </ul>
        <section>
          <div className={styles.theater}>
            <h3>{point==="없음"?"영화관":point}</h3>
            <div className={styles.divide}>
              <div className={styles.clicked}>
                <button className={styles.all}>전체</button>
                <AllTheaterPointContainer/>
              </div>
              <div className={styles.disable}>
                <button className={styles.special}>스페셜관</button>
                <AllTheaterPointContainer/>
              </div>
            </div>
          </div> 
          <BookTimeMoviesContainer/>
        </section>
      </div>
    </main>
  );
};
export default React.memo(BookComponent) 
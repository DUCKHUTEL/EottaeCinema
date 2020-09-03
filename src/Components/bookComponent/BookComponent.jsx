// @flow
import React from 'react';
import styles from './BookComponent.module.scss';
import { AllTheaterPointContainer } from '../../Containers/AllTheaterPointContainer';
import  BookMoviesContainer  from '../../Containers/BookMoviesContainer';
import { BookTimeMoviesContainer } from '../../Containers/BookTimeMoviesContainer';
import { useState } from 'react';
import { useCallback } from 'react';
import { LoadingContainer } from '../../Containers/LoadingContainer';

function BookComponent({point}) {

  const [select,setSelect] = useState('all');

  const clickTheater = useCallback( e=>{
    if(!e.target.matches("button"))return
    setSelect(e.target.id);
  },[setSelect]);

  const [steps,setStep] = useState("1");

  const changeStep = useCallback((e)=>{
    setStep(e.target.id)
  },[setStep])

  return (
    <main className={styles.main}>
      <div className={styles.BookContents}>
        <h2 className={styles.a11yHidden}>예매페이지</h2>
        <ul className={styles.steps} onClick={changeStep}>
          <li className={steps==="1"? styles.active : styles.disable}>
            <a href="#" id="1">01<br/>상영시간</a>
          </li>
          <li className={steps==="2"? styles.active : styles.disable}>
            <a href="#" id="2">02<br/>인원좌석</a>
          </li>
          <li className={steps==="3"? styles.active : styles.disable}>
            <a href="#" id="3">03<br/>결제</a>
          </li>
          <li className={steps==="4"? styles.active : styles.disable}>
            <a href="#" id="4">04<br/>결제완료</a>
          </li>
        </ul>
        <section className={steps==="1"? styles.nowStep : styles.notNow}>
          <div className={styles.theater}>
            <h3>{point==="없음"?"영화관":point}</h3>
            <div className={styles.divide} onClick={clickTheater}>
              <div className={ select === "all" ? styles.clicked : styles.disable}>
                <button className={styles.all} id="all">전체</button>
                <AllTheaterPointContainer/>
              </div>
              <div className={ select === "special" ? styles.clicked : styles.disable}>
                <button className={styles.special} id="special">스페셜관</button>
                <AllTheaterPointContainer/>
              </div>
            </div>
          </div> 
          <BookMoviesContainer setStep={setStep}/>
          <BookTimeMoviesContainer setStep={setStep}/>
        </section>
      </div>
      <LoadingContainer/>
    </main>
  );
};
export default React.memo(BookComponent) 
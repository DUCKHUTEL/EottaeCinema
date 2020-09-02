// @flow

import  React, { useRef, useState } from 'react';
import styles from "../bookTimeMoviesComponent/BookTimeMovuesComponent.module.scss"
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import './owl_carousel.css';  
import 'moment/locale/ko'
import moment from 'moment';  
import { useEffect } from 'react';

function OwlCarouselComponent({selectDate}) {
  const showDate = useRef([
    "2020-08-24","2020-08-25","2020-08-26","2020-08-27","2020-08-28","2020-08-29",
    "2020-08-30","2020-08-31","2020-09-01","2020-09-02","2020-09-03","2020-09-04",
    "2020-09-05","2020-09-06"
  ]);
  const firstCheck = useRef(null);
  useEffect(()=>{
    firstCheck.current.checked= true
  },[])
  return (
        <OwlCarousel 
            items={8}
            dots={false}
            nav={true}
            className={styles["owl-carousel"]}
            slideBy="7"
          >
            {showDate.current.map((date,idx)=>(
            <div className="item" key={idx}>
              {idx===0 ?  <span className="month">{date.slice(5,7)}</span> : date.slice(8,10)==="01"? <span className="month">{date.slice(5,7)}</span> : <></>}
              <label className={`dateLabel ${idx >=7 ? "disable":""}`}>
                <input 
                  className={styles.a11yHidden} 
                  type="radio" 
                  name={`date`} 
                  data-showdate={date} 
                  ref={idx===0?firstCheck:null}
                  onChange={(e)=>{
                    selectDate(e.target.dataset.showdate)
                  }}
                />
                <span className="showDate">{date.slice(8,10)}</span>
                <span className="showWeek">{date==="2020-08-24"? "오늘": moment(date).format("dddd").slice(0,1)}</span>
              </label>
            </div>))}
          </OwlCarousel>
  );
};

export default React.memo(OwlCarouselComponent)
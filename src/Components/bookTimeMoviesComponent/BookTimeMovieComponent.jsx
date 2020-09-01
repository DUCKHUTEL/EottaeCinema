import React, { useState, useRef, useCallback } from 'react';
import styles from "./BookTimeMovuesComponent.module.scss"
import 'moment/locale/ko'
import moment from 'moment';  
import  OwlCarouselComponent  from '../OwlCarouselComponent/OwlCarouselComponent';


function BookTimeMovieComponent({selectDate, movieDataForBookBtn, selectedDate}) {
  moment.locale('ko');
  const [filtertBy,setfilter] = useState("전체");
  const filterItems = useRef(["전체","스페셜관","Atoms","13시 이후","19시 이후","심야"]);

  const doSortMovie = useCallback(e=>{
    setfilter(e.target.id);
  },[])

  return (
    <div className={styles.BookTimeMovie}>
      <h3>{selectedDate==="2020-08-24" ? `${selectedDate} (오늘)`: `${selectedDate} (${moment(selectedDate).format("dddd")})`}</h3>
      <div className={styles.timeMovieContents}>
        <div className={styles.dateSelector}>
          <OwlCarouselComponent selectDate={selectDate}/>
        </div>
        <ul className={styles.filtertBy} onClick={doSortMovie}>
          {filterItems.current.map(item => (
          <li key={item} id={item} className={item === filtertBy ? ([styles.active, styles.filterItem].join(' ')):styles.filterItem}>
            {item}
          </li>
          ))}
        </ul>
        <article>
          {movieDataForBookBtn.map((movies,i) => {
                const movie = movies[Object.keys(movies)[0]].filter(movies => {
                  if(filtertBy === "전체") return true
                  if(filtertBy === "13시 이후") return movies.movieTime.split(":").join("") >= 133000
                  if(filtertBy === "19시 이후") return movies.movieTime.split(":").join("") >= 190000
                  if(filtertBy === "심야") return movies.movieTime.split(":").join("") >= 210000
                  if(filtertBy === "스페셜관" ||filtertBy === "Atoms" ) return false
                });
                if (movie.length === 0) return;
                return (
                <div className={styles.BookTitleArea} key={i}>
                  <div>
                    <span className={styles[`ageCut${movie[0].ageCut}`]}>{movie[0].ageCut === 0 ? "전체":movie[0].ageCut}</span>{movie[0].movieTitle}
                  </div>
                  <p>2D</p>
                  <ul className={styles.BookBtnContainer}>
                    {movie.map((willBtnData,idx) =>(
                      <li key={idx}>
                          <a role="button" className={styles.bookBtn}>
                            <dl>
                              <dt className={styles.a11yHidden}>상영시간</dt>
                              <dd className={styles.showTime}>
                                <span>{willBtnData.movieTime.slice(0,5)}</span>
                                <div className={styles.toolTipText}>{`종료 ${willBtnData.movieEndTime.slice(0,5)}`}</div>
                              </dd>
                              <dt className={styles.a11yHidden}>잔여석</dt>
                              <dd className={styles.seatData}><span>{willBtnData.bookedSeatCnt}</span>/{willBtnData.allSeat}</dd>
                              <dt className={styles.a11yHidden}>상영관</dt>
                              <dd className={styles.stageData}>{willBtnData.stage}관</dd>
                            </dl>
                          </a>
                      </li>
                    ))}
                  </ul>
                </div>)
                })
              }
        </article>
      </div>
    </div>
  );
};
export default React.memo(BookTimeMovieComponent)
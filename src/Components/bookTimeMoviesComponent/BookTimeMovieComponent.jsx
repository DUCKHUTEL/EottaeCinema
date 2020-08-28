import React, { useState, useRef, useCallback } from 'react';
import moment from "moment";
import deepmerge from "deepmerge";
import styles from "./BookTimeMovuesComponent.module.scss"
function BookTimeMovieComponent({selectDate, movieDataForBookBtn,resMovies, selectedDate}) {
  const [filtertBy,setfilter] = useState("전체");
  const filterItems = useRef(["전체","스페셜관","Atoms","13시 이후","19시 이후","심야"]);
  const doSortMovie = useCallback(e=>{
    setfilter(e.target.id);
  },[])
  console.log(movieDataForBookBtn)
  // .filter(movies => {
  //   if(filtertBy === "전체") return true
  //   if(filtertBy === "13시 이후") return movies.movieTime.split(":").join("") >= 133000
  //   if(filtertBy === "19시 이후") return movies.movieTime.split(":").join("") >= 190000
  //   if(filtertBy === "심야") return movies.movieTime.split(":").join("") >= 210000
  //   if(filtertBy === "스페셜관" ||filtertBy === "Atoms" ) return false
  // })
  return (
    <div className={styles.BookTimeMovie}>
      <h3>{selectedDate}</h3>
      <div className={styles.timeMovieContents}>
        <div></div>
        <ul className={styles.filtertBy} onClick={doSortMovie}>
          {filterItems.current.map(item => (
          <li key={item} id={item} className={item === filtertBy ? ([styles.active, styles.filterItem].join(' ')):styles.filterItem}>
            {item}
          </li>
          ))}
        </ul>
        <article>
          {movieDataForBookBtn.map(movies => {
                const movie = movies[Object.keys(movies)[0]].filter(movies => {
                  if(filtertBy === "전체") return true
                  if(filtertBy === "13시 이후") return movies.movieTime.split(":").join("") >= 133000
                  if(filtertBy === "19시 이후") return movies.movieTime.split(":").join("") >= 190000
                  if(filtertBy === "심야") return movies.movieTime.split(":").join("") >= 210000
                  if(filtertBy === "스페셜관" ||filtertBy === "Atoms" ) return false
                });
                return (movie.map(willBtnData =>(
                  <div>{willBtnData.movieTime.slice(0,5)}</div>
                )))
              }
          )}
        </article>
      </div>
    </div>
  );
};
export default BookTimeMovieComponent
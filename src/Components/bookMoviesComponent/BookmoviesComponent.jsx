import React, { useState, useCallback } from 'react';
import styles from "./BookMoviesComponent.module.scss";
function BookMoviesComponent({selectTitle,selectedTitle,moviesData}) {
  const [sort,setSort] = useState("movieBookPer");
  const [show,setShow] = useState("hamberger");
  const changeSort = useCallback(e=> {
    setSort(e.target.value)
  },[setSort]);
  const selectingMoive = useCallback( e=> {
    if(e.target.matches("span")){
      selectTitle(e.target.parentNode.dataset.title)
      return
    }
    selectTitle(e.target.dataset.title)
  },[selectTitle])
  const selectingMoivePoster = useCallback( e=> {
    selectTitle(e.currentTarget.dataset.title)
  },[selectTitle])
  return (
    <div className={styles.bookMovies}>
      <h3>{selectedTitle==="없음"?"영화 선택":selectedTitle}</h3>
      <div className={styles.bookMovieContents}>
        <div className={styles.bookMovieHeader}>
          <select name="movieSort" className={styles.sortBox} onChange={changeSort}>
            <option value="movieBookPer">예매순</option>
            <option value="moviePoing">평점순</option>
            <option value="movieBookPer">관객순</option>
          </select>
          <div className={styles.btnBox} >
            <button id="hambergerBtn" className={show === "hamberger" ? ([styles.active, styles.hambergerBtn].join(' ')):styles.hambergerBtn} onClick={()=>{setShow("hamberger")}}></button>
            <button id="posterBtn" className={show === "poster" ? ([styles.active, styles.posterBtn].join(' ')):styles.posterBtn} onClick={()=>{setShow("poster")}}></button>
          </div>
        </div>
        <ul className={show === "hamberger" ? ([styles.active, styles.hambergerLi].join(' ')):styles.hambergerLi} onClick={selectingMoive}>
          {moviesData.sort((a, b) => (a[sort] > b[sort] ? -1 : (a[sort] < b[sort] ? 1 : 0))).map((movie,idx) =>(
            <li key={idx} className={selectedTitle===movie.movieTitle?([styles.active, styles.movieLi].join(' ')) : styles.movieLi}>
              <a data-title={movie.movieTitle}>
                <span className={styles[`ageCut${movie.ageCut}`]}>{movie.ageCut === 0 ? "전체":movie.ageCut}</span>
                <span className={styles.movieTitle}>{movie.movieTitle}</span>
              </a>
            </li>
          ))}
        </ul>
        <ul className={show === "poster" ? ([styles.active, styles.posterLi].join(' ')):styles.posterLi}>
          {moviesData.sort((a, b) => (a[sort] > b[sort] ? -1 : (a[sort] < b[sort] ? 1 : 0))).map((movie,idx)=>(
            <li key={movie.movieId} className={selectedTitle===movie.movieTitle?([styles.active, styles.movieLi].join(' ')) : styles.movieLi}>
              <a data-title={movie.movieTitle}  onClick={selectingMoivePoster}>
                <img src={movie.moviePoster} alt={movie.movieTitle+"포스터"}/>
                <p>{idx+1}</p>
                <div className={styles.info}>
                  <div className={styles.infoTitle}>
                    <span className={styles[`ageCut${movie.ageCut}`]}>{movie.ageCut === 0 ? "전체":movie.ageCut}</span>
                    <span className={styles.movieTitle}>{movie.movieTitle}</span>
                  </div>
                  <div className={styles.calc}>
                    <span className={styles.movieBookPer}>예매율 {movie.movieBookPer}% <span>|</span> </span>
                    <span className={styles.moviePoing}><span>★</span>{movie.moviePoing}</span>
                  </div>
                  <span className={styles.movieOpenDate}>개봉일 {movie.movieOpenDate.slice(0,10).split("-").join(".")}</span>
                </div>
              </a>
            </li>
          ))
          }
        </ul>
      </div>
    </div>
  );
};
export default React.memo(BookMoviesComponent) 
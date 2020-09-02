import React from 'react';
import styles from "./BookMoviesComponent.module.scss";
function BookMoviesComponent({selectTitle,selectedTitle}) {
  return (
    <div className={styles.bookMovies}>
      <h3>{selectedTitle==="없음"?"영화 선택":selectedTitle}</h3>
      <div>
        <select name="" id="">
          <option value=""></option>
        </select>
      </div>
      <div></div>
    </div>
  );
};
export default BookMoviesComponent
import React from 'react';
import styles from './DetailReviewEdit.module.scss';

export default function DetailReviewEdit({
  movie,
  count,
  id,
  starPoint,
  content,
  setState,
  editReview,
}) {
  const [character, setCharacter] = React.useState(content.length);
  const [editStarPoint, editStarSetPoint] = React.useState(starPoint);
  const contentRef = React.createRef(null);

  const getByte = React.useCallback((str) => {
    return str
      .split('')
      .map((s) => s.charCodeAt(0))
      .reduce((prev, c) => prev + (c === 10 ? 2 : c >> 7 ? 2 : 1), 0);
  }, []);

  const onChange = React.useCallback(
    (e) => {
      setCharacter(getByte(e.target.value));
    },
    [getByte],
  );

  const starClick = React.useCallback((score) => editStarSetPoint(score), [
    editStarSetPoint,
  ]);

  const editClick = React.useCallback(async () => {
    const content = contentRef.current.value;
    editReview(movie, count, id, editStarPoint, content);
    setState('none');
  }, [editReview, movie, count, id, editStarPoint, contentRef, setState]);

  const closeClick = React.useCallback(() => {
    editStarSetPoint(starPoint);
    setState('none');
  }, [setState, starPoint]);

  return (
    <div className={styles['edit-modal-wrapper']}>
      <div className={styles['edit-modal-inner']}>
        <div className={styles['review-box']}>
          <div className={styles['star-score-box']}>
            <div className={styles['selected-score']}>
              <em>{editStarPoint}</em> 점
            </div>
            <div className={styles['star-select-box']}>
              <div className={styles['star-rate']}>
                <button
                  className={`${styles.star} ${
                    editStarPoint > 0 ? styles['star-on'] : ''
                  }`}
                  onClick={() => starClick(1)}
                />
                <button
                  className={`${styles.star} ${
                    editStarPoint > 1 ? styles['star-on'] : ''
                  }`}
                  onClick={() => starClick(2)}
                />
                <button
                  className={`${styles.star} ${
                    editStarPoint > 2 ? styles['star-on'] : ''
                  }`}
                  onClick={() => starClick(3)}
                />
                <button
                  className={`${styles.star} ${
                    editStarPoint > 3 ? styles['star-on'] : ''
                  }`}
                  onClick={() => starClick(4)}
                />
                <button
                  className={`${styles.star} ${
                    editStarPoint > 4 ? styles['star-on'] : ''
                  }`}
                  onClick={() => starClick(5)}
                />
                <button
                  className={`${styles.star} ${
                    editStarPoint > 5 ? styles['star-on'] : ''
                  }`}
                  onClick={() => starClick(6)}
                />
                <button
                  className={`${styles.star} ${
                    editStarPoint > 6 ? styles['star-on'] : ''
                  }`}
                  onClick={() => starClick(7)}
                />
                <button
                  className={`${styles.star} ${
                    editStarPoint > 7 ? styles['star-on'] : ''
                  }`}
                  onClick={() => starClick(8)}
                />
                <button
                  className={`${styles.star} ${
                    editStarPoint > 8 ? styles['star-on'] : ''
                  }`}
                  onClick={() => starClick(9)}
                />
                <button
                  className={`${styles.star} ${
                    editStarPoint > 9 ? styles['star-on'] : ''
                  }`}
                  onClick={() => starClick(10)}
                />
              </div>
            </div>
          </div>
          <div className={styles['review-write-box']}>
            <textarea
              placeholder="평점 및 영화 관람평을 작성해주세요. 한글 110자 / 영문 220자 작성 가능합니다."
              onChange={onChange}
              ref={contentRef}
            >
              {content}
            </textarea>
            <span className={styles['byte-info']}>
              <span className={styles.byte}>{character}</span>/<em>220</em>
            </span>
          </div>
          <button className={styles['submit-button']} onClick={editClick}>
            수정
          </button>
          <button className={styles['close-button']} onClick={closeClick}>
            취소
          </button>
        </div>
      </div>
    </div>
  );
}

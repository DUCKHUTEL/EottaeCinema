import React from 'react';
import styles from './DetailReviewInput.module.scss';
import NoTicktingModal from './NoTicketingModal';
import NoTokenModal from './NoTokenModal';
import { useSelector } from 'react-redux';

function DetailReviewInput({ addReview, setOrder }) {
  const [character, setCharacter] = React.useState(0);
  const [starPoint, setStarPoint] = React.useState(10);
  const [tokenState, setTokenState] = React.useState('none');
  const noTicketing = useSelector((state) => state.board.error);
  const [ticketingState, setTicketingState] = React.useState(noTicketing);
  console.log(ticketingState, noTicketing);

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

  const starClick = React.useCallback((score) => setStarPoint(score), [
    setStarPoint,
  ]);

  const click = React.useCallback(() => {
    if (localStorage.user === undefined) {
      setTokenState('no token');
      return;
    }

    const content = contentRef.current.value;
    addReview(starPoint, content);
    setOrder('LATEST');
    contentRef.current.value = '';
  }, [addReview, contentRef, starPoint, setOrder]);

  return (
    <div className={styles['review-box']}>
      <div className={styles['star-score-box']}>
        <div className={styles['selected-score']}>
          <em>{starPoint || 10}</em> 점
        </div>
        <div className={styles['star-select-box']}>
          <div className={styles['star-rate']}>
            <button
              className={`${styles.star} ${
                starPoint > 0 ? styles['star-on'] : ''
              }`}
              onClick={() => starClick(1)}
            />
            <button
              className={`${styles.star} ${
                starPoint > 1 ? styles['star-on'] : ''
              }`}
              onClick={() => starClick(2)}
            />
            <button
              className={`${styles.star} ${
                starPoint > 2 ? styles['star-on'] : ''
              }`}
              onClick={() => starClick(3)}
            />
            <button
              className={`${styles.star} ${
                starPoint > 3 ? styles['star-on'] : ''
              }`}
              onClick={() => starClick(4)}
            />
            <button
              className={`${styles.star} ${
                starPoint > 4 ? styles['star-on'] : ''
              }`}
              onClick={() => starClick(5)}
            />
            <button
              className={`${styles.star} ${
                starPoint > 5 ? styles['star-on'] : ''
              }`}
              onClick={() => starClick(6)}
            />
            <button
              className={`${styles.star} ${
                starPoint > 6 ? styles['star-on'] : ''
              }`}
              onClick={() => starClick(7)}
            />
            <button
              className={`${styles.star} ${
                starPoint > 7 ? styles['star-on'] : ''
              }`}
              onClick={() => starClick(8)}
            />
            <button
              className={`${styles.star} ${
                starPoint > 8 ? styles['star-on'] : ''
              }`}
              onClick={() => starClick(9)}
            />
            <button
              className={`${styles.star} ${
                starPoint > 9 ? styles['star-on'] : ''
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
        />
        <span className={styles['byte-info']}>
          <span className={styles.byte}>{character}</span>/<em>220</em>
        </span>
      </div>
      <button className={styles['submit-button']} onClick={click}>
        관람평 작성
      </button>
      {tokenState === 'no token' && (
        <NoTokenModal setTokenState={setTokenState} />
      )}
      {ticketingState === null || (
        <NoTicktingModal setTicketingState={setTicketingState} />
      )}
    </div>
  );
}

export default React.memo(DetailReviewInput);

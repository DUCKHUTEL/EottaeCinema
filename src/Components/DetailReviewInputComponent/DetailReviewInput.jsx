import React from 'react';
import { useState, useEffect, useCallback, createRef } from 'react';
import styles from './DetailReviewInput.module.scss';
import { useDispatch } from 'react-redux';
import NoTicktingModal from './NoTicketingModal';
import NoTokenModal from './NoTokenModal';
import { setSelectTitleAction } from '../../Redux/modules/select';

function DetailReviewInput({
  selectedMovie,
  count,
  addReview,
  setOrder,
  noTicketing,
  login,
  logModal,
}) {
  const [character, setCharacter] = useState(0);
  const [starPoint, setStarPoint] = useState(10);
  const [tokenState, setTokenState] = useState('none');
  const [ticketingState, setTicketingState] = useState(null);

  const contentRef = createRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const ticket = noTicketing;
    if (!ticket) {
      setTicketingState(null);
    }

    if (ticket === 'no ticketing') {
      setTicketingState('no ticketing');
    }
  }, [noTicketing, ticketingState]);

  const selectTitle = useCallback(
    (selectedTitle) => {
      dispatch(setSelectTitleAction(selectedTitle));
    },
    [dispatch],
  );

  const getByte = useCallback((str) => {
    return str
      .split('')
      .map((s) => s.charCodeAt(0))
      .reduce((prev, c) => prev + (c === 10 ? 2 : c >> 7 ? 2 : 1), 0);
  }, []);

  const onChange = useCallback(
    (e) => {
      setCharacter(getByte(e.target.value));
    },
    [getByte],
  );

  const starClick = useCallback((score) => setStarPoint(score), [setStarPoint]);

  const click = useCallback(() => {
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
        <NoTokenModal setTokenState={setTokenState} login={login} />
      )}
      {ticketingState === null || (
        <NoTicktingModal
          selectedMovie={selectedMovie}
          count={count}
          setTicketingState={setTicketingState}
          selectTitle={selectTitle}
        />
      )}
    </div>
  );
}

export default React.memo(DetailReviewInput);

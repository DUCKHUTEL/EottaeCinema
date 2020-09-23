import React from 'react';
import { useState, useCallback } from 'react';
import styles from '../DetailReviewsList.module.scss';
import { useDispatch } from 'react-redux';
import { clickLikeReviewSagaActionCreator } from '../../../Redux/modules/board';

function ReviewLikeButton({
  movie,
  count,
  id,
  order,
  favorit,
  like,
  nickName,
  setTokenState,
  login,
}) {
  const [status, setStatus] = useState(false);
  const dispatch = useDispatch();

  const likeReview = useCallback(
    (id) => {
      dispatch(clickLikeReviewSagaActionCreator(movie, count, id, order));
    },
    [dispatch, movie, count, order],
  );

  const click = () => {
    if (localStorage.user === undefined) {
      setTokenState('no token');
      return;
    }

    setStatus(!status);
    likeReview(id);
  };

  return (
    <button className={styles.like} onClick={click}>
      <em
        className={`${styles.good} ${
          like === null || like.split(';').find((v) => v === nickName)
            ? styles['good-on']
            : ''
        }`}
      >
        <span className="a11yHidden">좋아요</span>
      </em>
      <span>{favorit}</span>
    </button>
  );
}

export default React.memo(ReviewLikeButton);

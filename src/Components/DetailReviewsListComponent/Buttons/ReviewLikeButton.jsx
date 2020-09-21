import React from 'react';
import styles from '../DetailReviewsList.module.scss';
import { clickLikeReviewSagaActionCreator } from '../../../Redux/modules/board';
import { useDispatch, useSelector } from 'react-redux';

export default function ReviewLikeButton({ movie, count, id, favorit, like }) {
  const nickName = JSON.parse(localStorage.user).nickName;
  const [status, setStatus] = React.useState(false);
  const dispatch = useDispatch();

  const likeReview = React.useCallback(
    (id) => {
      dispatch(clickLikeReviewSagaActionCreator(movie, count, id));
    },
    [dispatch, movie, count],
  );

  const click = () => {
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

import React from 'react';
import styles from '../DetailReviewsList.module.scss';
import { deleteReviewSagaActionCreator } from '../../../Redux/modules/board';
import { useDispatch } from 'react-redux';

export default function ReviewDeleteButton({ movie, count, id }) {
  const dispatch = useDispatch();

  const deleteReview = React.useCallback(
    (movie, count, id) => {
      dispatch(deleteReviewSagaActionCreator(movie, count, id));
    },
    [dispatch],
  );

  const click = () => {
    deleteReview(movie, count, id);
  };

  return (
    <button className={styles.edit} onClick={click}>
      삭제
    </button>
  );
}

import React from 'react';
import { useCallback } from 'react';
import styles from '../DetailReviewsList.module.scss';
import { useDispatch } from 'react-redux';
import { deleteReviewSagaActionCreator } from '../../../Redux/modules/board';

export default function ReviewDeleteButton({ movie, count, id, order }) {
  const dispatch = useDispatch();

  const deleteReview = useCallback(
    (movie, count, id) => {
      dispatch(deleteReviewSagaActionCreator(movie, count, id, order));
    },
    [dispatch, order],
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

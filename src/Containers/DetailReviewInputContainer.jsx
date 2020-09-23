import React from 'react';
import { useCallback } from 'react';
import DetailReviewInput from '../Components/DetailReviewInputComponent/DetailReviewInput';
import { useSelector, useDispatch } from 'react-redux';
import { addReviewSagaActionCreator } from '../Redux/modules/board';
import { success } from '../Redux/modules/logModal';

export default function DetailReviewInputContainer({
  selectedMovie,
  count,
  setOrder,
}) {
  const noTicketing = useSelector((state) => state.board.error);
  const logModal = useSelector((state) => state.logModal.modal);

  const dispatch = useDispatch();

  const addReview = useCallback(
    (starPoint, content) => {
      dispatch(
        addReviewSagaActionCreator(selectedMovie, count, starPoint, content),
      );
    },
    [dispatch, selectedMovie, count],
  );

  const login = useCallback(() => {
    dispatch(success());
  }, [dispatch]);

  return (
    <DetailReviewInput
      selectedMovie={selectedMovie}
      count={count}
      addReview={addReview}
      setOrder={setOrder}
      noTicketing={noTicketing}
      login={login}
      logModal={logModal}
    />
  );
}

import React from 'react';
import { useDispatch } from 'react-redux';
import DetailReviewInput from '../Components/DetailReviewInputComponent/DetailReviewInput';
import { addReviewSagaActionCreator } from '../Redux/modules/board';

export default function DetailReviewInputContainer({ selectedMovie, count }) {
  const dispatch = useDispatch();

  const addReview = React.useCallback(
    (starPoint, content) => {
      dispatch(
        addReviewSagaActionCreator(selectedMovie, count, starPoint, content),
      );
    },
    [dispatch, selectedMovie, count],
  );

  return <DetailReviewInput addReview={addReview} />;
}

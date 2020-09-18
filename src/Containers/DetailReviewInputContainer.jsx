import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import DetailReviewInput from '../Components/DetailReviewInputComponent/DetailReviewInput';
import { addReviewSagaActionCreator } from '../Redux/modules/board';

export default function DetailReviewInputContainer({ selectedMovie }) {
  const dispatch = useDispatch();

  const addReview = React.useCallback(
    (starPoint, content) => {
      dispatch(addReviewSagaActionCreator(selectedMovie, starPoint, content));
      console.log(selectedMovie, starPoint, content);
    },
    [dispatch, selectedMovie],
  );

  return <DetailReviewInput addReview={addReview} />;
}

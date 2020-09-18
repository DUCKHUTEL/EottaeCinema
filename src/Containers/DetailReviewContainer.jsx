import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import DetailReview from '../Components/DetailReviewComponent/DetailReview';
import { getReviewsSagaActionCreator } from '../Redux/modules/board';

export default function DetailReviewContainer({
  infoState,
  reviewInfoClick,
  DBData,
  selectedMovie,
}) {
  const reviewsData = useSelector((state) => state.board.reviews);

  const dispatch = useDispatch();

  const getReviews = React.useCallback(() => {
    dispatch(getReviewsSagaActionCreator(selectedMovie, 1));
  }, [dispatch, selectedMovie]);

  useEffect(() => {
    getReviews();
  }, [getReviews]);

  return (
    <DetailReview
      infoState={infoState}
      reviewInfoClick={reviewInfoClick}
      DBData={DBData}
      selectedMovie={selectedMovie}
      reviewsData={reviewsData}
    />
  );
}

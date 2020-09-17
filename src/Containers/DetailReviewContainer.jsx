import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DetailReview from '../Components/DetailReviewComponent/DetailReview';
import { getReviewsSagaActionCreator } from '../Redux/modules/board';

export default function DetailReviewContainer({
  infoState,
  reviewInfoClick,
  movieTitle,
}) {
  const reviewsData = useSelector((state) => state.board.reviews);
  console.log('movieTitle', movieTitle);

  const dispatch = useDispatch();

  const getReviews = React.useCallback(() => {
    dispatch(getReviewsSagaActionCreator(movieTitle, 1));
  }, [dispatch, movieTitle]);

  useEffect(() => {
    getReviews();
  }, []);

  console.log('reviews', movieTitle, reviewsData);

  return (
    <DetailReview infoState={infoState} reviewInfoClick={reviewInfoClick} />
  );
}

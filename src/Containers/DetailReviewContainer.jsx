import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DetailReview from '../Components/DetailReviewComponent/DetailReview';
import {
  getReviewsByLikesSagaActionCreator,
  getReviewsSagaActionCreator,
} from '../Redux/modules/board';

export default function DetailReviewContainer({
  infoState,
  reviewInfoClick,
  DBData,
  selectedMovie,
}) {
  const [order, setOrder] = React.useState('LATEST');
  const [count, setCount] = React.useState(1);
  const reviewsData = useSelector((state) => state.board.reviews);
  const dispatch = useDispatch();

  const getReviews = React.useCallback(() => {
    dispatch(getReviewsSagaActionCreator(selectedMovie, count));
  }, [dispatch, selectedMovie, count]);

  const getReviewsByLikes = React.useCallback(() => {
    dispatch(getReviewsByLikesSagaActionCreator(selectedMovie, count));
  }, [dispatch, selectedMovie, count]);

  useEffect(() => {
    if (order === 'LATEST') {
      getReviews();
    }

    if (order === 'BY_LIKES') {
      getReviewsByLikes();
    }
  }, [getReviews, getReviewsByLikes, order]);

  const countIncrement = () => {
    if (count >= Math.ceil(reviewsData.total / 10)) return;
    setCount(count + 1);
  };

  const latestClick = () => {
    if (order === 'LATEST') return;

    setOrder('LATEST');
    setCount(1);
  };

  const byLikeClick = () => {
    if (order === 'BY_LIKES') return;

    setOrder('BY_LIKES');
    setCount(1);
  };

  return (
    <DetailReview
      infoState={infoState}
      reviewInfoClick={reviewInfoClick}
      DBData={DBData}
      selectedMovie={selectedMovie}
      order={order}
      count={count}
      setOrder={setOrder}
      reviewsData={reviewsData}
      countIncrement={countIncrement}
      latestClick={latestClick}
      byLikeClick={byLikeClick}
    />
  );
}

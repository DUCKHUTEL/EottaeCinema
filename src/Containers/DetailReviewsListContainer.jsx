import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DetailReviewsList from '../Components/DetailReviewsListComponent/DetailReviewsList';
import { addReviewSagaActionCreator } from '../Redux/modules/board';

export default function DetailReviewsListContainer({ reviewsData }) {
  const nickName = useSelector((state) => state.authSignIn.nickName);
  console.log('nickname', nickName);
  // const dispatch = useDispatch();

  // const addReview = React.useCallback((starPoint, content) => {
  //   dispatch(addReviewSagaActionCreator(selectedMovie, starPoint, content));
  //   console.log(selectedMovie, starPoint, content);
  // }, [dispatch, selectedMovie])

  return <DetailReviewsList reviewsData={reviewsData} nickName={nickName} />;
}

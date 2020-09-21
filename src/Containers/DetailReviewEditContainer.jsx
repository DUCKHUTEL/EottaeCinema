import React from 'react';
import { useDispatch } from 'react-redux';
import DetailReviewEdit from '../Components/DetailReviewEditComponent/DetailReviewEdit';
import { patchReviewSagaActionCreator } from '../Redux/modules/board';

export default function DetailReviewEditContainer({
  movie,
  count,
  id,
  starPoint,
  content,
  setState,
}) {
  const dispatch = useDispatch();

  const editReview = React.useCallback(
    (movie, starPoint, content) => {
      dispatch(
        patchReviewSagaActionCreator(movie, count, id, starPoint, content),
      );
    },
    [dispatch, count, id],
  );

  return (
    <DetailReviewEdit
      movie={movie}
      id={id}
      starPoint={starPoint}
      content={content}
      setState={setState}
      editReview={editReview}
    />
  );
}

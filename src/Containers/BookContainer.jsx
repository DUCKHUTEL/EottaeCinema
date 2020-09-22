import React from 'react';
import BookComponent from '../Components/bookComponent/BookComponent';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { resetSelectAction } from '../Redux/modules/select';
function BookContainer() {
  const dispatch = useDispatch();

  const resetSelect = useCallback(() => {
    dispatch(resetSelectAction());
  }, [dispatch]);

  const path = useSelector((state) => state.router.location.state);
  const passedStep = path === undefined ? 0 : path;
  const step = path === undefined ? 0 : path.step ? path.step : 0;

  if (passedStep === 0) {
    resetSelect();
  }
  return <BookComponent passedStep={step} />;
}
export default React.memo(BookContainer);

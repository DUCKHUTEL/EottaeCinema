import React from 'react';
import BookComponent from '../Components/bookComponent/BookComponent';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { resetSelectAction } from '../Redux/modules/select';
function BookContainer() {
  const dispatch = useDispatch();

  const resetSelect = useCallback(() => {
    dispatch(resetSelectAction());
  }, [useDispatch]);

  const path = useSelector((state) => state.router.location.state);

  const passedStep = path === undefined ? 0 : path.step;

  if (passedStep === 0) {
    resetSelect();
    console.log('북 컨테이너');
  }

  return <BookComponent passedStep={passedStep} />;
}
export default React.memo(BookContainer);

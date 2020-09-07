import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetSelectAction } from '../Redux/modules/select';
import ScheduleComponent from '../Components/ScheduleComponent/ScheduleComponent';
function BookMoviesContainer() {
  const dispatch = useDispatch();
  const resetSelect = useCallback(() => {
    dispatch(resetSelectAction());
  }, [useDispatch]);
  resetSelect();
  return <ScheduleComponent />;
}
export default React.memo(BookMoviesContainer);

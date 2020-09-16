import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  resetSelectAction,
  setSelectTitleAction,
  setSelectPointAction,
} from '../Redux/modules/select';
import ScheduleComponent from '../Components/ScheduleComponent/ScheduleComponent';
function BookMoviesContainer() {
  const dispatch = useDispatch();

  const resetSelect = useCallback(() => {
    dispatch(resetSelectAction());
  }, [useDispatch]);

  resetSelect();
  const selectPoint = useCallback(
    (selectPoint) => {
      dispatch(setSelectPointAction(selectPoint));
    },
    [dispatch],
  );

  const selectTitle = useCallback(
    (selectedTitle) => {
      dispatch(setSelectTitleAction(selectedTitle));
    },
    [dispatch],
  );

  return (
    <ScheduleComponent selectPoint={selectPoint} selectTitle={selectTitle} />
  );
}
export default React.memo(BookMoviesContainer);

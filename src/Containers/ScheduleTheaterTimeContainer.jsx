import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectPointAction } from '../Redux/modules/select';
import ScheduleTheaterTimeComponent from '../Components/ScheduleTheaterTimeComponent/ScheduleTheaterTimeComponent';

function ScheduleTheaterTimeContainer() {
  const dispatch = useDispatch();

  const point = useSelector((state) => state.selectData.point);

  const selectPoint = useCallback(
    (selectPoint) => {
      dispatch(setSelectPointAction(selectPoint));
    },
    [dispatch],
  );

  if (point === '없음') selectPoint('가양');

  return <ScheduleTheaterTimeComponent point={point} />;
}
export default React.memo(ScheduleTheaterTimeContainer);

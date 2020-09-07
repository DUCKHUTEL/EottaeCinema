import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectPointAction } from '../Redux/modules/select';
import { ScheduleTheaterComponent } from '../Components/ScheduleTheaterComponent/ScheduleTheaterComponent';

export function ScheduleTheaterContainer() {
  const dispatch = useDispatch();

  const selectPoint = useCallback(
    (selectPoint) => {
      dispatch(setSelectPointAction(selectPoint));
    },
    [dispatch],
  );

  const point = useSelector((state) => state.selectData.point);
  if (point === '없음') selectPoint('가양');

  return <ScheduleTheaterComponent point={point} />;
}

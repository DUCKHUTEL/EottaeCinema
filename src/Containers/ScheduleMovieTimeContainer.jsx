import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectPointAction } from '../Redux/modules/select';
import ScheduleMovieTimeComponent from '../Components/ScheduleMovieTimeComponent./ScheduleMovieTimeComponent';

function ScheduleTheaterTimeContainer() {
  return <ScheduleMovieTimeComponent />;
}
export default React.memo(ScheduleTheaterTimeContainer);
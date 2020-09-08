import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectDateAction } from '../Redux/modules/select';
import { getBookingDataAction } from '../Redux/modules/bookingData';
import ScheduleMovieTimeSortTheaterComponent from '../Components/ScheduleMovieTimeSortTheaterComponent/ScheduleMovieTimeSortTheaterComponent';
function ScheduleMovieTimeSortTheaterContainer({ setStep }) {
  const dispatch = useDispatch();

  const selectDate = useCallback(
    (selectedDate) => {
      dispatch(setSelectDateAction(selectedDate));
    },
    [dispatch],
  );

  const bookData = useCallback((bookId) => {
    dispatch(getBookingDataAction(bookId));
  });

  const selectedDate = useSelector((state) => state.selectData.date);
  const selectedTitle = useSelector((state) => state.selectData.title);
  const theatersData = useSelector((state) => state.theaters.theaters);

  const movieDataSetTheater = useSelector(
    (state) => state.theaters.movieDataSetTheater,
  );
  console.log(movieDataSetTheater);

  return (
    <ScheduleMovieTimeSortTheaterComponent
      selectDate={selectDate}
      selectedDate={selectedDate}
      setStep={setStep}
      bookData={bookData}
      theatersData={theatersData}
      selectedTitle={selectedTitle}
      movieDataSetTheater={movieDataSetTheater}
    />
  );
}

export default React.memo(ScheduleMovieTimeSortTheaterContainer);

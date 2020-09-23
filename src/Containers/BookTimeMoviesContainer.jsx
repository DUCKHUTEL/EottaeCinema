import React, { useCallback } from 'react';
import BookTimeMovieComponent from '../Components/bookTimeMoviesComponent/BookTimeMovieComponent';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectDateAction } from '../Redux/modules/select';
import { getBookingDataAction } from '../Redux/modules/bookingData';
function BookTimeMoviesContainer({ setStep, from, type }) {
  const dispatch = useDispatch();

  const selectDate = useCallback(
    (selectedDate) => {
      dispatch(setSelectDateAction(selectedDate));
    },
    [dispatch],
  );

  const bookData = useCallback(
    (bookId) => {
      dispatch(getBookingDataAction(bookId));
    },
    [dispatch],
  );

  const selectedDate = useSelector((state) => state.selectData.date);

  const movieDataForBookBtn = useSelector(
    (state) => state.theaters.movieDataForBookBtn,
  );

  return (
    <BookTimeMovieComponent
      selectDate={selectDate}
      selectedDate={selectedDate}
      movieDataForBookBtn={movieDataForBookBtn}
      setStep={setStep}
      bookData={bookData}
      from={from}
      type={type}
    />
  );
}

export default React.memo(BookTimeMoviesContainer);

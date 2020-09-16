import React from 'react';
import SelectSeatComponent from '../Components/SelectSeatComponent/SelectSeatComponent';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { getBookingSeatDataAction } from '../Redux/modules/bookingData';

function SelectSeatContainer({ setStep, steps }) {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const bookingData = useSelector((state) => state.bookingData.bookingData);
  const selectingSeat = useCallback(
    (selectedSeat, people) => {
      dispatch(getBookingSeatDataAction(selectedSeat, people));
    },
    [dispatch],
  );
  return (
    <SelectSeatComponent
      selectingSeat={selectingSeat}
      setStep={setStep}
      movies={movies}
      bookingData={bookingData[0]}
      steps={steps}
    />
  );
}

export default React.memo(SelectSeatContainer);

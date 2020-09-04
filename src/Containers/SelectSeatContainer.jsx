import React from 'react';
import SelectSeatComponent from '../Components/SelectSeatComponent/SelectSeatComponent';
import { useSelector } from 'react-redux';

function SelectSeatContainer({ setStep }) {
  const movies = useSelector((state) => state.movies.movies);
  const bookingData = useSelector((state) => state.bookingData.bookingData);

  return (
    <SelectSeatComponent
      setStep={setStep}
      movies={movies}
      bookingData={bookingData[0]}
    />
  );
}

export default React.memo(SelectSeatContainer);

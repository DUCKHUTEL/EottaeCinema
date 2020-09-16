import React from 'react';
import { useSelector } from 'react-redux';
import PayBookDataComponent from '../Components/PayBookDataComponent/PayBookDataComponent';
function PayBookDataContainer() {
  const movies = useSelector((state) => state.movies.movies);
  const bookingData = useSelector((state) => state.bookingData.bookingData);
  const bookingSeat = useSelector((state) => state.bookingData.selectedSeat);
  const bookingPeople = useSelector((state) => state.bookingData.people);
  return (
    <PayBookDataComponent
      movies={movies}
      bookingData={bookingData[0]}
      bookingSeat={bookingSeat}
      bookingPeople={bookingPeople}
    />
  );
}
export default React.memo(PayBookDataContainer);

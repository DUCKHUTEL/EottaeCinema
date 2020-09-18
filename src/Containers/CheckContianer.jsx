import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CheckComponent from '../Components/checkComponent/CheckComponent';
function CheckContainer() {
  const movies = useSelector((state) => state.movies.movies);
  const bookingData = useSelector((state) => state.bookingData.bookingData);
  const bookingSeat = useSelector((state) => state.bookingData.selectedSeat);
  const bookingPeople = useSelector((state) => state.bookingData.people);
  const poster =
    bookingData[0] &&
    movies.filter((movie) => movie.movieTitle === bookingData[0].movieTitle)[0]
      .moviePoster;
  const checkData = useSelector((state) => state.checkBookData);

  return (
    <CheckComponent
      checkData={checkData}
      poster={poster}
      bookingSeat={bookingSeat}
      bookingData={bookingData[0]}
      bookingPeople={bookingPeople}
    />
  );
}
export default React.memo(CheckContainer);

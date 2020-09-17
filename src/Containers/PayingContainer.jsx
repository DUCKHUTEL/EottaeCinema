import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import PayingComponent from '../Components/PayingComponent/PayingComponent';
import bookingService from '../Services/bookingService';
function PayingContainer({ setStep }) {
  const bookingPeople = useSelector((state) => state.bookingData.people);
  const bookingData = useSelector((state) => state.bookingData.bookingData);
  const bookingSeat = useSelector((state) => state.bookingData.selectedSeat);
  const pay = useCallback(
    (bookId, bookedSeat, selectedSeat, nickName, token) => {
      const res = bookingService.book(
        bookId,
        bookedSeat,
        selectedSeat,
        nickName,
        token,
      );
      return res;
    },
  );
  return (
    <PayingComponent
      setStep={setStep}
      bookingPeople={bookingPeople}
      bookingData={bookingData[0]}
      bookingSeat={bookingSeat}
      pay={pay}
    />
  );
}
export default React.memo(PayingContainer);

import React from 'react';
import { useSelector } from 'react-redux';
import PayingComponent from '../Components/PayingComponent/PayingComponent';
function PayingContainer({ setStep }) {
  const bookingPeople = useSelector((state) => state.bookingData.people);
  return <PayingComponent setStep={setStep} bookingPeople={bookingPeople} />;
}
export default React.memo(PayingContainer);

import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PayingComponent from '../Components/PayingComponent/PayingComponent';
import { getCheckDataAction } from '../Redux/modules/checkBookData';
function PayingContainer({ setStep }) {
  const dispatch = useDispatch();
  const bookingPeople = useSelector((state) => state.bookingData.people);
  const pay = useCallback(() => {
    dispatch(getCheckDataAction());
  }, []);
  return (
    <PayingComponent
      setStep={setStep}
      bookingPeople={bookingPeople}
      pay={pay}
    />
  );
}
export default React.memo(PayingContainer);

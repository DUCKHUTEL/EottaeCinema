import React, { useCallback } from 'react';
import ReactDom from 'react-dom';
import BookPotalComponent from '../Components/BookPotal/BookPotalComponent';
import { useSelector, useDispatch } from 'react-redux';
import {
  setSelectTitleAction,
  setSelectPointAction,
} from '../Redux/modules/select';

function BookPotalContainer({ setMind, setStep, from, type }) {
  const dispatch = useDispatch();
  const bookingData = useSelector((state) => state.bookingData.bookingData);

  const selectTitle = useCallback(
    (selectedTitle) => {
      dispatch(setSelectTitleAction(selectedTitle));
    },
    [dispatch],
  );

  const selectPoint = useCallback(
    (selectPoint) => {
      dispatch(setSelectPointAction(selectPoint));
    },
    [dispatch],
  );

  return ReactDom.createPortal(
    <BookPotalComponent
      bookingData={bookingData[0]}
      setMind={setMind}
      setStep={setStep}
      selectTitle={selectTitle}
      selectPoint={selectPoint}
      from={from}
      type={type}
    />,
    document.getElementById('bookPotal'),
  );
}
export default React.memo(BookPotalContainer);

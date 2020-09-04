import React from 'react';
import ReactDom from "react-dom"
import  BookPotalComponent  from '../Components/BookPotal/BookPotalComponent';
import { useSelector } from 'react-redux';

function BookPotalContainer({setMind,setStep}) {
  const bookingData = useSelector(state=> state.bookingData.bookingData);
  return ReactDom.createPortal(
    <BookPotalComponent bookingData={bookingData[0]} setMind={setMind} setStep={setStep}/>,
    document.getElementById("bookPotal")
  );
};
export default React.memo(BookPotalContainer);
// @flow
import React from 'react';
import ReactDom from "react-dom"
import  BookPotalComponent  from '../Components/BookPotal/BookPotalComponent';
import { useSelector } from 'react-redux';

function BookPotalContainer({setMind}) {
  const bookingData = useSelector(state=> state.bookingData.bookingData);
  return ReactDom.createPortal(
    <BookPotalComponent bookingData={bookingData[0]}setMind={setMind}/>,
    document.getElementById("bookPotal")
  );
};
export default React.memo(BookPotalContainer);
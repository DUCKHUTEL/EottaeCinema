// @flow
import React from 'react';
import ReactDom from "react-dom"
import { BookPotalComponent } from '../Components/BookPotal/BookPotalComponent';

export function BookPotalContainer() {
  const bookingData = useSelector(state=> state.bookingData.bookingData);
  return ReactDom.createPortal(
    <BookPotalComponent bookingData={bookingData[0]}/>,
    document.getElementById("bookPotal")
  );
};
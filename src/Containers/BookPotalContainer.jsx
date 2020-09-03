// @flow
import React from 'react';
import ReactDom from "react-dom"
import { BookPotalComponent } from '../Components/BookPotal/BookPotalComponent';
import { useSelector } from 'react-redux';

export function BookPotalContainer({setMind}) {
  const bookingData = useSelector(state=> state.bookingData.bookingData);
  console.log(bookingData)
  
  return ReactDom.createPortal(
    <BookPotalComponent bookingData={bookingData[0]}setMind={setMind}/>,
    document.getElementById("bookPotal")
  );
};
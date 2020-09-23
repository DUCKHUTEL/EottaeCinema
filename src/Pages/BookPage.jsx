import React from 'react';
import BookContainer from '../Containers/BookContainer';
import MainFooterComponent from '../Components/MainFooterComponent/MainFooterComponent';
import MainHeaderContainer from '../Containers/MainHeaderContainer';
export function BookPage() {
  const key = 2;
  return (
    <>
      <MainHeaderContainer key={key} />
      <BookContainer />
      <MainFooterComponent />
    </>
  );
}

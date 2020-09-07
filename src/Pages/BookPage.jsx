import React from 'react';
import BookContainer from '../Containers/BookContainer';
import MainFooterComponent from '../Components/MainFooterComponent/MainFooterComponent';
import MainHeaderComponent from '../Components/MainHeaderComponent/MainHeaderComponent';
export function BookPage() {
  const index = 2;
  return (
    <>
      <MainHeaderComponent path={[index]} />
      <BookContainer />
      <MainFooterComponent />
    </>
  );
}

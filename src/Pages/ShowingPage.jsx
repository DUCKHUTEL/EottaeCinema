import React from 'react';
import MainHeaderComponent from '../Components/MainHeaderComponent/MainHeaderComponent';
import ShowingMovieComponent from '../Components/ShowingMovieComponent/ShowingMovieComponent';
import MainFooterComponent from '../Components/MainFooterComponent/MainFooterComponent';
export default function ShowingPage() {
  const index = 5;
  return (
    <>
      <MainHeaderComponent path={[index]} />
      <ShowingMovieComponent />
      <MainFooterComponent />
    </>
  );
}

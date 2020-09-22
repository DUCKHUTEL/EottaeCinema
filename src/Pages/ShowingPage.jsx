import React from 'react';
import ShowingMovieComponent from '../Components/ShowingMovieComponent/ShowingMovieComponent';
import MainFooterComponent from '../Components/MainFooterComponent/MainFooterComponent';
import ShowingWallpaperComponent from '../Components/ShowingWallpaperComponent/ShowingWallpaperComponent';
import MainHeaderContainer from '../Containers/MainHeaderContainer';
export default function ShowingPage() {
  const key = 4;
  return (
    <>
      <MainHeaderContainer key={key} />
      <ShowingWallpaperComponent />
      <ShowingMovieComponent />
      <MainFooterComponent />
    </>
  );
}

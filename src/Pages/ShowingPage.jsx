import React from 'react';
import MainHeaderComponent from '../Components/MainHeaderComponent/MainHeaderComponent';
import ShowingMovieComponent from '../Components/ShowingMovieComponent/ShowingMovieComponent';
import MainFooterComponent from '../Components/MainFooterComponent/MainFooterComponent';
import ShowingWallpaperComponent from '../Components/ShowingWallpaperComponent/ShowingWallpaperComponent';
export default function ShowingPage() {
  const index = 5;
  return (
    <>
      <MainHeaderComponent path={[index]} />
      <ShowingWallpaperComponent />
      <ShowingMovieComponent />
      <MainFooterComponent />
    </>
  );
}

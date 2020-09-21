import React from 'react';
import MainFooterComponent from '../Components/MainFooterComponent/MainFooterComponent';
import MainWallpaperComponent from '../Components/MainWallpapterComponent/MainWallpaperComponent';
import MainSubsectionComponent from '../Components/MainSubsectionComponent/MainSubsectionComponent';
import MainMoviesContainer from '../Containers/MainMoviesContainer';
import MainHeaderContainer from '../Containers/MainHeaderContainer';

export default function Mainpage(props) {
  const key = 1;
  return (
    <>
      <MainHeaderContainer key={key} path={props.match.path} />
      <MainWallpaperComponent />
      <MainMoviesContainer />
      <MainSubsectionComponent />
      <MainFooterComponent />
    </>
  );
}

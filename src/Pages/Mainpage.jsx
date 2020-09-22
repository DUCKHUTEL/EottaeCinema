import React, { useState, useCallback } from 'react';
import MainFooterComponent from '../Components/MainFooterComponent/MainFooterComponent';
import MainWallpaperComponent from '../Components/MainWallpapterComponent/MainWallpaperComponent';
import MainSubsectionComponent from '../Components/MainSubsectionComponent/MainSubsectionComponent';
import MainMoviesContainer from '../Containers/MainMoviesContainer';
import MainHeaderContainer from '../Containers/MainHeaderContainer';
import MainVideoPortalContainer from '../Containers/MainVideoPortalContainer';

export default function Mainpage(props) {
  const key = 1;
  const [modalId, setModalId] = useState(0);

  const show = useCallback((id) => {
    setModalId(id);
  }, []);
  const hide = useCallback(() => {
    setModalId(0);
  }, []);
  return (
    <>
      <MainHeaderContainer key={key} path={props.match.path} />
      <MainWallpaperComponent show={show} />
      {modalId > 0 && <MainVideoPortalContainer hide={hide} id={modalId} />}
      <MainMoviesContainer />
      <MainSubsectionComponent />
      <MainFooterComponent />
    </>
  );
}

import React from 'react';
import DetailPageContainer from '../Containers/DetailPageContainer';
import MainFooterComponent from '../Components/MainFooterComponent/MainFooterComponent';
import MainHeaderComponent from '../Components/MainHeaderComponent/MainHeaderComponent';

export default function DetailPage() {
  const index = 3;
  return (
    <>
      <MainHeaderComponent path={[index]} />
      <DetailPageContainer />
      <MainFooterComponent />
    </>
  );
}

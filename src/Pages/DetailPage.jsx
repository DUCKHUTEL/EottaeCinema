import React from 'react';
import DetailPageContainer from '../Containers/DetailPageContainer';
import MainFooterComponent from '../Components/MainFooterComponent/MainFooterComponent';
import MainHeaderContainer from '../Containers/MainHeaderContainer';

export default function DetailPage() {
  const key = 3;
  return (
    <>
      <MainHeaderContainer key={key} />
      <DetailPageContainer />
      <MainFooterComponent />
    </>
  );
}

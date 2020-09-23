import React from 'react';
import MainFooterComponent from '../Components/MainFooterComponent/MainFooterComponent';
import ScheduleContainer from '../Containers/ScheduleContainer';
import MainHeaderContainer from '../Containers/MainHeaderContainer';
export function SchedulePage() {
  const key = 5;
  return (
    <>
      <MainHeaderContainer key={key} />
      <ScheduleContainer />
      <MainFooterComponent />
    </>
  );
}

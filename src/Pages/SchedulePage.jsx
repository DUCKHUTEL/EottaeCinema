import React from 'react';
import MainHeaderComponent from '../Components/MainHeaderComponent/MainHeaderComponent';
import MainFooterComponent from '../Components/MainFooterComponent/MainFooterComponent';
import ScheduleContainer from '../Containers/ScheduleContainer';
export function SchedulePage() {
  const index = 5;
  return (
    <>
      <MainHeaderComponent path={[index]} />
      <ScheduleContainer />
      <MainFooterComponent />
    </>
  );
}

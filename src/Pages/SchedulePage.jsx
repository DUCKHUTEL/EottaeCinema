import React from 'react';
import MainFooterComponent from '../Components/MainFooterComponent/MainFooterComponent';
import ScheduleContainer from '../Containers/ScheduleContainer';
import MainHeaderComponent from '../Components/MainHeaderComponent/MainHeaderComponent';
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

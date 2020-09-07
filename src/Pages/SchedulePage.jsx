import React from 'react';
import MainHeaderComponentBlack from '../Components/MainHeaderComponent/MainHeaderComponentBlack';
import MainFooterComponent from '../Components/MainFooterComponent/MainFooterComponent';
import ScheduleContainer from '../Containers/ScheduleContainer';
export function SchedulePage() {
  return (
    <>
      <MainHeaderComponentBlack />
      <ScheduleContainer />
      <MainFooterComponent />
    </>
  );
}

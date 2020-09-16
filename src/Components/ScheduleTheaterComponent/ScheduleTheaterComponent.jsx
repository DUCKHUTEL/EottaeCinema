import React from 'react';
import AllTheaterPointContainer from '../../Containers/AllTheaterPointContainer';
import styles from './ScheduleTheaterComponent.module.scss';
export function ScheduleTheaterComponent({ point }) {
  return (
    <>
      <h3>{point}</h3>
      <AllTheaterPointContainer point={point} />
    </>
  );
}

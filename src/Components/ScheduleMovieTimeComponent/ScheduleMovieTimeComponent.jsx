import React from 'react';
import BookMoviesContainer from '../../Containers/BookMoviesContainer';
import ScheduleMovieTimeSortTheaterContainer from '../../Containers/ScheduleMovieTimeSortTheaterContainer';

function ScheduleMovieTimeComponent() {
  return (
    <>
      <BookMoviesContainer from="schedule" />
      <ScheduleMovieTimeSortTheaterContainer />
    </>
  );
}

export default React.memo(ScheduleMovieTimeComponent);

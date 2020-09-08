import React from 'react';
import BookMoviesContainer from '../../Containers/BookMoviesContainer';
import ScheduleMovieTimeSortTheaterContainer from '../../Containers/ScheduleMovieTimeSortTheaterContainer';

function ScheduleMovieTimeComponent() {
  return (
    <>
      <div>
        <BookMoviesContainer from="schedule" />
      </div>
      <ScheduleMovieTimeSortTheaterContainer />
    </>
  );
}

export default React.memo(ScheduleMovieTimeComponent);

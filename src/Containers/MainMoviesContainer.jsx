import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startGetMoviesActionCreator } from '../Redux/modules/movies';
import MainMoviesComponent from '../Components/MainMoviesComponenet/MainMoviesComponent';
import { setSelectTitleAction } from '../Redux/modules/select';

function MainMoviesContainer() {
  const dispatch = useDispatch();

  const getMovies = React.useCallback(() => {
    dispatch(startGetMoviesActionCreator());
  }, [dispatch]);
  //   getMovies();
  const movies = useSelector((state) => state.movies.movies);
  const selectTitle = useCallback(
    (selectedTitle) => {
      dispatch(setSelectTitleAction(selectedTitle));
    },
    [dispatch],
  );
  return (
    <MainMoviesComponent
      movies={movies}
      selectTitle={selectTitle}
      getMovies={getMovies}
    />
  );
}

export default MainMoviesContainer;

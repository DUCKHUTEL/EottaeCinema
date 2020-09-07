import React from 'react';
import MainMoviesComponent from '../Components/MainMoviesComponenet/MainMoviesComponent';
import { useDispatch, useSelector } from 'react-redux';
import { startGetMoviesActionCreator } from '../Redux/modules/movies';

function MainMoviesContainer() {
  const dispatch = useDispatch();

  const getMovies = React.useCallback(() => {
    dispatch(startGetMoviesActionCreator());
  }, [dispatch]);
  getMovies();

  return <MainMoviesComponent getMovies={getMovies} />;
}

export default MainMoviesContainer;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startGetMoviesActionCreator } from '../Redux/modules/movies';
import MainMoviesComponent from '../Components/MainMoviesComponenet/MainMoviesComponent';

function MainMoviesContainer() {
  const dispatch = useDispatch();

  const getMovies = React.useCallback(() => {
    dispatch(startGetMoviesActionCreator());
  }, [dispatch]);
  // getMovies();
  const movies = useSelector((state) => state.movies.movies);

  return <MainMoviesComponent movies={movies} getMovies={getMovies} />;
}

export default MainMoviesContainer;

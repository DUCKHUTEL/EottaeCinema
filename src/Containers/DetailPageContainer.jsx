import React from 'react';
import DetailVisualTop from '../Components/DetailVisualTopComponent/DetailVisualTop';
import DetailContent from '../Components/DetailContentComponent/DetailContent';
import DetailInfo from '../Components/DetailInfoComponent/DetailInfo';
import { getMovieDataSagaActionCreator } from '../Redux/modules/detail';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { startGetMoviesActionCreator } from '../Redux/modules/movies';
import { Redirect } from 'react-router-dom';

export default function DetailPageContainer() {
  const selectedMovie = useSelector((state) => state.router.location.state);
  const movieAPIData = useSelector((state) => state.detail.movieData);
  const moviesDBData = useSelector((state) => state.movies.movies);
  // const loading = useSelector((state) => state.detail.loading);

  const dispatch = useDispatch();

  const getMovieAPIData = React.useCallback(() => {
    dispatch(getMovieDataSagaActionCreator(selectedMovie));
  }, [dispatch, selectedMovie]);

  const getMoviesDBData = React.useCallback(() => {
    dispatch(startGetMoviesActionCreator());
  }, [dispatch]);

  useEffect(() => {
    getMovieAPIData();
    getMoviesDBData();
  }, [getMovieAPIData, getMoviesDBData]);

  if (selectedMovie === undefined) {
    return <Redirect to="/" />;
  }

  const DBData = moviesDBData.find(
    (DBdata) => DBdata.movieTitle === selectedMovie,
  );

  return (
    <>
      <DetailVisualTop DBData={DBData} />
      <DetailContent
        APIData={movieAPIData}
        DBData={DBData}
        getMoviesDBData={getMoviesDBData}
      />
      <DetailInfo
        APIData={movieAPIData}
        DBData={DBData}
        getMoviesDBData={getMoviesDBData}
        selectedMovie={selectedMovie}
      />
    </>
  );
}

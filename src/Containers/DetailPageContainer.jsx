import React from 'react';
import DetailVisualTop from '../Components/Detail1/DetailVisualTop';
import DetailContent from '../Components/Detail2/DetailContent';
import DetailInfo from '../Components/Detail3/DetailInfo';
import { getMovieDataSagaActionCreator } from '../Redux/modules/detail';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { startGetMoviesActionCreator } from '../Redux/modules/movies';

export default function DetailPageContainer() {
  const movieAPIData = useSelector((state) => state.detail.movieData);
  const moviesDBData = useSelector((state) => state.movies.movies);
  const loading = useSelector((state) => state.detail.loading);

  console.log('loading', loading);
  console.log('movieDBData', moviesDBData);

  const dispatch = useDispatch();

  const getMovieAPIData = React.useCallback(() => {
    dispatch(getMovieDataSagaActionCreator('테넷'));
  }, [dispatch]);

  const getMoviesDBData = React.useCallback(() => {
    dispatch(startGetMoviesActionCreator());
  });

  useEffect(() => {
    getMovieAPIData();
  }, []);

  useEffect(() => {
    getMoviesDBData();
  }, []);

  const DBData = moviesDBData.find(
    (DBdata) => DBdata.movieTitle === movieAPIData.title,
  );

  return (
    <>
      <DetailVisualTop
        movieAPIData={movieAPIData}
        getMovieAPIData={getMovieAPIData}
      />
      <DetailContent
        movieAPIData={movieAPIData}
        moviesDBData={moviesDBData}
        DBData={DBData}
        getMoviesDBData={getMoviesDBData}
      />
      <DetailInfo movieAPIData={movieAPIData} DBData={DBData} />
    </>
  );
}

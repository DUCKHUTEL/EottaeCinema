import React from 'react';
import { useCallback, useEffect } from 'react';
import DetailVisualTop from '../Components/DetailVisualTopComponent/DetailVisualTop';
import DetailContent from '../Components/DetailContentComponent/DetailContent';
import DetailInfo from '../Components/DetailInfoComponent/DetailInfo';
import { useSelector, useDispatch } from 'react-redux';
import { getMovieDataSagaActionCreator } from '../Redux/modules/detail';
import { startGetMoviesActionCreator } from '../Redux/modules/movies';
import { setSelectTitleAction } from '../Redux/modules/select';

function DetailPageContainer() {
  const selectedMovie = useSelector((state) => state.router.location.state);
  const movieAPIData = useSelector((state) => state.detail.movieData);
  const moviesDBData = useSelector((state) => state.movies.movies);

  const dispatch = useDispatch();

  const getMovieAPIData = useCallback(() => {
    dispatch(getMovieDataSagaActionCreator(selectedMovie));
  }, [dispatch, selectedMovie]);

  const getMoviesDBData = useCallback(() => {
    dispatch(startGetMoviesActionCreator());
  }, [dispatch]);

  useEffect(() => {
    getMovieAPIData();
  }, [getMovieAPIData]);

  useEffect(() => {
    getMoviesDBData();
  }, [getMoviesDBData]);

  const selectTitle = useCallback(
    (selectedTitle) => {
      dispatch(setSelectTitleAction(selectedTitle));
    },
    [dispatch],
  );

  const DBData = moviesDBData.find(
    (DBdata) => DBdata.movieTitle === selectedMovie,
  );

  return (
    <>
      <DetailVisualTop DBData={DBData} />
      <DetailContent
        APIData={movieAPIData}
        DBData={DBData}
        selectTitle={selectTitle}
      />
      <DetailInfo
        APIData={movieAPIData}
        DBData={DBData}
        selectedMovie={selectedMovie}
      />
    </>
  );
}

export default React.memo(DetailPageContainer);

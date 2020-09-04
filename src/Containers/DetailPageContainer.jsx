import React from "react";
import DetailVisualTop from "../Components/Detail1/DetailVisualTop";
import DetailContent from "../Components/Detail2/DetailContent";
import DetailInfo from "../Components/Detail3/DetailInfo";
import { getMovieDataSagaActionCreator } from "../Redux/modules/detail";
import { startGetMoviesActionCreator } from "../Redux/modules/movies";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

export default function DetailPageContainer() {
  const movieAPIData = useSelector((state) => state.detail.movieData);
  const moviesDBData = useSelector((state) => state.movies.movies);
  console.log("movieDBData", moviesDBData);

  const dispatch = useDispatch();

  const getMovieAPIData = React.useCallback(() => {
    dispatch(getMovieDataSagaActionCreator("시크릿 가든"));
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

  console.log("movieData", movieAPIData);
  return (
    <>
      <DetailVisualTop
        movieAPIData={movieAPIData}
        getMovieAPIData={getMovieAPIData}
      />
      <DetailContent
        movieAPIData={movieAPIData}
        moviesDBData={moviesDBData}
        getMoviesDBData={getMoviesDBData}
      />
      <DetailInfo movieAPIData={movieAPIData} moviesDBData={moviesDBData} />
    </>
  );
}

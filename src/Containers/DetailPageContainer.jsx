import React from "react";
import DetailVisualTop from "../Components/Detail1/DetailVisualTop";
import DetailContent from "../Components/Detail2/DetailContent";
import DetailInfo from "../Components/Detail3/DetailInfo";
import { getMovieDataSagaActionCreator } from "../Redux/modules/detail";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

export default function DetailPageContainer() {
  const movieData = useSelector((state) => state.detail.movieData);

  const dispatch = useDispatch();
  const getMovieData = React.useCallback(() => {
    dispatch(getMovieDataSagaActionCreator());
  }, [dispatch]);

  useEffect(() => {
    getMovieData();
  }, []);

  console.log("movieData", movieData);
  return (
    <>
      <DetailVisualTop movieData={movieData} getMovieData={getMovieData} />
      <DetailContent />
      <DetailInfo />
    </>
  );
}

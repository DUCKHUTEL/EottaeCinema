import React from "react";
import DetailVisualTop from "../Components/Detail1/DetailVisualTop";
import DetailContent from "../Components/Detail2/DetailContent";
import { getMovieDataSagaActionCreator } from "../Redux/modules/detail";
import { useSelector, useDispatch } from "react-redux";

export default function DetailPageContainer() {
  const movieData = useSelector((state) => state.detail);

  const dispatch = useDispatch();
  const getMovieData = React.useCallback(() => {
    dispatch(getMovieDataSagaActionCreator());
  }, [dispatch]);

  console.log("movieData", movieData);
  return (
    <>
      <DetailVisualTop getMovieData={getMovieData} />
      <DetailContent />
    </>
  );
}

// @flow
import React, { useCallback } from "react";
<<<<<<< HEAD
import BookMoviesComponent from "../Components/bookMoviesComponent/BookmoviesComponent";
import { useDispatch, useSelector } from "react-redux";
import { setSelectTitleAction } from "../Redux/modules/select";
export function BookMoviesContainer(props) {
  const dispatch = useDispatch();

  const selectTitle = useCallback(
    (selectedTitle) => {
      dispatch(setSelectTitleAction(selectedTitle));
    },
    [dispatch]
  );
  const selectedTitle = useSelector((state) => state.selectData.title);

  return (
    <BookMoviesComponent
      selectTitle={selectTitle}
      selectedTitle={selectedTitle}
    />
  );
=======
import BookMoviesComponent from "../Components/bookMoviesComponent/BookMoviesComponent"
import { useDispatch, useSelector } from "react-redux";
import { setSelectTitleAction } from "../Redux/modules/select";
import { push } from "connected-react-router";
function BookMoviesContainer() {
    const moviesData = useSelector((state) => state.movies.movies);

    const dispatch = useDispatch();

    const selectTitle = useCallback(
        (selectedTitle) => {
            dispatch(setSelectTitleAction(selectedTitle));
        },
        [dispatch]
    );
    const selectedTitle = useSelector((state) => state.selectData.title);
    if (moviesData.length === 0) {
        dispatch(push("/"));
    }

    return (
        <BookMoviesComponent
            selectTitle={selectTitle}
            selectedTitle={selectedTitle}
            moviesData={moviesData}
        />
    );
>>>>>>> ee87f1929fa255a92791d3ad2411abd5cfd016f6
}
export default React.memo(BookMoviesContainer);
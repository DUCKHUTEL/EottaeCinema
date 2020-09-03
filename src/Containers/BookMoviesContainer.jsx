// @flow
import React, { useCallback } from "react";
import BookMoviesComponent from "../Components/bookMoviesComponent/BookMoviesComponent";
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
}
export default React.memo(BookMoviesContainer);

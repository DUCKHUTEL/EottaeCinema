// @flow
import React, { useCallback } from "react";
import BookMoviesComponent from "../Components/bookMoviesComponent/BookMoviesComponent";
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
}
export default React.memo(BookMoviesContainer);

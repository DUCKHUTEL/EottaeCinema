// @flow
import React, { useCallback } from "react";
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

    const allTitles = "";
    const selectedTitle = useSelector((state) => state.selectData.title);

    return <BookMoviesComponent />;
}

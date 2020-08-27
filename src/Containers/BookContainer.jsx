// @flow
import React from "react";
import BookComponent from "../Components/bookComponent/BookComponent";
import { useSelector } from "react-redux";
export function BookContainer(props) {
    const point = useSelector((state) => state.selectData.point);

    return <BookComponent point={point} />;
}

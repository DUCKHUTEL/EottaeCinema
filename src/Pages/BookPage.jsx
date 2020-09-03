// @flow
import React from "react";
import { BookContainer } from "../Containers/BookContainer";
import MainHeaderComponent from "../Components/MainHeaderComponent/MainHeaderComponent";
import MainHeaderContaniner from "../Containers/MianHeaderContaniner";
export function BookPage() {
    return (
        <>
            <MainHeaderContaniner />
            <BookContainer />
        </>
    );
}

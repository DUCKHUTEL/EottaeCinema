// @flow
import React from "react";
import BookComponent from "../Components/bookComponent/BookComponent";
function BookContainer() {
    return <BookComponent  />;
}
export default React.memo(BookContainer)
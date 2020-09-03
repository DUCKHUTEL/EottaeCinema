import React from "react";
import DetailPageContainer from "../Containers/DetailPageContainer";
import MainFooterComponent from "../Components/MainFooterComponent/MainFooterComponent";
import MainHeaderComponentBlack from "../Components/MainHeaderComponent/MainHeaderComponentBlack";

export default function DetailPage() {
    return (
        <>
            <MainHeaderComponentBlack />
            <DetailPageContainer />
            <MainFooterComponent />
        </>
    );
}

import React from "react";
import MainHeaderComponent from "../Components/MainHeaderComponent/MainHeaderComponent";

export default function MainHeaderContaniner(props) {
    const path = props.path;

    return <MainHeaderComponent path={path} />;
}

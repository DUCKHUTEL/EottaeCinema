import React from "react";
import MainHeaderComponent from "../Components/MainHeaderComponent/MainHeaderComponent";
import MainFooterComponent from "../Components/MainFooterComponent/MainFooterComponent";
import MainWallpaperComponent from "../Components/MainWallpapterComponent/MainWallpaperComponent";
import MainSubsectionComponent from "../Components/MainSubsectionComponent/MainSubsectionComponent";
import MainMoviesContainer from "../Containers/MainMoviesContainer";
import MainHeaderContaniner from "../Containers/MianHeaderContaniner";

export default function Mainpage(props) {
    return (
        <>
            <MainHeaderContaniner path={props.match.path} />
            <MainWallpaperComponent />
            <MainMoviesContainer />
            <MainSubsectionComponent />
            <MainFooterComponent />
        </>
    );
}

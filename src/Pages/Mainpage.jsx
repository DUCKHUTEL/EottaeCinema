import React from "react";
import MainHeaderComponent from "../Components/MainHeaderComponent/MainHeaderComponent";
import MainFooterComponent from "../Components/MainFooterComponent/MainFooterComponent";
import MainWallpaperComponent from "../Components/MainWallpapterComponent/MainWallpaperComponent";
// import MainMoviesComponent from "../Components/MainMoviesComponenet/MainMoviesComponent";
import MainSubsectionComponent from "../Components/MainSubsectionComponent/MainSubsectionComponent";
import MainMoviesContainer from "../Containers/MainMoviesContainer";

export default function Mainpage() {
    return (
        <div>
            <MainHeaderComponent />
            <MainWallpaperComponent />
            <MainMoviesContainer />
            <MainSubsectionComponent />
            <MainFooterComponent />
        </div>
    );
}

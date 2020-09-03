import React from "react";
// import MainMoviesComponent from "../Components/MainMoviesComponenet/MainMoviesComponent";
import { useDispatch, useSelector } from "react-redux";
import { startGetMoviesActionCreator } from "../Redux/modules/movies";
import MainMoviesComponent from "../Components/MainMoviesComponenet/MainMoviesComponent";

export default function MainMoviesContainer() {
    // const movies = useSelector((state) => state.movies);

    const dispatch = useDispatch();
    const getMovies = React.useCallback(() => {
        dispatch(startGetMoviesActionCreator());
    }, [dispatch]);

    console.log(getMovies);

    return <MainMoviesComponent getMovies={getMovies} />;
}

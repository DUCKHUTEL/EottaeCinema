// @flow
import React, { useCallback } from 'react';
import BookTimeMovieComponent from '../Components/bookTimeMoviesComponent/BookTimeMovieComponent';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectDateAction } from '../Redux/modules/select';
export function BookTimeMoviesContainer(props) {

  const dispatch= useDispatch();
  const selectDate = useCallback(selectedDate=>{
    dispatch(setSelectDateAction(selectedDate))
  },[dispatch]);
  const selectedDate = useSelector(state=> state.selectData.date);
  // const resMoives = useSelector(state=> state.theaters.selectedMoiveData);
  const movieDataForBookBtn = useSelector(state=> state.theaters.movieDataForBookBtn);
  
  return (
    <BookTimeMovieComponent
      selectDate={selectDate}
      selectedDate={selectedDate}
      movieDataForBookBtn={movieDataForBookBtn}
    />
  );
};
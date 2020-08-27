// @flow
import React, { useCallback } from 'react';
import BookTimeMovieComponent from '../Components/bookTimeMoviesComponent/BookTimeMovieComponent';
import { useDispatch } from 'react-redux';
export function BookTimeMoviesContainer(props) {

  const dispatch= useDispatch();
  const selectDate = useCallback(selectedDate=>{
    dispatch(setSelectDateAction(selectedDate))
  },[dispatch]);
  const selectedDate = useSelector(state=> state.selectData.date);
  const resMoives = useSelector(state=> state.theaters.selectedMoiveData);
  return (
    <BookTimeMovieComponent
      selectDate={selectDate}
      resMoives = {resMoives}
      selectedDate={selectedDate}
    />
  );
};
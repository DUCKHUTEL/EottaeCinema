import React, { useCallback } from 'react';
// import { AllTheaterPointComponent } from '../Components/AllTheaterPointComponent/AllTheaterPointComponent';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectPointAction } from '../Redux/modules/select';
import AllTheaterPointComponent from '../Components/AllTheaterPointComponent/AllTheaterPointComponent';
export function AllTheaterPointContainer(props) {
  const dispatch =useDispatch();
  const selectPoint = useCallback(selectPoint => {
    dispatch(setSelectPointAction(selectPoint));
  },[dispatch])
  const allTheater = useSelector(state => state.theaters.theaters);
  const resTheater = useSelector(state=> state.theaters.selectedTheaters);
  const resMovies = useSelector(state=> state.theaters.selectedMoiveData);
  const point = useSelector(state=> state.selectData.point);
  return (
    <AllTheaterPointComponent
      allTheater={allTheater}
      resTheater={resTheater}
      selectPoint={selectPoint}
      point={point}
      resMovies={resMovies}
    />
  );
};
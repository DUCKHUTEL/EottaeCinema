import React from 'react';
import BookTheaterComponent from '../Components/BookTheaterComponent/BookTheaterComponent';
import { useSelector } from 'react-redux';

function BookTheaterContainer() {
  const point = useSelector((state) => state.selectData.point);
  return <BookTheaterComponent point={point} />;
}

export default React.memo(BookTheaterContainer);

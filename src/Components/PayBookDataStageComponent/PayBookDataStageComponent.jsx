import React from 'react';
import FirstSeat from '../TheaterSeatComponents/FirstSeat/FirstSeat';
import SecondSeat from '../TheaterSeatComponents/SecondSeat/SecondSeat';
import SixthSeat from '../TheaterSeatComponents/SixSeat/SixthSeat';

function PayBookDataStageComponent({
  clickSeat,
  stage,
  bookedSeat,
  clickedSeat,
  peopleCnt,
  type,
}) {
  if (stage === '1') {
    return (
      <FirstSeat
        bookedSeat={bookedSeat}
        clickedSeat={clickedSeat}
        peopleCnt={peopleCnt}
        clickSeat={clickSeat}
        type={type}
      />
    );
  }
  if (stage === '2') {
    return (
      <SecondSeat
        bookedSeat={bookedSeat}
        clickedSeat={clickedSeat}
        peopleCnt={peopleCnt}
        clickSeat={clickSeat}
        type={type}
      />
    );
  }
  if (stage === '6') {
    return (
      <SixthSeat
        bookedSeat={bookedSeat}
        clickedSeat={clickedSeat}
        peopleCnt={peopleCnt}
        clickSeat={clickSeat}
        type={type}
      />
    );
  }
}
export default React.memo(PayBookDataStageComponent);

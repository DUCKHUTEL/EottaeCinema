// @flow
import React from 'react';
import styles from './FirstSeat.module.scss'
function FirstSeat({bookedSeat, type}) {
  const bookedId = bookedSeat.split(";");
  const row = ["a","b","c","d","e","f","g","h","i","j"];
  const col = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17"];
  const blockA = ["1","3","4","6","8","10","12","15","17"];
  const blockB = ["2","5","7","9","11","13","14","16"];
  return (
    <div className={styles[type]}>
      {row.map((ro,roIdx) => (<ul>
        <li>{ro}</li>
        {col.map((co,coIdx) => (
          <li className={
            (roIdx+1)%2 && blockA.includes(coIdx)?
            ([styles.block, styles.seat].join(' ')):
            !((roIdx+1)%2)&& blockB.includes(coIdx)?
            ([styles.block, styles.seat].join(' ')): 
            bookedId.includes(`${ro}${co}`) ? 
            ([styles.booked, styles.seat].join(' ')) : 
            styles.seat
          }>
            <a href="#" data-seat={`${ro}${co}`}>{co}</a>
          </li>
        ))}
      </ul>))}
    </div>
  );
};

export default React.memo(FirstSeat)
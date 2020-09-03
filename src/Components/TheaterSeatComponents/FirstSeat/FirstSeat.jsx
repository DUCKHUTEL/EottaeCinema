// @flow
import React from 'react';
import styles from './FirstSeat.module.scss'
function FirstSeat({bookedSeat, type}) {
  const bookedId = bookedSeat.split(";");
  console.log(bookedId);
  const row = ["a","b","c","d","e","f","g","h","i","j"];
  const col = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17"];
  const blockA = ["1","3","4","6","8","10","12","15","17"];
  const blockB = ["2","5","7","9","11","13","14","16"];
  return (
    <div className={styles[type]}>
      <div className={styles.seatBox}>
        {row.map((ro,roIdx) => (<ul key={roIdx}>
          <li>{ro}</li>
          {col.map((co,coIdx) => (
            <li key={coIdx} className={
              ((roIdx+1)%2 && blockA.includes((coIdx+1)+""))?
              ([styles.block, styles.seat].join(' ')):
              (!((roIdx+1)%2)&& blockB.includes((coIdx+1)+""))?
              ([styles.block, styles.seat].join(' ')): 
              bookedId.includes(`${ro}${co}`) ? 
              ([styles.booked, styles.seat].join(' ')): 
              styles.seat
            }>
              <a href="#" data-seat={`${ro}${co}`}>{co}</a>
            </li>
          ))}
        </ul>))}
      </div>
    </div>
  );
};

export default React.memo(FirstSeat)
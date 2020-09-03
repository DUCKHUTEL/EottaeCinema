// @flow
import React from 'react';
import styles from './SixSeat.module.scss'
function SixthSeat({bookedSeat, type}) {
  const bookedId = bookedSeat.split(";");
  const row = ["a","b","c","d","e","f","g","h"];
  const col = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14"]
  return (
    <div className={styles[type]}>
      <div className={styles.seatBox}>
        {row.map((ro,roIdx) => (<ul>
          <li>{ro}</li>
          {col.map((co,coIdx) => (
            <li className={(roIdx+1)%2&&(coIdx+1)%2?([styles.block, styles.seat].join(' ')):!((roIdx+1)%2)&&!((coIdx+1)%2)?([styles.block, styles.seat].join(' ')): bookedId.includes(`${ro}${co}`) ? ([styles.booked, styles.seat].join(' ')) : styles.seat}>
              <a href="#" data-seat={`${ro}${co}`}>{co}</a>
            </li>
          ))}
        </ul>))}
      </div>
    </div>
  );
};

export default React.memo(SixthSeat)
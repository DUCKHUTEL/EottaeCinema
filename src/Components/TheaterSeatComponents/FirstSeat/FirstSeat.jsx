import React, { useCallback, useState, useEffect } from 'react';
import styles from './FirstSeat.module.scss';
function FirstSeat({
  bookedSeat,
  type,
  peopleCnt = 0,
  clickedSeat = [],
  clickSeat = () => {},
}) {
  const bookedId = bookedSeat.split(';');
  const row = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
  const col = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
  ];
  const blockA = ['1', '3', '4', '6', '8', '10', '12', '15', '17'];
  const blockB = ['2', '5', '7', '9', '11', '13', '14', '16'];

  useEffect(() => {
    clickSeat([]);
  }, [peopleCnt]);
  const choicSeat = useCallback((e) => {
    e.preventDefault();
    if (
      !e.target.matches('a') ||
      peopleCnt === 0 ||
      e.target.parentNode.className.indexOf('block') !== -1 ||
      e.target.parentNode.className.indexOf('booked') !== -1
    )
      return;
    const seatData = e.target.dataset.seat;

    if (clickedSeat.includes(seatData)) {
      const idx = clickedSeat.indexOf(seatData);
      const copy = [...clickedSeat];
      copy.splice(idx, 1);
      clickSeat(copy);
      return;
    }

    clickSeat((state) => [...state, seatData]);
  });

  return (
    <div className={styles[type]}>
      <div
        className={
          peopleCnt !== 0 && peopleCnt === clickedSeat.length
            ? [styles.full, styles.seatBox].join(' ')
            : styles.seatBox
        }
        onClick={choicSeat}
      >
        {row.map((ro, roIdx) => (
          <ul key={roIdx}>
            <li>{ro.toUpperCase()}</li>
            {col.map((co, coIdx) => (
              <li
                key={coIdx}
                className={
                  (roIdx + 1) % 2 && blockA.includes(coIdx + 1 + '')
                    ? [styles.block, styles.seat].join(' ')
                    : !((roIdx + 1) % 2) && blockB.includes(coIdx + 1 + '')
                    ? [styles.block, styles.seat].join(' ')
                    : bookedId.includes(`${ro}${co}`)
                    ? [styles.booked, styles.seat].join(' ')
                    : peopleCnt === 0 || peopleCnt < clickedSeat.length
                    ? styles.seat
                    : clickedSeat.includes(`${ro}${co}`)
                    ? [styles.clicked, styles.seat].join(' ')
                    : styles.seat
                }
              >
                <a href="#" data-seat={`${ro}${co}`}>
                  {co}
                </a>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

export default React.memo(FirstSeat);

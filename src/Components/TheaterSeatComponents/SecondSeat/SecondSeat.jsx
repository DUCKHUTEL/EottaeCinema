import React, { useEffect, useCallback } from 'react';
import styles from './SecondSeat.module.scss';
function SecondSeat({
  bookedSeat,
  type,
  peopleCnt = 0,
  clickedSeat = [],
  clickSeat = () => {},
}) {
  const bookedId = bookedSeat.split(';');
  const row = ['a', 'b', 'c', 'd', 'e', 'f'];
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
  ];

  useEffect(() => {
    clickSeat([]);
  }, [peopleCnt]);

  function blockSeatCalc(roIdx, coIdx, ro, co) {
    // 훌수 줄에 블럭인 경우 || 짝수줄에 블럭인 경우
    if (
      ((roIdx + 1) % 2 && (coIdx + 1) % 2) ||
      (!((roIdx + 1) % 2) && !((coIdx + 1) % 2))
    ) {
      return [styles.block, styles.seat].join(' ');
      // 예매 된 경우, 숫자만큼 클릭 된 경우
    } else if (clickedSeat.includes(`${ro}${co}`)) {
      return [styles.clicked, styles.seat].join(' ');
    } else if (
      bookedId.includes(`${ro}${co}`) ||
      (peopleCnt !== 0) === clickedSeat.length
    ) {
      return [styles.booked, styles.seat].join(' ');
      // 숫자만큼 클릭되지 않은 경우
    }
    // 일반 상태
    return styles.seat;
  }
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
              <li key={coIdx} className={blockSeatCalc(roIdx, coIdx, ro, co)}>
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

export default React.memo(SecondSeat);

import React from 'react';
import styles from './DetailTrailerModal.module.scss';

export default function DetailTrailerModal({ URL, setState }) {
  const dimmerClick = React.useCallback(
    (e) => {
      if (e.target.matches('#trailer-modal-inner')) return;

      setState('none');
    },
    [setState],
  );

  const click = React.useCallback(() => {
    setState('none');
  }, [setState]);

  return (
    <div className={styles['trailer-modal-wrapper']} onClick={dimmerClick}>
      <div className={styles['trailer-modal-inner']} id="trailer-modal-inner">
        <div className={styles['trailer-video']}>
          <iframe
            title="예고편"
            width="980"
            height="517.5"
            src={`https://www.youtube.com/embed/${URL}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <button className={styles.close} onClick={click}></button>
      </div>
    </div>
  );
}

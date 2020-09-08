import React from 'react';
import styles from './MainVideoPortal.module.scss';

function MainVideoPotal() {
  return (
    <div className={styles['video-background']}>
      <iframe
        className={styles['video']}
        title="기기괴괴"
        width="920"
        height="515"
        src="https://www.youtube.com/embed/DNb9QP5kilE"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      >
        <button className={styles['close-btn']}>
          <div className={styles['btn-1']}></div>
          <div className={styles['btn']}></div>
        </button>
      </iframe>
    </div>
  );
}

export default React.memo(MainVideoPotal);

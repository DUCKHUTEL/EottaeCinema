import React, { useCallback } from 'react';
import styles from './MainVideoPortal.module.scss';

const autoPalyUrl = '?rel=0;amp;autoplay=1';
const videos = [
  {
    id: 1,
    title: '뮤턴트',
    src: `https://www.youtube.com/embed/-01Lmk0RKDI${autoPalyUrl}`,
  },
  {
    id: 2,
    title: '터넷',
    src: `https://www.youtube.com/embed/IW_khaePCBE${autoPalyUrl}`,
  },
  {
    id: 3,
    title: '아웃포스트',
    src: `https://www.youtube.com/embed/TSWJB_Fbdgg${autoPalyUrl}`,
  },
  {
    id: 4,
    title: '기기괴괴',
    src: `https://www.youtube.com/embed/DNb9QP5kilE${autoPalyUrl}`,
  },
];

function MainVideoPotal({ hide, id }) {
  const index = id;

  const [matchMovie] = videos.filter((video) => video.id === +index);

  const close = useCallback(() => {
    hide();
  }, []);

  return (
    <div className={styles['video-background']} onClick={close}>
      {
        <iframe
          title={matchMovie.title}
          width="920"
          height="515"
          src={matchMovie.src}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        >
          <button className={styles['close-btn']}>
            <div className={styles['btn-1']}></div>
            <div className={styles['btn']}></div>
          </button>
        </iframe>
      }
    </div>
  );
}

export default React.memo(MainVideoPotal);

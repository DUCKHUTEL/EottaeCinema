import React from 'react';
import styles from './MainVideoPortal.module.scss';

const videos = [
  {
    id: 1,
    title: '뮤턴트',
    src: 'https://www.youtube.com/embed/-01Lmk0RKDI',
  },
  {
    id: 2,
    title: '터넷',
    src: 'https://www.youtube.com/embed/IW_khaePCBE',
  },
  {
    id: 3,
    title: '아웃포스트',
    src: 'https://www.youtube.com/embed/TSWJB_Fbdgg',
  },
  {
    id: 4,
    title: '기기괴괴',
    src: 'https://www.youtube.com/embed/DNb9QP5kilE',
  },
];

function MainVideoPotal({ id, setModal }) {
  const index = id;
  console.log(setModal);

  const [matchMovie] = videos.filter((video) => video.id === +index);

  const click = () => {
    setModal((state) => ({
      ...state,
      clickEvent: false,
      videoId: '',
    }));
  };

  return (
    <div className={styles['video-background']} onClick={click}>
      {
        <iframe
          title={matchMovie.title}
          width="920"
          height="515"
          src={matchMovie.src}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
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

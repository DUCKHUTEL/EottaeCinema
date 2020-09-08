import React from 'react';
import styles from './MainWallpaperComponent.module.scss';
import OwlCarousel from 'react-owl-carousel';

function MainWallpaperComponent() {
  return (
    <section className={styles['wallpaper']}>
      <OwlCarousel
        className="top-visual-box"
        items={1}
        mergeFit
        loop
        nav
        autoplay
        autoplayTimeout={2000}
        autoplaySpeed={500}
      >
        <div className={styles['img-1']}></div>
        <div className={styles['img-2']}></div>
        <div className={styles['img-3']}></div>
        <div className={styles['img-4']}></div>
      </OwlCarousel>

      <div className={styles['control']}>
        {/* <div>
          <button>영화 조종 버튼</button>
        </div> */}
      </div>

      {/* <div className={styles['video-background']}>
        <iframe
          className={styles['video']}
          title="기기괴괴"
          width="920"
          height="515"
          src="https://www.youtube.com/embed/DNb9QP5kilE"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div> */}
    </section>
  );
}

export default React.memo(MainWallpaperComponent);

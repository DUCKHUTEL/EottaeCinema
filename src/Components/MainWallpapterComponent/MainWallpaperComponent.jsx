import React from 'react';
import styles from './MainWallpaperComponent.module.scss';
import OwlCarousel from 'react-owl-carousel';

export default function MainWallpaperComponent() {
  return (
    <section className={styles['wallpaper']}>
      <OwlCarousel
        className={styles['owl-them']}
        items={1}
        loop
        nav
        autoplay
        autoplayTimeout={2000}
        autoplaySpeed={500}
      >
        <div className={styles['img-1']}>
          <button className={styles['play']}>영화 재생버튼</button>
        </div>
        <div className={styles['img-2']}>
          <button className={styles['play']}>영화 재생버튼</button>
        </div>
        <div className={styles['img-3']}>
          <button className={styles['play']}>영화 재생버튼</button>
        </div>
        <div className={styles['img-4']}>
          <button className={styles['play']}>영화 재생버튼</button>
        </div>
      </OwlCarousel>

      <div className={styles['control']}>
        {/* <div>
          <button>영화 조종 버튼</button>
        </div> */}
      </div>
    </section>
  );
}

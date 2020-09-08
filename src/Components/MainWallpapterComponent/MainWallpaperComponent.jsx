import React from 'react';
import styles from './MainWallpaperComponent.module.scss';
import OwlCarousel from 'react-owl-carousel';
import MainVideoPortalContainer from '../../Containers/MainVideoPortalContainer';

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
        <div className={styles['img-1']}>
          {' '}
          <MainVideoPortalContainer />
        </div>
        <div className={styles['img-2']}></div>
        <div className={styles['img-3']}></div>
        <div className={styles['img-4']}></div>
      </OwlCarousel>

      <div className={styles['control']}></div>
    </section>
  );
}

export default React.memo(MainWallpaperComponent);

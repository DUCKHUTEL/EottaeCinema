import React from 'react';
import styles from './MainWallpaperComponent.module.scss';
import OwlCarousel from 'react-owl-carousel';
import MainVideoPortalContainer from '../../Containers/MainVideoPortalContainer';
import { useState } from 'react';

function MainWallpaperComponent() {
  const [images, setImage] = useState({
    index: [1, 2, 3, 4],
  });
  const [modal, setModal] = useState({
    clickEvent: false,
  });

  const click = () => {
    setModal((state) => ({ ...state, clickEvent: !state.clickEvent }));
  };

  return (
    <section className={styles['wallpaper']}>
      <OwlCarousel
        className="top-visual-box"
        items={1}
        mergeFit
        loop
        nav
        autoplay
        autoplayTimeout={3000}
        autoplaySpeed={500}
      >
        {images.index.map((index) => (
          <div className={styles['img-' + index]} onClick={click}>
            {modal.clickEvent && <MainVideoPortalContainer id={index} />}
          </div>
        ))}
      </OwlCarousel>
      <div className={styles['control']}></div>
    </section>
  );
}

export default React.memo(MainWallpaperComponent);

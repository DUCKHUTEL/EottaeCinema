/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import './MainWallpaperComponent.scss';
import { useCallback } from 'react';

const images = [
  { id: 1, title: '뮤턴트', src: 'images/wallpaper/Mutants_1920774.jpg' },
  { id: 2, title: '테넷', src: 'images/wallpaper/Tenet_1920774.jpg' },
  { id: 3, title: '아웃포스트', src: 'images/wallpaper/Outpost_1920774.jpg' },
  {
    id: 4,
    title: '기기괴괴성형수',
    src: 'images/wallpaper/BeautyWater_1920774.jpg',
  },
];

function MainWallpaperComponent({ show }) {
  const open = useCallback((e) => {
    const id = e.currentTarget.id;
    show(id);
  }, []);

  return (
    <section className="main-wallpaper">
      <OwlCarousel
        className="owl-theme"
        items={1}
        loop
        nav
        autoplay
        autoplayTimeout={3000}
        autoplaySpeed={500}
      >
        {images.map((images) => (
          <button
            className="images"
            onClick={open}
            id={images.id}
            key={images.id}
          >
            <img src={images.src} alt={images.title} />
            <div role="button" key={images.id}>
              <img
                className="play-button"
                src="images\icon\btn_main_visual_play.png"
                alt="play-button"
              />
            </div>
          </button>
        ))}
      </OwlCarousel>
      <div className="control"></div>
    </section>
  );
}

export default React.memo(MainWallpaperComponent);

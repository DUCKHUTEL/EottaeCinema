import React from 'react';
import { useMemo } from 'react';
import OwlCarousel from 'react-owl-carousel';
import styles from './showingWallpaperComponent.module.scss';

//id를 10단위로 사용
const wallpapers = [
  {
    id: 10,
    title: '에이바',
    src: 'images/wallpaper/Ava_1920420.jpg',
  },
  {
    id: 11,
    title: '지니어스 독',
    src: 'images/wallpaper/GeniusDog_1920420.jpg',
  },
  {
    id: 12,
    title: '그린랜드',
    src: 'images/wallpaper/Greenland_1920420.jpg',
  },
];

function ShowingWallpaperComponent() {
  return (
    <section className={styles['show-wallpaper']}>
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
        {wallpapers === undefined ||
          wallpapers.map((img, index) => (
            <img
              className="show-img"
              key={index}
              id={img.id}
              src={img.src}
              alt={img.title}
            />
          ))}
      </OwlCarousel>
    </section>
  );
}

export default React.memo(ShowingWallpaperComponent);

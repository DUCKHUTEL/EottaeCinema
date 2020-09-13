import React from 'react';
import { useMemo } from 'react';
import OwlCarousel from 'react-owl-carousel';

//id를 10단위로 사용
const wallpapers = [
  { id: 10, title: '에이바', src: 'imageswallpaperAva_1920420.jpg' },
  { id: 11, title: '지니어스 독', src: 'imageswallpaperGeniusDog_1920420.jpg' },
  { id: 12, title: '그린랜드', src: 'imageswallpaperGreenland_1920420.jpg' },
];

export default function ShowingWallpaperComponent() {
  return (
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
      {wallpapers.map((img) => (
        <img id={img.id} src={img.src} alt={img.title} />
      ))}
    </OwlCarousel>
  );
}

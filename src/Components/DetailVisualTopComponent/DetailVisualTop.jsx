import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import './DetailVisualTop.scss';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function DetailVisualTop({ DBData }) {
  return (
    <div className="top-visual-wrap">
      <OwlCarousel
        className="owl-theme top-visual-box"
        items={1}
        loop
        margin={10}
        nav
        autoplay
        autoplayTimeout={3000}
        autoplaySpeed={500}
      >
        {DBData === undefined ||
          DBData.movieStillCut.split(';').map((url, i) => {
            return (
              <div className="item" key={i}>
                <img
                  src={`https://caching.lottecinema.co.kr//Media/MovieFile/${url.substring(
                    1,
                    url.length - 1,
                  )}`}
                  alt={`트레일러${i}`}
                />
              </div>
            );
          })}
      </OwlCarousel>
    </div>
  );
}

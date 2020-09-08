import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './DetailTrailer.scss';

export default function DetailTrailer({ movieAPIData, moviesDBData }) {
  const APIData = movieAPIData;
  const DBData = moviesDBData;

  console.log(APIData, DBData);

  return (
    <div className="movie-tab-info2">
      <div className="trailer-text">트레일러 ()</div>
      <div className="trailer-slider-wrap">
        <OwlCarousel
          className="owl-theme owl-carousel"
          items={3}
          margin={20}
          nav
          dots={false}
        >
          {APIData.stlls === undefined ||
            APIData.stlls.map((url, index) => {
              return (
                <div className="item" key={index}>
                  {/* <a href="#"> */}
                  <img src={`${url}`} alt="poster" />
                  <div className="trailer-title">
                    <strong>1차 예고편</strong>
                  </div>
                  {/* </a> */}
                </div>
              );
            })}
        </OwlCarousel>
      </div>
    </div>
  );
}

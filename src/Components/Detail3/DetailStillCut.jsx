import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './DetailStillCut.scss';

export default function DetailStillCut({ movieAPIData, DBData }) {
  const APIData = movieAPIData;

  console.log(APIData, DBData);
  return (
    <div className="movie-tab-info3">
      <div className="still-cut-text">포스터 · 스틸컷 ()</div>
      <div className="poster-wrap">
        <OwlCarousel
          className="owl-theme"
          items={4}
          margin={0}
          nav
          dots={false}
          dotData={true}
          URLhashListener={true}
        >
          {APIData.stlls === undefined ||
            APIData.stlls.map((url, index) => {
              return (
                <div className="item" key={index}>
                  <a href="#">
                    <img src={`${url}`} alt="poster" />
                  </a>
                </div>
              );
            })}
        </OwlCarousel>
      </div>
      <div className="still-cut-wrap">
        <OwlCarousel className="owl-theme" items={1} loop margin={20} nav dots>
          {APIData.stlls === undefined ||
            APIData.stlls.map((url, index) => {
              return (
                <div className="item" key={index}>
                  {/* <a href="#"> */}
                  <img src={`${url}`} alt="poster" />
                  {/* </a> */}
                </div>
              );
            })}
        </OwlCarousel>
      </div>
    </div>
  );
}

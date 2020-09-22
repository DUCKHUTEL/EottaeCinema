import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './DetailStillCut.scss';
import { Link } from 'react-router-dom';

export default function DetailStillCut({ DBData }) {
  // const click = (e) => e.preventDefault();

  return (
    <div className="movie-tab-info3">
      <div className="still-cut-text">
        포스터 · 스틸컷 (
        {DBData === undefined || DBData.movieStillCut.split(';').length})
      </div>
      <div className="poster-wrap">
        <OwlCarousel
          className="owl-theme"
          items={4}
          margin={0}
          nav
          dots={false}
          dotData={true}
          // URLhashListener={true}
          // startPosition={'URLHash'}
        >
          {DBData === undefined ||
            DBData.movieStillCut.split(';').map((url, i) => {
              return (
                <div
                  className="item"
                  key={i}
                  // id={`hashStillCut_${i}`}
                  // data-hash={`/detail#hashStillCut_${i}`}
                >
                  <Link
                    to={{
                      pathname: '/detail',
                      state: '테넷',
                      hash: `#hashStillCut_${i}`,
                    }}
                  >
                    <img
                      src={`https://caching.lottecinema.co.kr//Media/MovieFile/${url.substring(
                        1,
                        url.length - 1,
                      )}`}
                      alt={`트레일러${i}`}
                    />
                  </Link>
                </div>
              );
            })}
        </OwlCarousel>
      </div>
      <div className="still-cut-wrap">
        <OwlCarousel
          className="owl-theme"
          items={1}
          loop
          margin={20}
          nav
          dots
          // URLhashListener={true}
          // startPosition={'URLHash'}
        >
          {DBData === undefined ||
            DBData.movieStillCut.split(';').map((url, i) => {
              return (
                <div
                  className="item"
                  key={i}
                  // data-hash={`#hashStillCut_${i}`}
                  // startPosition={'URLHash'}
                >
                  {/* <Route path={`/hashStillCut_${i}`}> */}
                  <img
                    src={`https://caching.lottecinema.co.kr//Media/MovieFile/${url.substring(
                      1,
                      url.length - 1,
                    )}`}
                    alt={`트레일러${i}`}
                  />
                  {/* </Route> */}
                </div>
              );
            })}
        </OwlCarousel>
      </div>
    </div>
  );
}

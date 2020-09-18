import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './DetailTrailer.scss';

function DetailTrailer({ DBData }) {
  return (
    <div className="movie-tab-info2">
      <div className="trailer-text">
        트레일러 (
        {DBData === undefined || DBData.movieTrailerImg.split(';').length})
      </div>
      <div className="trailer-slider-wrap">
        <OwlCarousel
          className="owl-theme owl-carousel"
          items={3}
          margin={20}
          nav
          dots={false}
        >
          {DBData === undefined ||
            DBData.movieTrailerImg.split(';').map((url, i) => {
              return (
                <div className="item" key={i}>
                  <img
                    src={`https://caching.lottecinema.co.kr//Media/MovieFile/${url.substring(
                      1,
                      url.length - 1,
                    )}`}
                    alt={`트레일러${i}`}
                  />
                  <div className="trailer-title">
                    <strong>
                      {DBData.movieTrailerText
                        .split(';')
                        [i].substring(
                          1,
                          DBData.movieTrailerText.split(';')[i].length - 1,
                        )}
                    </strong>
                  </div>
                </div>
              );
            })}
        </OwlCarousel>
        {/* <iframe
          title="예고편"
          width="920"
          height="517.5"
          src="https://www.youtube.com/embed/919GruRSZzE"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        /> */}
      </div>
    </div>
  );
}

export default React.memo(DetailTrailer);

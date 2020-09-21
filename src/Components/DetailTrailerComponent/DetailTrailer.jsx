import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './DetailTrailer.scss';
import DetailTrailerModal from '../DetailTrailerModalComponent/DetailTrailerModal';

function DetailTrailer({ DBData }) {
  const [state, setState] = React.useState('none');
  const [id, setId] = React.useState('none');

  console.log(id);

  const click = (e) => {
    setState('active');
    setId(e.target.id);
  };

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
                  <div
                    className="trailer-button"
                    role="button"
                    id={DBData.movieTrailerURL.replace(/"/gi, '').split(';')[i]}
                    onClick={click}
                  >
                    <img
                      src={`https://caching.lottecinema.co.kr//Media/MovieFile/${url.substring(
                        1,
                        url.length - 1,
                      )}`}
                      alt={`트레일러${i}`}
                      id={
                        DBData.movieTrailerURL.replace(/"/gi, '').split(';')[i]
                      }
                    />
                  </div>
                  <div className="trailer-title">
                    <span className="trailer-title-text">
                      {DBData.movieTrailerText
                        .split(';')
                        [i].substring(
                          1,
                          DBData.movieTrailerText.split(';')[i].length - 1,
                        )}
                    </span>
                  </div>
                </div>
              );
            })}
        </OwlCarousel>
      </div>
      {state === 'active' && (
        <DetailTrailerModal URL={id} setState={setState} />
      )}
    </div>
  );
}

export default React.memo(DetailTrailer);

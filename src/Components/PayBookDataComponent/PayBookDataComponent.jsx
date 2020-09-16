import React from 'react';
import styles from './PayBookDataComponent.module.scss';
import 'moment/locale/ko';
import moment from 'moment';
import FirstSeat from '../TheaterSeatComponents/FirstSeat/FirstSeat';
import SixthSeat from '../TheaterSeatComponents/SixSeat/SixthSeat';
import SecondSeat from '../TheaterSeatComponents/SecondSeat/SecondSeat';
function PayBookDataComponent({
  movies,
  bookingData,
  bookingSeat,
  bookingPeople,
}) {
  console.log(bookingData);
  return (
    bookingData && (
      <article className={styles.payBookDataBox}>
        <h3>예매정보</h3>
        {movies
          .filter((movie) => movie.movieTitle === bookingData.movieTitle)
          .map((bookedMovie) => (
            <div className={styles.posterBox}>
              <img
                className={styles.poster}
                src={bookedMovie.moviePoster}
                alt={bookedMovie.movieTitle + '포스터'}
              ></img>
              <h4 className={styles.bookedMovieTitle}>
                <span className={styles[`ageCut${bookedMovie.ageCut}`]}>
                  {bookedMovie.ageCut === 0 ? '전체' : bookedMovie.ageCut}
                </span>
                <span className={styles.movieTitle}>
                  {bookedMovie.movieTitle}
                </span>
              </h4>
              <p>
                <span>일시</span>
                <span>
                  {bookingData.moviedate.slice(0, 10)}(
                  {moment(bookingData.moviedate.slice(0, 10))
                    .format('dddd')
                    .slice(0, 1)}
                  ){bookingData.movieTime.slice(0, 5)}~
                  {bookingData.movieEndTime.slice(0, 5)}
                </span>
              </p>
              <p>
                <span>영화관</span>
                <span>
                  {bookingData.theaterLocation} {bookingData.stage}관 - 2D
                </span>
              </p>
              <p>
                <span>인원</span>
                <span>
                  {bookingPeople.adult !== 0
                    ? `성인${bookingPeople.adult} `
                    : ''}
                  {bookingPeople.junior !== 0
                    ? `청소년${bookingPeople.junior} `
                    : ''}
                  {bookingPeople.senior !== 0
                    ? `시니어${bookingPeople.senior} `
                    : ''}
                  {bookingPeople.handicaped !== 0
                    ? `장애인${bookingPeople.handicaped}`
                    : ''}
                </span>
              </p>
            </div>
          ))}
        <div className={styles.seatNotice}>
          <p>
            <span>좌석</span>
            <span>{bookingSeat.join()}</span>
          </p>
        </div>
        <div className={styles.seatMiniMap}>
          <p className={styles.screen}>SCREEN</p>
          <p className={styles.floor}>6F</p>
          {bookingData.stage === '1' ? (
            <FirstSeat
              bookedSeat={bookingData.bookedSeat}
              clickedSeat={bookingSeat}
              peopleCnt={bookingPeople.all}
              type="pay"
            />
          ) : bookingData.stage === '6' ? (
            <SixthSeat
              bookedSeat={bookingData.bookedSeat}
              clickedSeat={bookingSeat}
              peopleCnt={bookingPeople.all}
              type="pay"
            />
          ) : (
            <SecondSeat
              bookedSeat={bookingData.bookedSeat}
              clickedSeat={bookingSeat}
              peopleCnt={bookingPeople.all}
              type="pay"
            />
          )}
        </div>
      </article>
    )
  );
}
export default React.memo(PayBookDataComponent);

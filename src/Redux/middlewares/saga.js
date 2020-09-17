import { all } from 'redux-saga/effects';
import { theaterSaga } from '../modules/resTheater';
import { selectDataSaga } from '../modules/select';
import { moviesSaga } from '../modules/movies';
import { bookingSaga } from '../modules/bookingData';
import { movieDataSaga } from '../modules/detail';
import { SignInSaga } from '../modules/authSignIn';
import { reviewsSaga } from '../modules/board';

export default function* rootSaga() {
  yield all([
    SignInSaga(),
    reviewsSaga(),
    theaterSaga(),
    selectDataSaga(),
    moviesSaga(),
    bookingSaga(),
    movieDataSaga(),
  ]);
}

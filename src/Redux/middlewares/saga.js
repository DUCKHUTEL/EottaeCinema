import { all } from 'redux-saga/effects';
import { theaterSaga } from '../modules/resTheater';
import { selectDataSaga } from '../modules/select';
import { moviesSaga } from '../modules/movies';
import { bookingSaga } from '../modules/bookingData';
import { movieDataSaga } from '../modules/detail';
import { SignInSaga } from '../modules/authSignIn';
import { checkDataSaga } from '../modules/checkBookData';
export default function* rootSaga() {
  yield all([
    SignInSaga(),
    theaterSaga(),
    selectDataSaga(),
    moviesSaga(),
    bookingSaga(),
    movieDataSaga(),
    checkDataSaga(),
  ]);
}

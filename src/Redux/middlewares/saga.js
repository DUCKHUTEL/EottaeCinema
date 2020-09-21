import { all } from 'redux-saga/effects';
import { theaterSaga } from '../modules/resTheater';
import { selectDataSaga } from '../modules/select';
import { moviesSaga } from '../modules/movies';
import { bookingSaga } from '../modules/bookingData';
import { movieDataSaga } from '../modules/detail';
import { SignInSaga } from '../modules/signIn';
import { SignUpSaga } from '../modules/signUp';
import { AuthSaga } from '../modules/auth';
export default function* rootSaga() {
  yield all([
    AuthSaga(),
    SignUpSaga(),
    SignInSaga(),
    theaterSaga(),
    selectDataSaga(),
    moviesSaga(),
    bookingSaga(),
    movieDataSaga(),
  ]);
}

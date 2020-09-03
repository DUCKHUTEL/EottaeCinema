import { all } from "redux-saga/effects";
import { theaterSaga } from "../modules/resTheater";
import { selectDataSaga } from "../modules/select";
import { moviesSaga } from "../modules/movies";
import { bookingSaga } from "../modules/bookingData";
import { movieDataSaga } from "../modules/detail";
export default function* rootSaga() {
  yield all([
    theaterSaga(),
    selectDataSaga(),
    moviesSaga(),
    bookingSaga(),
    movieDataSaga(),
  ]);
}

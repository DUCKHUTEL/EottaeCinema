import { all } from "redux-saga/effects";
import { theaterSaga } from "../modules/resTheater";
import { selectDataSaga } from "../modules/select";
import { movieDataSaga } from "../modules/detail";

export default function* rootSaga() {
  yield all([theaterSaga(), selectDataSaga(), movieDataSaga()]);
}

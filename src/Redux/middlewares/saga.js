import {all} from 'redux-saga/effects'
import { theaterSaga } from '../modules/resTheater';
import { selectDataSaga } from '../modules/select';

export default function* rootSaga(){
    yield all([
        theaterSaga(),
        selectDataSaga()
    ]);
}
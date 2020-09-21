import { createActions, handleActions } from 'redux-actions';
import { put, select, takeLatest, take, call } from 'redux-saga/effects';
import bookingService from '../../Services/bookingService';

const initState = {
  id: 0,
  nickName: '',
  bookId: 0,
  bookedSeat: '',
  bookedTime: '',
};

const { start, success, fail } = createActions(
  {
    SUCCESS: (resData) => ({ resData }),
  },
  'START',
  'FAIL',
  {
    prefix: 'checkBookData',
  },
);

const checkBookData = handleActions(
  {
    START: (state) => ({
      id: state.id,
      nickName: state.nickName,
      bookId: state.bookId,
      bookedSeat: state.bookedSeat,
      bookedTime: state.bookedTime,
    }),
    SUCCESS: (state, action) => ({
      id: action.payload.resData.id,
      nickName: action.payload.resData.nickname.trim(),
      bookId: action.payload.resData.bookid,
      bookedSeat: action.payload.resData.bookedSeat,
      bookedTime: action.payload.resData.bookedTime,
    }),
    FAIL: (state) => ({
      id: state.id,
      nickName: state.nickName,
      bookId: state.bookId,
      bookedSeat: state.bookedSeat,
      bookedTime: state.bookedTime,
    }),
  },
  initState,
  {
    prefix: 'checkBookData',
  },
);

export default checkBookData;

const GET_CHECK_DATA_SAGA = `GET_CHECK_DATA_SAGA`;

export const getCheckDataAction = () => ({
  type: GET_CHECK_DATA_SAGA,
});

function* checkBookDataStart() {
  try {
    yield put(start());
    const bookingData = yield select((state) => state.bookingData.bookingData);
    const bookingSeat = yield select((state) => state.bookingData.selectedSeat);
    const { nickName, accessToken } = JSON.parse(localStorage.getItem('user'));
    const { bookId, bookedSeat } = bookingData[0];
    const selecetedSeat = bookingSeat.join(';');
    const newBookedSeat = bookedSeat + ';' + selecetedSeat;
    console.log(bookId, selecetedSeat);
    const paySoBook = yield call(
      bookingService.book,
      bookId,
      newBookedSeat,
      selecetedSeat,
      nickName,
      accessToken,
    );
    console.log(paySoBook);
    yield put(success(paySoBook));
  } catch (e) {
    yield put(fail());
  }
}
export function* checkDataSaga() {
  yield takeLatest(GET_CHECK_DATA_SAGA, checkBookDataStart);
}

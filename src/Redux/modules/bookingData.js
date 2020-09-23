import { createActions, handleActions } from 'redux-actions';
import { put, select, takeLatest } from 'redux-saga/effects';

const initState = {
  bookingData: [],
  selectedSeat: [],
  people: {},
};

const { start, successData, successSeat, fail } = createActions(
  {
    SUCCESS_DATA: (bookingData) => ({ bookingData }),
    SUCCESS_SEAT: (selectedSeat, people) => ({ selectedSeat, people }),
  },
  'START',
  'FAIL',
  {
    prefix: 'bookingData',
  },
);

const bookingData = handleActions(
  {
    START: (state) => ({
      bookingData: state.bookingData,
      selectedSeat: state.selectedSeat,
      people: state.people,
    }),
    SUCCESS_DATA: (state, action) => ({
      bookingData: action.payload.bookingData,
      selectedSeat: state.selectedSeat,
      people: state.people,
    }),
    SUCCESS_SEAT: (state, action) => ({
      bookingData: state.bookingData,
      selectedSeat: action.payload.selectedSeat,
      people: action.payload.people,
    }),
    FAIL: () => ({
      bookingData: [],
      selectedSeat: [],
      people: {},
    }),
  },
  initState,
  {
    prefix: 'bookingData',
  },
);

export default bookingData;

const GET_BOOKING_DATA_START = 'GET_BOOKING_DATA_START';
const GET_BOOKING_SEAT_DATA_START = 'GET_BOOKING_SEAT_DATA_START';

export const getBookingDataAction = (bookingId) => ({
  type: GET_BOOKING_DATA_START,
  payload: { bookingId },
});
export const getBookingSeatDataAction = (selectedSeat, people) => ({
  type: GET_BOOKING_SEAT_DATA_START,
  payload: { selectedSeat, people },
});

function* startGetBookingDataSaga(action) {
  const bookId = action.payload.bookingId;
  yield put(start());

  const movieData = yield select((state) => state.theaters.selectedMoiveData);
  const bookingData = movieData.filter((movie) => movie.bookId === +bookId);

  if (bookingData.length === 0) return yield put(fail());

  yield put(successData(bookingData));
}

function* startGetBookingSeatDataSaga(action) {
  const selectedSeat = action.payload.selectedSeat;
  const people = action.payload.people;
  yield put(start());
  yield put(successSeat(selectedSeat, people));
}

export function* bookingSaga() {
  yield takeLatest(GET_BOOKING_DATA_START, startGetBookingDataSaga);
  yield takeLatest(GET_BOOKING_SEAT_DATA_START, startGetBookingSeatDataSaga);
}

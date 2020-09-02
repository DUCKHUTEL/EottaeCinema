import { createActions, handleActions} from 'redux-actions'
import {put,select, takeLatest, take} from 'redux-saga/effects'

const initState = {
  bookingData:[]
}

const {start, success, fail} = createActions(
  {
    success : (selectedBookData) => ({selectedBookData})
  },
  "START",
  {
    prefix:'bookingData'
  }
)

const bookingData = handleActions(
  {
    START:()=>({
      bookingData:[]
    }),
    SUCCESS:(state,action) =>({
      bookingData: action.payload.bookingData
    }),
  },
  initState,
  {
    prefix:'bookingData'
  }
)

export default bookingData;

const GET_BOOKING_DATA_START ="GET_BOOKING_DATA_START";

export const getBookingDataAction = (bookingId)=>({
  type:GET_BOOKING_DATA_START,
  payload:{bookingId}
});

function* startGetBookingDataSaga(action){
  const bookId = action.payload.bookId;
  yield put(start);
  const movieData = yield select( state =>(state.theaters.selectedMoiveData))
  const bookingData = movieData.filter(movie=>movie.bookId === bookId)
  yield put(success(bookingData))
}
export function* bookingSaga(){
  yield takeLatest(GET_BOOKING_DATA_START,startGetBookingDataSaga)
}
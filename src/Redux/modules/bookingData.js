import { createActions, handleActions} from 'redux-actions'
import {put,select, takeLatest, take} from 'redux-saga/effects'

const initState = {
  bookingData:[]
}

const {start, success, fail} = createActions(
  {
    SUCCESS : (bookingData) => ({bookingData})
  },
  "START",
  "FAIL",
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
    FAIL: ()=>({
      bookingData:[]
    })
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
  const bookId = action.payload.bookingId;
  yield put(start());
  const movieData = yield select( state =>(state.theaters.selectedMoiveData))
  const bookingData = movieData.filter(movie=>(movie.bookId === +bookId));
  console.log(bookingData, movieData)
  if(bookingData.length === 0) return yield put(fail())
  yield put(success(bookingData))
}
export function* bookingSaga(){
  yield takeLatest(GET_BOOKING_DATA_START,startGetBookingDataSaga)
}
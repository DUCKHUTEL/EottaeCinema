import {createActions, handleActions} from 'redux-actions';
import {put,select,takeLatest} from "redux-saga/effects";
import { getSelecetDataAction } from './resTheater';

const initState={
  date:"2020-08-24",
  title:"없음",
  point:"없음",
  error:null
}

const {start,successDate,successTitle,successPoint} = createActions(
  {
    SUCCESS_DATE:(date) =>({date}),
    SUCCESS_TITLE:(title) =>({title}),
    SUCCESS_POINT:(point) =>({point})
  },
  "START",
  {
    prefix:"selcetStore"
  }
)

const selectData = handleActions({
  START:(state)=>({
    date:state.date,
    title:state.title,
    point:state.point,
    error:null
  }),
  SUCCESS_DATE:(state,action)=>({
    date:action.date,
    title:state.title,
    point:state.point,
    error:null
  }),
  SUCCESS_TITLE:(state,action)=>({
    date:state.date,
    title:action.payload.title,
    point:state.point,
    error:null
  }),
  SUCCESS_POINT:(state,action)=>({
    date:state.date,
    title:state.title,
    point:action.payload.point,
    error:null
  }),
  FAIL: (state,action)=>({
    date:state.date,
    title:state.title,
    point:state.point,
    error:action.payload.error
  }),
},
initState,
{
  prefix:"selcetStore"
}
);

export default selectData;

const SET_SELECT_TITLE = "SET_SELECT_TITLE";
const SET_SELECT_DATE = "SET_SELECT_DATE";
const SET_SELECT_POINT = "SET_SELECT_POINT";

export const setSelectTitleAction = (title) => ({
  type: SET_SELECT_TITLE,
  payload: {title}
});

export const setSelectDateAction = (date) => ({
  type: SET_SELECT_DATE,
  payload: {date}
})
export const setSelectPointAction = (point) => ({
  type: SET_SELECT_POINT,
  payload: {point}
})

function* setSelectTitleSaga (action){
  const {title} = action.payload;
  yield put(start());
  yield put(successTitle(title));
  const date = yield select(state=> state.selectData.date);
  const point = yield select(state=> state.selectData.point);
  yield put(getSelecetDataAction(date,title,point));
}

function* setSelectDateSaga (action){
  const {date} = action.payload;
  yield put(start());
  yield put(successDate(date));
  const title = yield select(state=> state.selectData.title);
  const point = yield select(state=> state.selectData.point);
  yield put(getSelecetDataAction(date,title,point));
}

function* setSelectPointSaga (action){
  const {point} = action.payload;
  yield put(start());
  yield put(successPoint(point));
  const date = yield select(state=> state.selectData.date);
  const title = yield select(state=> state.selectData.title);
  console.log(date, title, point)
  yield put(getSelecetDataAction(date,title,point));
}

export function* selectDataSaga(){
  yield takeLatest(SET_SELECT_TITLE,setSelectTitleSaga)
  yield takeLatest(SET_SELECT_DATE,setSelectDateSaga)
  yield takeLatest(SET_SELECT_POINT,setSelectPointSaga)
}
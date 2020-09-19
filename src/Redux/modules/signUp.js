import { takeEvery, put, call, takeLeading, select } from 'redux-saga/effects';
import { createActions, handleActions, createAction } from 'redux-actions';
import UserService from '../../Services/userService';
import TokenService from '../../Services/tokenService';
import userEvent from '@testing-library/user-event';

const prefix = 'EOTTAECINEMA/SIGNUP';

//action
const { start, success, fail, checknick, checkid, password } = createActions(
  {
    SUCCESS: (state) => state,
    CHECKNICK: (result, nickname) => ({ result, nickname }),
    CHECKID: (result, id) => ({ result, id }),
    PASSWORD: (password) => password,
    FAIL: (error) => error,
  },

  'START',
  'FAIL',
  { prefix },
);

///initialState
const initialState = {
  loading: false,
  error: null,
  checkNick: { result: false, nickname: '' },
  checkId: { result: false, id: '' },
  password: 0,
  state: false,
};

//reducer
const reducer = handleActions(
  {
    START: () => ({
      loading: true,
      error: null,
      checkNick: { result: false, nickname: '' },
      checkId: { result: false, id: '' },
      password: 0,
      state: false,
    }),

    SUCCESS: (state, action) => ({
      loading: false,
      error: null,
      checkNick: {
        result: state.checkNick.result,
        nickname: state.checkNick.nickname,
      },
      checkId: { result: state.checkId.result, id: state.checkId.id },
      password: state.password,
      state: action.payload.state,
    }),
    FAIL: (state, action) => ({
      loading: false,
      error: action.payload,
      checkNick: { result: false, nickname: '' },
      checkId: { result: false, id: '' },
      password: 0,
      state: false,
    }),
    CHECKNICK: (state, action) => ({
      loading: false,
      error: null,
      checkNick: {
        result: action.payload.result,
        nickname: action.payload.nickname,
      },
      checkId: {
        result: state.checkId.result,
        id: state.checkId.id,
      },
      password: state.password,
      state: false,
    }),
    CHECKID: (state, action) => ({
      loading: false,
      error: null,
      checkNick: {
        result: state.checkNick.result,
        nickname: state.checkNick.nickname,
      },
      checkId: {
        result: action.payload.result,
        id: action.payload.id,
      },
      password: state.password,
      state: false,
    }),

    PASSWORD: (state, action) => ({
      loading: false,
      error: null,
      checkNick: {
        result: state.checkNick.result,
        nickname: state.checkNick.nickname,
      },
      checkId: {
        result: state.checkId.result,
        id: state.checkId.id,
      },
      password: action.payload.password,
      state: state.state,
    }),
  },
  initialState,
  { prefix },
);

export default reducer;

const START_SIGNUP_SAGA = `${prefix}/START_SIGNUP_SAGA`;
const CHECK_NICK_SAGA = `${prefix}/CHECK_NICK_SAGA`;

export const startSignUpSagaActionCreator = createAction(
  START_SIGNUP_SAGA,
  () => ({}),
);

export const checkNickSagaActionCreator = createAction(
  CHECK_NICK_SAGA,
  (nickname) => nickname,
);

function* checkNickSaga(action) {
  const _nickname = action.payload;
  try {
    const { result, nickname } = yield call(
      UserService.CheckNickName,
      _nickname,
    );
    console.log(result, nickname);
    console.log(checknick);
    yield put(checknick(result, nickname));
  } catch (error) {
    yield put(fail(error));
  }
}

export function* SignUpSaga() {
  yield takeEvery(CHECK_NICK_SAGA, checkNickSaga);
}

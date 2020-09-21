import { takeEvery, put, call, takeLeading, select } from 'redux-saga/effects';
import { createActions, handleActions, createAction } from 'redux-actions';
import UserService from '../../Services/userService';
import TokenService from '../../Services/tokenService';

const prefix = 'EOTTAECINEMA/AUTH';

//action
const { checknick, checkid, checktoken, fail } = createActions(
  {
    CHECKNICK: (result, nickname) => ({ result, nickname }),
    CHECKID: (result, id) => ({ result, id }),
    CHECKTOKEN: (result) => result,
  },
  'FAIL',
  { prefix },
);

///initialState
const initialState = {
  error: null,
  checkNick: { result: '', nickname: '' },
  checkId: { result: '', id: '' },
  token: false,
};

//reducer
const reducer = handleActions(
  {
    CHECKNICK: (state, action) => ({
      ...state,
      error: null,
      checkNick: {
        result: action.payload.result,
        nickname: action.payload.nickname,
      },
    }),

    CHECKID: (state, action) => ({
      ...state,
      error: null,
      checkId: {
        result: action.payload.result,
        id: action.payload.id,
      },
    }),
    CHECKTOKEN: (state, action) => ({
      ...state,
      error: null,
      token: action.payload,
    }),
    FAIL: (state, action) => ({
      error: action.payload,
      checkNick: { result: '', nickname: '' },
      checkId: { result: '', id: '' },
      token: false,
    }),
  },
  initialState,
  { prefix },
);

export default reducer;

const CHECK_NICK_SAGA = `${prefix}/CHECK_NICK_SAGA`;
const CHECK_ID_SAGA = `${prefix}/CHECK_ID_SAGA`;
const CHECK_TOKEN_SAGA = `${prefix}/CHECK_TOKEN_SAGA`;

export const checkNickSagaActionCreator = createAction(
  CHECK_NICK_SAGA,
  (nickname) => nickname,
);

export const checkIdSagaActionCreator = createAction(CHECK_ID_SAGA, (id) => id);

export const checkTokenSagaActionCreator = createAction(
  CHECK_TOKEN_SAGA,
  (token) => token,
);

function* checkNickSaga(action) {
  const _nickname = action.payload;
  try {
    const { result, nickname } = yield call(
      UserService.CheckNickName,
      _nickname,
    );
    yield put(checknick(result, nickname));
  } catch (error) {}
}

function* checkIdSaga(action) {
  const _id = action.payload;
  try {
    const { result, id } = yield call(UserService.CheckId, _id);
    yield put(checkid(result, id));
  } catch (error) {}
}

function* ckeckTokenSaga(action) {}

export function* AuthSaga() {
  yield takeEvery(CHECK_NICK_SAGA, checkNickSaga);
  yield takeEvery(CHECK_ID_SAGA, checkIdSaga);
  yield takeEvery(CHECK_TOKEN_SAGA, ckeckTokenSaga);
}

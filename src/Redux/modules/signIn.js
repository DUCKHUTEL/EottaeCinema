import { push } from 'connected-react-router';
import {
  takeEvery,
  put,
  delay,
  call,
  takeLeading,
  select,
} from 'redux-saga/effects';
import { createActions, handleActions, createAction } from 'redux-actions';
import UserService from '../../Services/userService';
import TokenService from '../../Services/tokenService';

const prefix = 'EOTTAECINEMA/LOUGIN';

//action
const { start, checkid, success, fail, checkToken } = createActions(
  {
    SUCCESS: (nickName, token) => ({ nickName, token }),
    CHECKID: (id) => ({ id }),
  },
  'START',
  'FAIL',
  { prefix },
);

//initialState
const initialState = {
  loading: false,
  error: null,
  id: null,
  nickName: null,
  token: null,
};

//reducer
const reducer = handleActions(
  {
    START: (state) => ({
      loading: true,
      error: null,
      id: state.id,
      nickName: null,
      token: null,
    }),

    CHECKID: (state, action) => ({
      loading: false,
      error: null,
      id: action.payload.id,
      nickName: null,
      token: null,
    }),

    SUCCESS: (state, action) => ({
      loading: false,
      id: state.id,
      token: action.payload.token,
      nickName: action.payload.nickName,
      error: null,
    }),

    FAIL: (state, action) => ({
      loading: false,
      error: action.payload,
      id: false,
      nickName: null,
      token: null,
    }),
  },
  initialState,
  { prefix },
);

export default reducer;

const START_SIGNIN_SAGA = `${prefix}/START_SIGNIN_SAGA`;
const CHECK_ID_SAGA = `${prefix}/CHECK_ID_SAGA`;

export const startSignInSagaActionCreator = createAction(
  START_SIGNIN_SAGA,
  (id, password) => ({ id, password }),
);

export const checkIdSagaActionCreator = createAction(CHECK_ID_SAGA, (id) => ({
  id,
}));

function* startSignInSaga(action) {
  const { id, password } = action.payload;
  try {
    yield put(start());
    const { nickName, accessToken } = yield call(
      UserService.Signin,
      id,
      password,
    );
    TokenService.save({ nickName, accessToken });
    yield put(success(nickName, accessToken));
  } catch (error) {
    yield put(fail(error));
  }
}

function* checkID(action) {
  const id = action.payload.id;
  try {
    const _id = yield call(UserService.CheckId, id);
    yield put(checkid(_id));
  } catch (error) {
    yield put(fail(error));
  }
}

export function* SignInSaga() {
  yield takeEvery(CHECK_ID_SAGA, checkID);
  yield takeEvery(START_SIGNIN_SAGA, startSignInSaga);
}

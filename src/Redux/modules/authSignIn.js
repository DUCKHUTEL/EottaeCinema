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

const prefix = 'EOTTAECINEMA/authSignIn';

//action
const { start, checkid, success, fail } = createActions(
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
  id: false,
  nickName: null,
  token: null,
};

//reducer
const reducer = handleActions(
  {
    START: () => ({
      loading: true,
      error: null,
      id: false,
      nickName: null,
      token: null,
    }),

    CHECKID: (state, action) => ({
      loading: true,
      error: null,
      id: action.payload.id,
      nickName: null,
      token: null,
    }),

    SUCCESS: (state, action) => ({
      loading: false,
      //일단은 true를 쓰고 나중에 바꿀 것
      id: true,
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

export const startSignInSagaActionCreator = createAction(
  START_SIGNIN_SAGA,
  (id, password) => ({ id, password }),
);

function* startSignInSaga(action) {
  const { id, password } = action.payload;
  try {
    yield put(start());
    const { nickName, accessToken } = yield call(
      UserService.Signin,
      id,
      password,
    );
    yield put(success(nickName, accessToken));
  } catch (error) {
    yield put(fail(error));
  }
}

export function* SignInSaga() {
  yield takeEvery(START_SIGNIN_SAGA, startSignInSaga);
}

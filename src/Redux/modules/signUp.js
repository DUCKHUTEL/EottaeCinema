import { takeEvery, put, call, takeLeading, select } from 'redux-saga/effects';
import { createActions, handleActions, createAction } from 'redux-actions';
import UserService from '../../Services/userService';
import TokenService from '../../Services/tokenService';
import { logsuccess } from '../modules/signIn';

const prefix = 'EOTTAECINEMA/SIGNUP';

//action
const { start, success, fail } = createActions(
  {
    SUCCESS: (status) => status,
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
  status: false,
};

//reducer
const reducer = handleActions(
  {
    START: (state) => ({
      loading: true,
      error: null,
      status: false,
    }),

    SUCCESS: (state, action) => ({
      loading: false,
      error: null,
      status: action.payload,
    }),

    FAIL: (state, action) => ({
      loading: false,
      error: action.payload,
      status: false,
    }),
  },
  initialState,
  { prefix },
);

export default reducer;

const START_SIGNUP_SAGA = `${prefix}/START_SIGNUP_SAGA`;

export const startSignUpSagaActionCreator = createAction(
  START_SIGNUP_SAGA,
  (nickname, id, password) => ({ nickname, id, password }),
);

function* startSignUpSaga(action) {
  const _nickname = action.payload.nickname;
  const _id = action.payload.id;
  const _password = action.payload.password;
  try {
    const signUpStatus = yield call(
      UserService.SignUp,
      _nickname,
      _id,
      _password,
    );
    yield put(success(signUpStatus));
    if (!signUpStatus) return;
    const { nickName, accessToken } = yield call(
      UserService.SignIn,
      _id,
      _password,
    );
    yield TokenService.save({ nickName, accessToken });
    yield put(logsuccess(nickName, accessToken));
  } catch (error) {
    console.log(error);
    yield put(fail(error));
  }
}

export function* SignUpSaga() {
  yield takeEvery(START_SIGNUP_SAGA, startSignUpSaga);
}

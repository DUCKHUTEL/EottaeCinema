import { createActions, handleActions, createAction } from 'redux-actions';
import { put, call, takeEvery } from 'redux-saga/effects';
import MoviesServie from '../../Services/moviesServices';

const prefix = 'movies';

const { start, success, fail } = createActions(
  {
    SUCCESS: (movies) => ({ movies }),
  },
  'START',
  'FAIL',
  { prefix },
);

const initialState = {
  loading: false,
  movies: [],
  error: null,
};

//reducer
const movies = handleActions(
  {
    START: () => ({
      loading: true,
      movies: [],
      error: null,
    }),
    SUCCESS: (state, action) => ({
      loading: false,
      movies: action.payload.movies,
      error: null,
    }),
    FAIL: (state, action) => ({
      loading: false,
      movies: [],
      error: action.payload.error,
    }),
  },
  initialState,
  { prefix },
);

export default movies;

//saga

const START_GET_MOVIES_SAGA = `START_GET_MOVIES_SAGA`;

export const startGetMoviesActionCreator = createAction(START_GET_MOVIES_SAGA);

function* startGetMoviesSaga() {
  try {
    yield put(start());
    const movies = yield call(MoviesServie.getMovies);
    yield put(success(movies));
  } catch (error) {
    yield put(fail(error));
  }
}

export function* moviesSaga() {
  yield takeEvery(START_GET_MOVIES_SAGA, startGetMoviesSaga);
}

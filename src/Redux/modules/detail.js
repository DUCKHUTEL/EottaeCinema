import detailService from "../../Services/detailService";
import { put, call, takeEvery } from "redux-saga/effects";

const initialState = {
  loading: false,
  movieData: [],
  error: null,
};

const prefix = "EOTTAECINEMA/detail";

const GET_START = `${prefix}/GET_START`;
const GET_SUCCESS = `${prefix}/GET_SUCCESS`;
const GET_FAIL = `${prefix}/GET_FAIL`;

const startGetMovieData = () => {
  return {
    type: GET_START,
  };
};

const successGetMovieData = (movieData) => {
  return {
    type: GET_SUCCESS,
    movieData,
  };
};

const failGetMovieData = (err) => {
  return {
    type: GET_FAIL,
    err,
  };
};

function* getMovieSaga() {
  yield put(startGetMovieData());
  try {
    const movieData = yield call(detailService.getMovieData);
    yield put(successGetMovieData(movieData));
  } catch (err) {
    yield put(failGetMovieData(err));
  }
}
const GET_MOVIE_SAGA = "GET_MOVIE_SAGA";
export const getMovieDataSagaActionCreator = () => {
  return {
    type: GET_MOVIE_SAGA,
  };
};

export function* movieDataSaga() {
  yield takeEvery(GET_MOVIE_SAGA, getMovieSaga);
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_START:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case GET_SUCCESS:
      return {
        loading: false,
        movieData: action.movieData,
        error: null,
      };

    case GET_FAIL:
      return {
        ...state,
        loading: true,
        error: action.err,
      };

    default:
      return state;
  }
}

// const { start, success, fail } = createActions(
//   {
//     SUCCESS: (movies) => ({ movies }),
//   },
//   "START",
//   "FAIL",
//   { prefix }
// );

// const initialState = {
//   loading: false,
//   movies: [],
//   error: null,
// };

// //reducer
// const detail = handleActions(
//   {
//     START: () => ({
//       loading: true,
//       movies: [],
//       error: null,
//     }),
//     SUCCESS: (state, action) => ({
//       loading: false,
//       movies: action.payload.movies,
//       error: null,
//     }),
//     FAIL: (state, action) => ({
//       loading: false,
//       movies: [],
//       error: action.payload.error,
//     }),
//   },
//   initialState,
//   { prefix }
// );

// export default detail;

// //saga

// const START_GET_MOVIE_SAGA = `START_GET_MOVIE_SAGA`;

// export const getMovieDataSagaActionCreator = createAction(START_GET_MOVIE_SAGA);

// function* startGetMovieSaga() {
//   try {
//     yield put(start());
//     const movies = yield call(detailService.getMovieData);
//     yield put(success(movies));
//   } catch (error) {
//     yield put(fail(error));
//   }
// }

// export function* movieDataSaga() {
//   yield takeEvery(START_GET_MOVIE_SAGA, startGetMovieSaga);
// }

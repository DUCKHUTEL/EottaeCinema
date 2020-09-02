import moiveService from "../../Services/movieService";
import { put, call, takeLatest } from "redux-saga/effects";

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
  yield put(startGetMovieData);
  try {
    const movieData = yield call(moiveService.getMovieData());
    yield put(successGetMovieData(movieData));
    console.log("movieData", movieData);
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
  yield takeLatest(GET_MOVIE_SAGA, getMovieSaga);
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
        movieData: action.payload.movieData,
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

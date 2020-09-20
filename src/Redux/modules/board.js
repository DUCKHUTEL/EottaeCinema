import boardService from '../../Services/boardService';
import { put, call, select, takeEvery, takeLatest } from 'redux-saga/effects';

const initialState = {
  loading: false,
  reviews: [],
  count: 1,
  error: null,
};

const prefix = 'EOTTAECINEMA/board';

const GET_START = `${prefix}/GET_START`;
const GET_SUCCESS = `${prefix}/GET_SUCCESS`;
const GET_FAIL = `${prefix}/GET_FAIL`;
const GET_BY_LIKES_START = `${prefix}/GET_BY_LIKES_START`;
const GET_BY_LIKES_SUCCESS = `${prefix}/GET_BY_LIKES_SUCCESS`;
const GET_BY_LIKES_FAIL = `${prefix}/GET_BY_LIKES_FAIL`;
const ADD_START = `${prefix}/ADD_START`;
const ADD_SUCCESS = `${prefix}/ADD_SUCCESS`;
const ADD_FAIL = `${prefix}/ADD_FAIL`;
const PATCH_START = `${prefix}/PATCH_START`;
const PATCH_SUCCESS = `${prefix}/PATCH_SUCCESS`;
const PATCH_FAIL = `${prefix}/PATCH_FAIL`;
const DELETE_START = `${prefix}/DELETE_START`;
const DELETE_SUCCESS = `${prefix}/DELETE_SUCCESS`;
const DELETE_FAIL = `${prefix}/DELETE_FAIL`;
const CLICK_LIKE_START = `${prefix}/CLICK_LIKE_START`;
const CLICK_LIKE_SUCCESS = `${prefix}/CLICK_LIKE_SUCCESS`;
const CLICK_LIKE_FAIL = `${prefix}/CLICK_LIKE_FAIL`;

const startGetReviews = () => ({
  type: GET_START,
});

const successGetReviews = (reviews, count) => ({
  type: GET_SUCCESS,
  reviews,
  count,
});

const failGetReviews = (err) => ({
  type: GET_FAIL,
  err,
});

const startGetReviewsByLikes = () => ({
  type: GET_BY_LIKES_START,
});

const successGetReviewsByLikes = (reviews) => ({
  type: GET_BY_LIKES_SUCCESS,
  reviews,
});

const failGetReviewsByLikes = (err) => ({
  type: GET_BY_LIKES_FAIL,
  err,
});

const startAddReview = () => ({
  type: ADD_START,
});

const successAddReview = (reviews) => ({
  type: ADD_SUCCESS,
  reviews,
});

const failAddReview = (err) => ({
  type: ADD_FAIL,
  err,
});

const startPatchReview = () => ({
  type: PATCH_START,
});

const successPatchReview = (reviews) => ({
  type: PATCH_SUCCESS,
  reviews,
});

const failPatchReview = (err) => ({
  type: PATCH_FAIL,
  err,
});

const startDeleteReview = () => ({
  type: DELETE_START,
});

const successDeleteReview = (reviews) => ({
  type: DELETE_SUCCESS,
  reviews,
});

const failDeleteReview = (err) => ({
  type: DELETE_FAIL,
  err,
});

const startClickLikeOfReview = () => ({
  type: CLICK_LIKE_START,
});

const successClickLikeOfReview = (reviews) => ({
  type: CLICK_LIKE_SUCCESS,
  reviews,
});

const failClickLikeOfReview = (err) => ({
  type: CLICK_LIKE_FAIL,
  err,
});

function* getReviewsSaga(action) {
  const { movie, count } = action.payload;
  yield put(startGetReviews());

  try {
    const reviews = yield call(boardService.getReviewsOnTime, movie, count);
    yield put(successGetReviews(reviews, count));
  } catch (err) {
    yield put(failGetReviews(err));
  }
}

function* getReviewsByLikesSaga(action) {
  const { movie, count } = action.payload;
  yield put(startGetReviewsByLikes());

  try {
    const reviews = yield call(boardService.getReviewsOnFavor, movie, count);
    yield put(successGetReviewsByLikes(reviews));
  } catch (err) {
    yield put(failGetReviewsByLikes(err));
  }
}

function* addReviewSaga(action) {
  const { movie, count, starPoint, content } = action.payload;
  const token = yield select((state) => state.authSignIn.token);
  const nickName = yield select((state) => state.authSignIn.nickName);
  yield put(startAddReview());

  try {
    yield call(
      boardService.addReview,
      token,
      movie,
      starPoint,
      content,
      nickName,
    );
    const reviews = yield call(boardService.getReviewsOnTime, movie, count);
    console.log('reviews', reviews);

    yield put(successAddReview(reviews));
  } catch (err) {
    yield put(failAddReview(err));
  }
}

function* patchReviewSaga(action) {
  const { movie, count, id, starPoint, content } = action.payload;
  const token = yield select((state) => state.authSignIn.token);
  yield put(startPatchReview());

  try {
    yield call(boardService.editReview, token, id, starPoint, content);
    const reviews = yield call(boardService.getReviewsOnTime, movie, count);
    yield put(successPatchReview(reviews));
  } catch (err) {
    yield put(failPatchReview(err));
  }
}

function* deleteReviewSaga(action) {
  const { movie, count, id } = action.payload;
  const token = yield select((state) => state.authSignIn.token);
  yield put(startDeleteReview());

  try {
    yield call(boardService.deleteReview, token, id);
    const reviews = yield call(boardService.getReviewsOnTime, movie, count);
    yield put(successDeleteReview(reviews));
  } catch (err) {
    yield put(failDeleteReview(err));
  }
}

function* clickLikeReviewSaga(action) {
  const { movie, count, id } = action.payload;
  const token = yield select((state) => state.authSignIn.token);
  const nickName = yield select((state) => state.authSignIn.nickName);
  yield put(startClickLikeOfReview());

  try {
    yield call(boardService.clickLikeReview, token, id, nickName);
    const reviews = yield call(boardService.getReviewsOnTime, movie, count);
    yield put(successClickLikeOfReview(reviews));
  } catch (err) {
    yield put(failClickLikeOfReview(err));
  }
}

const GET_REVIEWS_SAGA = 'GET_REVIEWS_SAGA';
const GET_REVIEWS_BY_LIKES_SAGA = 'GET_REVIEWS_BY_LIKES_SAGA';
const ADD_REVIEW_SAGA = 'ADD_REVIEW_SAGA';
const PATCH_REVIEW_SAGA = 'PATCH_REVIEW_SAGA';
const DELETE_REVIEW_SAGA = 'DELETE_REVIEW_SAGA';
const CLICK_LIKE_REVIEW_SAGA = 'CLICK_LIKE_REVIEW_SAGA';

export const getReviewsSagaActionCreator = (movie, count) => ({
  type: GET_REVIEWS_SAGA,
  payload: {
    movie,
    count,
  },
});

export const getReviewsByLikesSagaActionCreator = (movie, count) => ({
  type: GET_REVIEWS_BY_LIKES_SAGA,
  payload: {
    movie,
    count,
  },
});

export const addReviewSagaActionCreator = (
  movie,
  count,
  starPoint,
  content,
) => ({
  type: ADD_REVIEW_SAGA,
  payload: {
    movie,
    count,
    starPoint,
    content,
  },
});

export const patchReviewSagaActionCreator = (
  movie,
  count,
  id,
  starPoint,
  content,
) => ({
  type: PATCH_REVIEW_SAGA,
  payload: {
    movie,
    count,
    id,
    starPoint,
    content,
  },
});

export const deleteReviewSagaActionCreator = (movie, count, id) => ({
  type: DELETE_REVIEW_SAGA,
  payload: {
    movie,
    count,
    id,
  },
});

export const clickLikeReviewSagaActionCreator = (movie, count, id) => ({
  type: CLICK_LIKE_REVIEW_SAGA,
  payload: {
    movie,
    count,
    id,
  },
});

export function* reviewsSaga() {
  yield takeEvery(GET_REVIEWS_SAGA, getReviewsSaga);
  yield takeLatest(GET_REVIEWS_BY_LIKES_SAGA, getReviewsByLikesSaga);
  yield takeLatest(ADD_REVIEW_SAGA, addReviewSaga);
  yield takeLatest(PATCH_REVIEW_SAGA, patchReviewSaga);
  yield takeLatest(DELETE_REVIEW_SAGA, deleteReviewSaga);
  yield takeEvery(CLICK_LIKE_REVIEW_SAGA, clickLikeReviewSaga);
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
        reviews: action.reviews,
        error: null,
      };

    case GET_FAIL:
      return {
        ...state,
        loading: true,
        error: action.err,
      };

    case GET_BY_LIKES_START:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case GET_BY_LIKES_SUCCESS:
      return {
        loading: false,
        reviews: action.reviews,
        error: null,
      };

    case GET_BY_LIKES_FAIL:
      return {
        ...state,
        loading: true,
        error: action.err,
      };

    case ADD_START:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case ADD_SUCCESS:
      return {
        loading: false,
        reviews: action.reviews,
        error: null,
      };

    case ADD_FAIL:
      return {
        ...state,
        loading: true,
        error: action.err,
      };

    case PATCH_START:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case PATCH_SUCCESS:
      return {
        loading: false,
        reviews: action.reviews,
        error: null,
      };

    case PATCH_FAIL:
      return {
        ...state,
        loading: true,
        error: action.err,
      };

    case DELETE_START:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case DELETE_SUCCESS:
      return {
        loading: false,
        reviews: action.reviews,
        error: null,
      };

    case DELETE_FAIL:
      return {
        ...state,
        loading: true,
        error: action.err,
      };

    case CLICK_LIKE_START:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case CLICK_LIKE_SUCCESS:
      return {
        loading: false,
        reviews: action.reviews,
        error: null,
      };

    case CLICK_LIKE_FAIL:
      return {
        ...state,
        loading: true,
        error: action.err,
      };

    default:
      return state;
  }
}

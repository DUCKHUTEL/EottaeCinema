import axios from 'axios';

const REVIEW_URL = 'https://eottae-cinema.herokuapp.com/';

const GET_ON_TIME = 'boardOnTime';
const GET_ON_FAVOR = 'boardOnFavor';
const ADD_REVIEW = 'appBoard';
const PATCH_REVIEW = 'patchBoard';
const DELETE_REVIEW = 'deleteBoard';
const LIKE_REVIEW = 'like';

export default class boardService {
  static async getReviewsOnTime(movie, count) {
    const res = await axios.get(
      `${REVIEW_URL}${GET_ON_TIME}?movie=${movie}&count=${count}`,
    );

    return res.data;
  }

  static async getReviewsOnFavor(movie, count) {
    const res = await axios.get(
      `${REVIEW_URL}${GET_ON_FAVOR}?movie=${movie}&count=${count}`,
    );

    return res.data;
  }

  static async addReview(token, movie, starPoint, content, nickName) {
    const res = await axios.post(
      `${REVIEW_URL}${ADD_REVIEW}`,
      { movie, starPoint, content, nickName },
      { headers: { Authorization: `Bearer ${token}` } },
    );

    return res.data.update;
  }

  static async editReview(token, id, starPoint, content) {
    const res = await axios.patch(
      `${REVIEW_URL}${PATCH_REVIEW}`,
      { id, starPoint, content },
      { headers: { Authorization: `Bearer ${token}` } },
    );

    return res.data;
  }

  static async deleteReview(token, id) {
    const res = await axios({
      url: `${REVIEW_URL}${DELETE_REVIEW}`,
      method: 'delete',
      data: { id },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  }

  static async clickLikeReview(token, id, nickName) {
    const res = await axios.post(
      `${REVIEW_URL}${LIKE_REVIEW}`,
      { id, nickName },
      { headers: { Authorization: `Bearer ${token}` } },
    );

    return res.data;
  }
}

import axios from 'axios';

const REVIEW_URL = 'https://eottae-cinema.herokuapp.com/';

const ON_TIME = 'boardOnTime';
const ON_FAVOR = 'boardOnFavor';

export default class boardService {
  static async getReviewOnTimeData() {
    const res = await axios.get(`${REVIEW_URL}${ON_TIME}?movie=테넷&count=1`);

    console.log('reviewOnTime', res.data);

    return res.data;
  }

  static async getReviewOnFavorData() {
    const res = await axios.get(`${REVIEW_URL}${ON_FAVOR}?movie=테넷&count=1`);

    console.log('reviewOnFavor', res.data);

    return res.data;
  }
}

import Axios from 'axios';

const url = `https://eottae-cinema.herokuapp.com/bookMovieData`;
export default class theaterService {
  static async getTheater(date, title, point) {
    const res = await Axios.get(
      `${url}?date=${date}&title=${title}&point=${point}`,
    );
    return res.data.sort((a, b) =>
      a['movieTime'] > b['movieTime']
        ? 1
        : a['movieTime'] < b['movieTime']
        ? -1
        : 0,
    );
  }
}

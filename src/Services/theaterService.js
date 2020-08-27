import Axios from 'axios';

export default class theaterService{
  static async getTheater(date,title,point) {
    // console.log(`localhost:9000/bookMovieData?date=${date}&title=${title}&point=${point}`)
    const res = await Axios.get(`https://eottae-cinema.herokuapp.com/bookMovieData?date=${date}&title=${title}&point=${point}`);
    // const res = await Axios.get(`localhost:9000/bookMovieData?date=${date}&title=${title}&point=${point}`);
    return res.data;
  }
}
import axios from "axios";

const MOVIE_URL = "https://eottae-cinema.herokuapp.com/movies";

export default class MoviesServie {
    static async getMovies() {
        const response = await axios.get(MOVIE_URL);
        return response.data;
    }
}

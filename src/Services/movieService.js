import axios from "axios";

const MOVIE_API_URL =
  "http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&ServiceKey=X98WT5556TJ6I705U2O4&title=";

export default class movieService {
  static async getMovieData() {
    const res = await axios.get(`${MOVIE_API_URL}오케이 마담`);

    return res.data;
  }
}

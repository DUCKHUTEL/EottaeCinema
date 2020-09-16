import axios from 'axios';

// const MOVIE_API_URL =
//   'http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&ServiceKey=X98WT5556TJ6I705U2O4&title=';

const MOVIE_API_URL =
  'http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&ServiceKey=17NY1ZR61M5AG3S48QR8&title=';

export default class detailService {
  static async getMovieData(title) {
    if (title === '시크릿 가든') {
      title = '시크릿 가든 비밀의 화원';
    }
    const res = await axios.get(`${MOVIE_API_URL}${title}`);

    console.log('res', res);

    return {
      id: res.data.Data[0].Result[0].movieSeq,
      title: res.data.KMAQuery,
      poster: res.data.Data[0].Result[0].posters.split('|')[0],
      rating: res.data.Data[0].Result[0].rating.substring(0, 2),
      genre: res.data.Data[0].Result[0].genre,
      nation: res.data.Data[0].Result[0].nation,
      rlsDate: res.data.Data[0].Result[0].repRlsDate,
      runtime: res.data.Data[0].Result[0].runtime,
      director: res.data.Data[0].Result[0].directors.director[0].directorNm,
      actors: res.data.Data[0].Result[0].actors.actor.map(
        (actordata) => actordata.actorNm,
      ),
      synopsys: res.data.Data[0].Result[0].plots.plot[0].plotText,
      stlls: res.data.Data[0].Result[0].stlls.split('|'),
    };
  }
}

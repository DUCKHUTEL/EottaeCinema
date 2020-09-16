import Axios from 'axios';

const url = 'https://eottae-cinema.herokuapp.com/book';

export default class bookingService {
  static async book(bookId, bookedSeat, selectedSeat, nickName, token) {
    const bookFunction = Axios.post(
      url,
      { bookId, bookedSeat, selectedSeat, nickName },
      { headers: { Authorization: `Bearer ${token}` } },
    );
    return bookFunction.data;
  }
}

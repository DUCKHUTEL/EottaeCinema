import Axios from 'axios';

const url = 'https://eottae-cinema.herokuapp.com/book';

export default class bookingService {
  static async book(bookId, bookedSeat, selectedSeat, nickName, token) {
    const bookFunction = await Axios.post(
      url,
      { bookId, bookedSeat, selectedSeat, nickName },
      { headers: { Authorization: `Bearer ${token}` } },
    );
    console.log(bookFunction.data);
    return bookFunction.data;
  }
}

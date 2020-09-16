const LOCALSTORAGE_KEY = 'user';

export default class TokenService {
  static save(user) {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(user));
  }
}

const LOCALSTORAGE_KEY = 'user';

export default class TokenService {
  static save(user) {
    if (!user.nickName && !user.accessToken) return;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(user));
  }
  static delete() {
    localStorage.removeItem(LOCALSTORAGE_KEY);
  }
  static get() {
    localStorage.getItem(LOCALSTORAGE_KEY);
  }
}

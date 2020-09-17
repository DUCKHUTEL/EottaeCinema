import axios from 'axios';

const API_URL = 'https://eottae-cinema.herokuapp.com/';
const PAR_SIGNUP = 'signUp';
const PAR_CHECKNIC = 'checkRedunNickName';
const PAR_CHECKID = 'checkRedunId';
const PAR_SIGNIN = 'signIn';
const PAR_CHECKTOKEN = 'checkToken';

export default class UserService {
  static async SignUp(nickName, id, password) {
    const response = await axios.post(`${API_URL}${PAR_SIGNUP}`, {
      nickName,
      id,
      password,
    });

    // 결과 값 true/flase
    console.log(response);
    return response.data.state;
  }

  static async CheckNickName(nickName) {
    const response = await axios.get(`${API_URL}${PAR_CHECKNIC}`, {
      nickName,
    });
    console.log(response.data);
  }

  static async CheckId(id) {
    const response = await axios.get(`${API_URL}${PAR_CHECKID}?id=${id}`);
    console.log(response.data);
    return response.data;
  }
  static async Signin(id, password) {
    const response = await axios.post(`${API_URL}${PAR_SIGNIN}`, {
      id,
      password,
    });
    return response.data;
  }
  static async CheckToken(token) {
    const response = await axios.get(`${API_URL}${PAR_CHECKTOKEN}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
  }
}

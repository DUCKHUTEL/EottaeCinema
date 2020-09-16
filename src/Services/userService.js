import axios from 'axios';

const API_URL = 'https://eottae-cinema.herokuapp.com/';
const PAR_SIGNUP = 'signUp';
const PAR_CHECKNIC = 'checkRedunNickName';
const RAR_CHECKID = 'checkRedunId';
const PAR_SIGNIN = 'signIn';

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
    const response = await axios.post(`${API_URL}${PAR_CHECKNIC}`, {
      nickName,
    });
    console.log(response);
  }

  static async CheckId(id) {
    const response = await axios.post(`${API_URL}${RAR_CHECKID}`, {
      id,
    });
    console.log(response);
  }
  static async Signin(id, password) {
    const response = await axios.post(`${API_URL}${PAR_SIGNIN}`, {
      id,
      password,
    });
    return response.data;
  }
}

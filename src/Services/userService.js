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
    return response.data.status;
  }

  static async SignIn(id, password) {
    const response = await axios.post(`${API_URL}${PAR_SIGNIN}`, {
      id,
      password,
    });
    // 결과 값  {nickName : nickName,accessToken : token}
    return response.data;
  }

  static async CheckNickName(nickName) {
    const response = await axios.get(
      `${API_URL}${PAR_CHECKNIC}?nickName=${nickName}`,
    );
    return { result: response.data, nickname: nickName };
  }

  static async CheckId(id) {
    const response = await axios.get(`${API_URL}${PAR_CHECKID}?id=${id}`);
    return { result: response.data, id: id };
  }

  static async CheckToken(token) {
    const response = await axios.get(`${API_URL}${PAR_CHECKTOKEN}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  }
}

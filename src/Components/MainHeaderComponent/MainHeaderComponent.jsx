import React, { useCallback, useEffect, useState } from 'react';
import MainNavComponent from '../MainNavComponent/MainNavComponent';
import styles from './MainHeaderComponent.module.scss';
import UserService from '../../Services/userService';
import TokenService from '../../Services/tokenService';
import LogInModalContainer from '../../Containers/LogInModalContainer';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { success } from '../../Redux/modules/logModal';

function MainHeaderComponent(props) {
  const [index, path] = props.path;
  const [token, setToken] = useState(false);

  const dispatch = useDispatch();
  const logModal = useSelector((state) => state.logModal.modal);
  const controlLogModal = () => {
    dispatch(success());
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) return;
    if (!UserService.CheckToken(user.accessToken).tokenState) return;
    TokenService.delete();
  }, []);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) return;
    setToken(true);
  }, []);

  const login = () => {
    controlLogModal();
  };

  const logout = () => {};

  return (
    <header className={path ? styles['header-black'] : styles['header-white']}>
      <section className={styles['header-section']}>
        <h1>
          <Link className="a11yHidden" to="/">
            EotteaCinema
          </Link>
        </h1>
        <ul className={styles['sns']}>
          <li className={styles['facebook']}>
            <a
              href="https://www.facebook.com/LotteCinema.kr"
              title="롯데시네마 페이스북 새창열림"
              // eslint-disable-next-line react/jsx-no-target-blank
              target="_blank"
            >
              좋아요
            </a>
          </li>
          <li className={styles['youtube']}>
            <a
              href="https://www.youtube.com/channel/UCi4KivcV3a3yhkycFsjpalQ"
              title="롯데시네마 유튜브 새창열림"
              // eslint-disable-next-line react/jsx-no-target-blank
              target="_blank"
            >
              구독하기
            </a>
          </li>
        </ul>
        <ul className={styles['personal']}>
          <li className={styles['memership']}>멤버십</li>
          <li className={styles['customer']}>고객센터</li>
          <li className={styles['login_logout']}>
            {token ? (
              <button onClick={logout}>로그아웃</button>
            ) : (
              <button onClick={login}>로그인</button>
            )}
          </li>
        </ul>
      </section>
      <MainNavComponent path={path} />
      {logModal && <LogInModalContainer />}
    </header>
  );
}
export default MainHeaderComponent;

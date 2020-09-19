import React, { useRef, useCallback, useEffect, useState } from 'react';
import MainNavComponent from '../MainNavComponent/MainNavComponent';
import styles from './MainHeaderComponent.module.scss';
import UserService from '../../Services/userService';
import TokenService from '../../Services/tokenService';
// import LogInModalPortal from '../Login/LogInModalPortal';
import LogInModalContainer from '../../Containers/LogInModalContainer';
import LogInModalPortal from '../Login/LogInModalPortal';

//-event
//1. scroll
//2. click
//3. usememo

function MainHeaderComponent(props) {
  const [index, path] = props.path;
  const [token, setToken] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

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
    setLoginModal((state) => !state);
  };

  return (
    <header className={path ? styles['header-black'] : styles['header-white']}>
      <section className={styles['header-section']}>
        <h1>
          <a className="a11yHidden" href="http://localhost:3000/">
            EotteaCinema
          </a>
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
            <button onClick={login}>{token ? '로그아웃' : '로그인'}</button>
          </li>
        </ul>
      </section>
      <MainNavComponent path={path} />
      {loginModal && <LogInModalContainer setLoginModal={setLoginModal} />}
    </header>
  );
}
export default MainHeaderComponent;

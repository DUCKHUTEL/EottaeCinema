import React, { useCallback, useRef } from 'react';
import styles from './SignInPortal.module.scss';
import UserService from '../../Services/userService';

function SignInPortal({ login, nickName, token }) {
  const emailRef = useRef();
  const passwordRef = useRef();

  const click = useCallback(() => {
    const id = emailRef.current.value;
    const password = passwordRef.current.value;

    if (id === '' || password === '') return;
    // console.log(login);
    login(id, password);
  }, []);

  return (
    <main>
      <section>
        <div>
          <h1>로그인</h1>
          <input type="text" ref={emailRef}></input>
          <button></button>
          <input type="password" ref={passwordRef}></input>
          <button className={styles['btn-signin']} onClick={click}></button>
        </div>
      </section>
    </main>
  );
}

export default React.memo(SignInPortal);

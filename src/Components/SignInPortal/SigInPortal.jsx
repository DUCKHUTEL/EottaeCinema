import React, { useCallback, useRef } from 'react';
import styles from './SignInPortal.module.scss';
import UserService from '../../Services/userService';
import { Formik, Form, Field } from 'formik';

function SignInPortal({ login, checkId, nickName, token }) {
  const idRef = useRef();
  const passwordRef = useRef();

  const clickLogin = useCallback(() => {
    const id = idRef.current.value;
    const password = passwordRef.current.value;

    if (id === '' || password === '') return;

    // console.log(login);
    login(id, password);
  }, []);

  const clickCheckId = useCallback(() => {
    const id = idRef.current.value;

    if (id === '') return;

    checkId(id);
  }, []);

  return (
    <main>
      <Formik></Formik>
      <section>
        <div>
          <h1>로그인</h1>
          <input type="text" ref={idRef}></input>
          <p></p>
          <button
            className={styles['btn-checkId']}
            onClick={clickCheckId}
          ></button>
          <input type="password" ref={passwordRef}></input>
          <button
            className={styles['btn-signIn']}
            onClick={clickLogin}
          ></button>
          <button className={styles['btn-signUp']}></button>
        </div>
      </section>
    </main>
  );
}

export default React.memo(SignInPortal);

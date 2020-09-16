import React, { useRef, useCallback } from 'react';
import UserService from '../../Services/userService';
import styles from './signUpComponent.module.scss';

function SignUpComponent() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const nicknameRef = useRef();

  const click = useCallback(() => {
    const nickname = nicknameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // if (email === '' || password === '' || nickname === '') return;

    UserService.SignUp(nickname, email, password);
  }, []);

  const checkNickName = useCallback(() => {
    const nickname = nicknameRef.current.value;

    UserService.CheckNickName(nickname);
  }, []);

  const checkEmail = useCallback(() => {
    const email = emailRef.current.value;
    UserService.CheckId(email);
  }, []);

  return (
    <>
      <header>
        <div>
          <h1>
            <img />
          </h1>
        </div>
      </header>
      <main>
        <div>
          <div>
            <lable>닉네임</lable>
            <input type="text" ref={nicknameRef}></input>
            <button
              className={styles['nick-check']}
              onClick={checkNickName}
            ></button>
          </div>
          <div>
            <label>이메일</label>
            <input type="text" ref={emailRef}></input>
            <button
              onClick={checkEmail}
              className={styles['email-check']}
            ></button>
          </div>
          <div>
            <label>패스워드</label>
            <input type="password" ref={passwordRef}></input>
          </div>
        </div>
        <button className={styles['button']} onClick={click}></button>
      </main>
      <footer></footer>
    </>
  );
}

export default React.memo(SignUpComponent);

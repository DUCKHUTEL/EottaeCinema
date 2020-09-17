import React, { useCallback, useRef, useState } from 'react';
import styles from './SignInForm.module.scss';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

const CustomTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className={styles['text-input']} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className={styles['error']}>{meta.error}</div>
      ) : null}
    </>
  );
};

function SignInForm({ login, checkId, nickName, token, setLoginModal }) {
  const [_login, setLogin] = useState(true);

  const onSubmit = useCallback((values, { setSubmitting }) => {
    const { id, password } = values;
    if (id === '' || password === '') return;
    login(id, password);
  }, []);

  function close() {
    setLoginModal.setLoginModal((state) => !state);
  }

  function stateLogin() {
    console.log(token);
    // ? setLoginModal.setLoginModal((state) => !state)
    // : setLogin(false);
  }

  return (
    <Formik
      initialValues={{
        id: '',
        password: '',
      }}
      validationSchema={Yup.object().shape({
        id: Yup.string()
          .matches(
            /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/,
            '이메일 형식에 맞지 않습니다.',
          )
          .required('이메일을 입력해주세요'),
        password: Yup.string()
          .min(6, '6자리 이상 입력해주세요.')
          .max(13, '13자리 미만을 입력해주세요.')
          .required('비밀번호를 입력해주세요.'),
      })}
      onSubmit={onSubmit}
    >
      {(isSubmitting, errors) => (
        <div className={styles['form-background']}>
          <Form className={styles['form']}>
            <h1>로그인</h1>
            <div>{!_login && <div>'로그인에 실패하셨습니다'</div>}</div>
            <CustomTextInput
              label="id"
              name="id"
              type="text"
              placeholder="이메일"
            />
            <CustomTextInput
              label="password"
              name="password"
              type="password"
              placeholder="패스워드"
            />
            <button type="submit" className="login-button" onClick={stateLogin}>
              로그인 버튼
            </button>
            <button>회원가입 버튼</button>
            <button className={styles['close-btn']} onClick={close}>
              X
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default React.memo(SignInForm);

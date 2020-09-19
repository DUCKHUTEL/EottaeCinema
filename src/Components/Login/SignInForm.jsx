import React, { useCallback, useRef, useState } from 'react';
import styles from './SignInForm.module.scss';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import CustomTextInput from '../LogInUtility/CustomTextInput';

function SignInForm({ login, checkId, nickName, token, setLoginModal }) {
  const [_login, setLogin] = useState(true);

  const onSubmit = useCallback(async (values, { setSubmitting }) => {
    const { id, password } = values;
    if (id === '' || password === '') return;
    await login(id, password);

    console.log(token);
    token ? setLoginModal.setLoginModal((state) => !state) : setLogin(false);
  }, []);

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
            '이메일 형식에 맞지 않아요.',
          )
          .required('이메일을 입력해 주세요.'),
        password: Yup.string()
          .min(6, '6자리 이상 입력해 주세요.')
          .max(13, '13자리 미만을 입력해 주세요.')
          .required('비밀번호를 입력해 주세요.'),
      })}
      onSubmit={onSubmit}
    >
      {(isSubmitting, errors) => (
        <Form className={styles['signIn-form']}>
          <h2>로그인</h2>
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
            placeholder="비밀번호"
          />
          <button type="submit" className="login-btn">
            로그인 버튼
          </button>
          <button>회원가입 버튼</button>
        </Form>
      )}
    </Formik>
  );
}

export default React.memo(SignInForm);

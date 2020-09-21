import React, { useCallback, useRef, useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import CustomTextInput from '../LogInUtility/CustomTextInput';
import './Form.scss';

function SignInForm({ login, token, setComponetState, controlLogModal }) {
  const [message, setMaessage] = useState('');

  const onSubmit = useCallback((values, { setSubmitting }) => {
    const { id, password } = values;
    login(id, password);
  }, []);

  const changeSignUp = useCallback(() => {
    console.log(setComponetState);
    setComponetState();
  }, [setComponetState]);

  useEffect(() => {
    if (token === null) return;
    if (!token) setMaessage('로그인에 실패하셨습니다.');
    if (token) controlLogModal((state) => !state);
  }, [token]);
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
        <Form className="login-Modal-form">
          <h2>로그인</h2>
          {message === '' ? null : (
            <div className="error-massage">{message}</div>
          )}
          <section>
            <CustomTextInput
              label="id"
              name="id"
              type="text"
              placeholder="이메일"
            />
          </section>
          <section>
            <CustomTextInput
              label="password"
              name="password"
              type="password"
              placeholder="비밀번호"
            />
          </section>
          <button type="submit" className="sign-btn">
            로그인
          </button>
          <button className="signUp-btn" onClick={changeSignUp}>
            롯데시네마 회원이 아니신가요?
            <br /> 지금 회원가입하세요!
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default React.memo(SignInForm);

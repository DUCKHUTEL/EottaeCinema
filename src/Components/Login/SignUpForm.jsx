import React, { useRef, useCallback, useEffect } from 'react';
import styles from './signUpForm.module.scss';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import CustomTextInput from '../LogInUtility/CustomTextInput';
import { useSelector } from 'react-redux';

function SignUpForm({ checkNick, nickDupResult }) {
  const onSubmit = useCallback((values) => {
    console.log(values);
  }, []);

  useEffect(() => console.log(nickDupResult));
  return (
    <Formik
      initialValues={{
        nickname: '',
        id: '',
        password: '',
      }}
      validationSchema={Yup.object().shape({
        nickname: Yup.string()
          .required('사용하실 닉네임을 입력해 주세요.')
          .min(2, '닉네임은 2글자 이상입니다.')
          .max(6, '닉네임은 6글자를 넘지 못해요.'),
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
      {({ values }) => {
        async function clickNick() {
          try {
            await checkNick(values.nickname);
          } catch (error) {
            console.log(error);
          }
        }

        return (
          <Form className={styles['SignUp-form']}>
            <h2>회원가입</h2>
            <div className="error-massage"></div>
            <section className="input-nick">
              <CustomTextInput
                label="nickname"
                name="nickname"
                type="text"
                placeholder="닉네임"
                values={values.nickname}
              />
              <button className="check-nick" type="button" onClick={clickNick}>
                닉네임 중복
              </button>
            </section>
            <section className="input-id">
              <CustomTextInput
                label="id"
                name="id"
                type="text"
                placeholder="이메일"
              />
              <button className="check-id" type="submit">
                id 중복
              </button>
            </section>
            <section className="input-password">
              <CustomTextInput
                label="password"
                name="password"
                type="password"
                placeholder="비밀번호"
              />
            </section>
            <button type="submit" className="signUp-btn">
              회원가입
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default React.memo(SignUpForm);

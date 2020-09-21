import React, { useCallback, useEffect, useState } from 'react';
import './Form.scss';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import CustomTextInput from '../LogInUtility/CustomTextInput';

function SignUpForm({
  setLoginModal,
  signUp,
  checkNick,
  checkId,
  signUpstatus,
  nickDupResult,
  idDupResult,
}) {
  const [message, setMessage] = useState(
    '닉네임과 이메일은 중복 검사를 해주세요',
  );
  const [nickBtn, setNickBtn] = useState(false);
  const [idBtn, setIdBtn] = useState(false);

  const onSubmit = useCallback(
    (values) => {
      if (!nickBtn || !idBtn) return;
      signUp(values);
    },
    [nickBtn, idBtn, signUp],
  );

  //nickname massage
  useEffect(() => {
    console.log('nickname', nickDupResult);
    if (nickDupResult.result === '') return;
    if (nickDupResult.result) {
      setNickBtn(true);
      setMessage('사용할 수 있는 닉네임이네요!');
    }
    if (!nickDupResult.result) {
      setNickBtn(false);
      setMessage('이미 존재하는 닉네임 입니다!');
    }
  }, [nickDupResult]);

  //id massage
  useEffect(() => {
    console.log('id', idDupResult);
    if (idDupResult.result === '') return;
    if (idDupResult.result) {
      setIdBtn(true);
      setMessage('사용할 수 있는 이메일 입니다.');
    }
    if (!idDupResult.result) {
      setIdBtn(false);
      setMessage('이미 존재하는 이메일 입니다.');
    }
  }, [idDupResult]);

  //signUp massage
  useEffect(() => {
    if (!signUpstatus) return;
    if (signUpstatus) setLoginModal((state) => !state);
  }, [signUpstatus, setLoginModal]);
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
        function clickNick() {
          checkNick(values.nickname);
        }

        function clickId() {
          checkId(values.id);
        }

        return (
          <Form className="login-Modal-form">
            <h2>회원가입</h2>
            <div className="error-massage">{message}</div>
            <section className="input-nick">
              <CustomTextInput
                label="nickname"
                name="nickname"
                type="text"
                placeholder="닉네임"
                values={values.nickname}
              />
              <button
                className={nickBtn ? 'btn-ok' : 'btn-no'}
                type="button"
                onClick={clickNick}
              >
                {nickBtn ? '완료' : '중복'}
              </button>
            </section>
            <section className="input-id">
              <CustomTextInput
                label="id"
                name="id"
                type="text"
                placeholder="이메일"
                values={values.id}
              />
              <button
                className={idBtn ? 'btn-ok' : 'btn-no'}
                type="button"
                onClick={clickId}
              >
                {idBtn ? '완료' : '중복'}
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
            <button type="submit" className="sign-btn" tabIndex="0">
              회원가입
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default React.memo(SignUpForm);

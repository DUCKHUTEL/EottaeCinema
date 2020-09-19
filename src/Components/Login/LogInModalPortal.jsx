import React, { useCallback } from 'react';
import '../../Components/Login/LogInModalPortal.scss';
import SignUpFormContainer from '../../Containers/SignUpFormContainer';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

// 얘는 포탈이면서 안에 로그인과 회원가입을 둘 다 가지고 있을 것.

function LogInModalPortal({ setLoginModal }) {
  const close = useCallback((e) => {
    if (e.target.id !== 'form') return;
    setLoginModal((state) => !state);
  }, []);

  return (
    <div className="form-background" onClick={close} id="form">
      <section className="form-container">
        {/* 이제 이 안에 다른 컴포넌트들이 들어옴 */}
        {/* 버튼은 넣을지 말지 생각 해볼 것 */}
        <div className="form-close-btn"></div>
        <SignInForm />
        <SignUpFormContainer />
      </section>
    </div>
  );
}

export default React.memo(LogInModalPortal);

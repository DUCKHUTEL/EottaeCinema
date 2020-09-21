import React, { useCallback, useState } from 'react';
import '../../Components/Login/LogInModalPortal.scss';
import SignUpFormContainer from '../../Containers/SignUpFormContainer';
import SignInFormContainer from '../../Containers/SignInFormContainer';

// 얘는 포탈이면서 안에 로그인과 회원가입을 둘 다 가지고 있을 것.

function LogInModalPortal({ setLoginModal }) {
  const [componenetState, setComponetState] = useState(false);
  const close = useCallback((e) => {
    if (e.target.id !== 'form') return;
    setLoginModal((state) => !state);
  }, []);

  return (
    <div className="form-background" onClick={close} id="form">
      <section className="form-container">
        <div className="form-close-btn"></div>
        {componenetState ? (
          <SignUpFormContainer setLoginModal={setLoginModal} />
        ) : (
          <SignInFormContainer
            setLoginModal={setLoginModal}
            setComponetState={setComponetState}
          />
        )}
      </section>
    </div>
  );
}

export default React.memo(LogInModalPortal);

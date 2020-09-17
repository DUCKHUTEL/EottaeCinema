import React, { useCallback } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import SignInForm from '../Components/Login/SigInForm';
import {
  checkIdSagaActionCreator,
  startSignInSagaActionCreator,
} from '../Redux/modules/authSignIn';

function SignInPotalContaniner(setLoginModal) {
  const nickName = useSelector((state) => state.authSignIn.nickName);
  const token = useSelector((state) => state.authSignIn.token);
  const reportId = useSelector((state) => state.authSignIn.id);
  const dispatch = useDispatch();

  const checkId = useCallback(
    (id) => {
      dispatch(checkIdSagaActionCreator(id));
    },
    [dispatch],
  );
  const login = useCallback(
    (id, password) => {
      dispatch(startSignInSagaActionCreator(id, password));
    },
    [dispatch],
  );

  return ReactDOM.createPortal(
    <SignInForm
      login={login}
      reportId={reportId}
      nickName={nickName}
      token={token}
      setLoginModal={setLoginModal}
      // DataId={DataId}
    />,
    document.querySelector('#SignPotal'),
  );
}

export default React.memo(SignInPotalContaniner);

import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SignInForm from '../Components/Login/SignInForm';
import { startSignInSagaActionCreator } from '../Redux/modules/signIn';

function SignInPotalContaniner({ setLoginModal, setComponetState }) {
  const token = useSelector((state) => state.signIn.token);
  const dispatch = useDispatch();

  const login = useCallback(
    (id, password) => {
      dispatch(startSignInSagaActionCreator(id, password));
    },
    [dispatch],
  );

  return (
    <SignInForm
      login={login}
      token={token}
      setLoginModal={setLoginModal}
      setComponetState={setComponetState}
    />
  );
}

export default React.memo(SignInPotalContaniner);

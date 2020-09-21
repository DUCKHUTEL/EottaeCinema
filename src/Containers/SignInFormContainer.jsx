import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SignInForm from '../Components/Login/SignInForm';
import { startSignInSagaActionCreator } from '../Redux/modules/signIn';
import { success } from '../Redux/modules/logModal';

function SignInPotalContaniner({ setLoginModal, setComponetState }) {
  const token = useSelector((state) => state.signIn.token);
  // const logModal = useSelector((state) => state.logModal.modal);

  const dispatch = useDispatch();

  const login = useCallback(
    (id, password) => {
      dispatch(startSignInSagaActionCreator(id, password));
    },
    [dispatch],
  );
  const controlLogModal = () => {
    dispatch(success());
  };

  return (
    <SignInForm
      login={login}
      token={token}
      setLoginModal={setLoginModal}
      setComponetState={setComponetState}
      controlLogModal={controlLogModal}
    />
  );
}

export default React.memo(SignInPotalContaniner);

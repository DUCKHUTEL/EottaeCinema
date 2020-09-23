import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SignUpForm from '../Components/Login/SignUpForm';
import { startSignUpSagaActionCreator } from '../Redux/modules/signUp';
import {
  checkNickSagaActionCreator,
  checkIdSagaActionCreator,
} from '../Redux/modules/auth';
import { startSignInSagaActionCreator } from '../Redux/modules/signIn';
import { success } from '../Redux/modules/logModal';

function SignUpFormContainer({ setLoginModal }) {
  const nickDupResult = useSelector((state) => state.auth.checkNick);
  const idDupResult = useSelector((state) => state.auth.checkId);
  const signUpstatus = useSelector((state) => state.signUp.status);
  const logModal = useSelector((state) => state.logModal.modal);

  const dispatch = useDispatch();

  const signUp = useCallback(({ nickname, id, password }) => {
    dispatch(startSignUpSagaActionCreator(nickname, id, password));
  }, []);
  const checkNick = useCallback((nickname) => {
    dispatch(checkNickSagaActionCreator(nickname));
  }, []);
  const checkId = useCallback((id) => {
    dispatch(checkIdSagaActionCreator(id));
  }, []);
  const login = ({ id, password }) => {
    dispatch(startSignInSagaActionCreator(id, password));
  };
  const controlLogModal = () => {
    dispatch(success());
  };

  return (
    <SignUpForm
      setLoginModal={setLoginModal}
      signUp={signUp}
      login={login}
      checkNick={checkNick}
      checkId={checkId}
      logModal={logModal}
      signUpstatus={signUpstatus}
      nickDupResult={nickDupResult}
      idDupResult={idDupResult}
      controlLogModal={controlLogModal}
    />
  );
}

export default React.memo(SignUpFormContainer);

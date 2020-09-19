import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SignUpForm from '../Components/Login/SignUpForm';
import {
  checkNickSagaActionCreator,
  startSignUpSagaActionCreator,
} from '../Redux/modules/signUp';

function SignUpFormContainer() {
  const dispatch = useDispatch();
  const checkNick = useCallback((nickname) => {
    dispatch(checkNickSagaActionCreator(nickname));
  }, []);
  const nickDupResult = useSelector((state) => state.signUp.checkNick);

  return <SignUpForm checkNick={checkNick} nickDupResult={nickDupResult} />;
}

export default React.memo(SignUpFormContainer);

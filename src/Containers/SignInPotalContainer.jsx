import React, { useCallback } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import SignInPortal from '../Components/SignInPortal/SigInPortal';
import { startSignInSagaActionCreator } from '../Redux/modules/authSignIn';

function SignInPotalContaniner() {
  const nickName = useSelector((state) => state.authSignIn.nickName);
  const token = useSelector((state) => state.authSignIn.token);
  const dispatch = useDispatch();
  const login = useCallback(
    (id, password) => {
      dispatch(startSignInSagaActionCreator(id, password));
    },
    [dispatch],
  );

  return ReactDOM.createPortal(
    <SignInPortal login={login} nickName={nickName} token={token} />,
    document.querySelector('#SignPotal'),
  );
}

export default React.memo(SignInPotalContaniner);

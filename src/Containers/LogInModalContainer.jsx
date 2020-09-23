import React from 'react';
import ReactDOM from 'react-dom';
import LogInModalPortal from '../Components/Login/LogInModalPortal';
import { useSelector, useDispatch } from 'react-redux';
import { success } from '../Redux/modules/logModal';
import { init } from '../Redux/modules/signIn';
import { auinit } from '../Redux/modules/auth';

function LogInModalContainer() {
  const dispatch = useDispatch();
  const path = useSelector((state) => state.router.location.pathname);
  const controlLogModal = () => {
    dispatch(success());
  };
  const clear = () => {
    dispatch(init());
    dispatch(auinit());
  };
  return ReactDOM.createPortal(
    <LogInModalPortal
      clear={clear}
      controlLogModal={controlLogModal}
      path={path}
    />,
    document.querySelector('#logInModal'),
  );
}
export default React.memo(LogInModalContainer);

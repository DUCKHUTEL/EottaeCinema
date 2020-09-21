import React from 'react';
import ReactDOM from 'react-dom';
import LogInModalPortal from '../Components/Login/LogInModalPortal';
import { useSelector, useDispatch } from 'react-redux';
import { success } from '../Redux/modules/logModal';

function LogInModalContainer() {
  const logModal = useSelector((state) => state.logModal.modal);

  const dispatch = useDispatch();
  const path = useSelector((state) => state.router.location.pathname);
  console.log(path);
  const controlLogModal = () => {
    dispatch(success());
  };
  return ReactDOM.createPortal(
    <LogInModalPortal
      controlLogModal={controlLogModal}
      path={path}
      logModal={logModal}
    />,
    document.querySelector('#logInModal'),
  );
}
export default React.memo(LogInModalContainer);

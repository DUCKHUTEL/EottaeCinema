import React from 'react';
import ReactDOM from 'react-dom';
import LogInModalPortal from '../Components/Login/LogInModalPortal';
import { useSelector, useDispatch } from 'react-redux';
import { success } from '../Redux/modules/logModal';

function LogInModalContainer() {
  const logModal = useSelector((state) => state.logModal.modal);

  const dispatch = useDispatch();

  const controlLogModal = () => {
    dispatch(success());
  };
  return ReactDOM.createPortal(
    <LogInModalPortal controlLogModal={controlLogModal} logModal={logModal} />,
    document.querySelector('#logInModal'),
  );
}
export default React.memo(LogInModalContainer);

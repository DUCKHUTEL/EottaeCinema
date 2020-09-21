import React from 'react';
import ReactDOM from 'react-dom';
import LogInModalPortal from '../Components/Login/LogInModalPortal';

function LogInModalContainer({ setLoginModal }) {
  return ReactDOM.createPortal(
    <LogInModalPortal setLoginModal={setLoginModal} />,
    document.querySelector('#logInModal'),
  );
}
export default React.memo(LogInModalContainer);

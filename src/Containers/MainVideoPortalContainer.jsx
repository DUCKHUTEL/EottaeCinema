import React from 'react';
import ReactDOM from 'react-dom';
import MainVideoPortal from '../Components/MainVideoPortal/MainVideoPortal';

function MainVideoPortalContainer() {
  return ReactDOM.createPortal(
    <MainVideoPortal />,
    document.querySelector('#mainVideoPortal'),
  );
}

export default React.memo(MainVideoPortalContainer);

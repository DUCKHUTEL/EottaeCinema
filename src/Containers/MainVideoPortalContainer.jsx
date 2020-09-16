import React from 'react';
import ReactDOM from 'react-dom';
import MainVideoPortal from '../Components/MainVideoPortal/MainVideoPortal';

function MainVideoPortalContainer({ id, setModal }) {
  return ReactDOM.createPortal(
    <MainVideoPortal id={id} setModal={setModal} />,
    document.querySelector('#mainVideoPortal'),
  );
}

export default React.memo(MainVideoPortalContainer);

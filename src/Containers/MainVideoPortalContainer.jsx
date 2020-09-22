import React from 'react';
import ReactDOM from 'react-dom';
import MainVideoPortal from '../Components/MainVideoPortal/MainVideoPortal';

function MainVideoPortalContainer({ hide, id }) {
  return ReactDOM.createPortal(
    <MainVideoPortal hide={hide} id={id} />,
    document.querySelector('#mainVideoPortal'),
  );
}

export default React.memo(MainVideoPortalContainer);

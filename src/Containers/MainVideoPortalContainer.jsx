import React from 'react';
import ReactDOM from 'react-dom';
import MainVideoPortal from '../Components/MainVideoPortal/MainVideoPortal';

function MainVideoPortalContainer(props) {
  const id = props.id;
  return ReactDOM.createPortal(
    <MainVideoPortal id={id} />,
    document.querySelector('#mainVideoPortal'),
  );
}

export default React.memo(MainVideoPortalContainer);

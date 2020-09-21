/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from 'react';
import MainHeaderComponent from '../Components/MainHeaderComponent/MainHeaderComponent';
import { useDispatch, useSelector } from 'react-redux';
import { success } from '../Redux/modules/logModal';
import { startLogOutActionCreator } from '../Redux/modules/signIn';

function MainHeaderContainer({ path }) {
  const logModal = useSelector((state) => state.logModal.modal);
  const loginToken = useSelector((state) => state.signIn.token);

  const dispatch = useDispatch();

  const controlLogModal = useCallback(() => {
    dispatch(success());
  }, []);
  const deleteToken = useCallback(() => {
    dispatch(startLogOutActionCreator());
  }, []);

  return (
    <MainHeaderComponent
      path={path}
      logModal={logModal}
      loginToken={loginToken}
      controlLogModal={controlLogModal}
      deleteToken={deleteToken}
    />
  );
}
export default React.memo(MainHeaderContainer);

import React from 'react';
import { Link } from 'react-router-dom';
import MainHeaderContainer from '../../Containers/MainHeaderContainer';
import MainFooterComponent from '../MainFooterComponent/MainFooterComponent';
import styles from './FallbackComponent.module.scss';
function FallbackComponent() {
  const key = 2;

  return (
    <>
      <MainHeaderContainer key={key} />
      <div className={styles.errorPageBox}>
        <p>와! 어떻게 들어오셨어요?</p>
        <p>다시 돌아가시면 되요!</p>
        <Link to="/">홈으로</Link>
      </div>
      <MainFooterComponent />
    </>
  );
}
export default FallbackComponent;

import React from 'react';
import PayBookDataContainer from '../../Containers/PayBookDataContainer';
import PayingContainer from '../../Containers/PayingContainer';
import PayMethodContainer from '../../Containers/PayMethodContainer';
import styles from './PayComponent.module.scss';
function PayComponent({ setStep }) {
  return (
    <div>
      <h3 className={styles.a11yhidden}>결제 페이지</h3>
      <PayBookDataContainer />
      <PayMethodContainer />
      <PayingContainer setStep={setStep} />
    </div>
  );
}
export default React.memo(PayComponent);

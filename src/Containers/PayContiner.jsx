import React from 'react';
import PayComponent from '../Components/PayComponent/PayComponent';
function PayContiner({ setStep }) {
  return <PayComponent setStep={setStep} />;
}
export default React.memo(PayContiner);

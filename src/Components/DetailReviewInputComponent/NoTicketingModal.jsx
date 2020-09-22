import React from 'react';
import styles from './NoTokenModal.module.scss';

export default function NoTicktingModal({ setTicketingState }) {
  const dimmerClick = React.useCallback(
    (e) => {
      if (e.target.matches('#no-token-modal-inner')) return;

      setTicketingState(null);
    },
    [setTicketingState],
  );

  const okClick = () => {
    setTicketingState(null);
  };

  const closeClick = () => {
    setTicketingState(null);
  };

  return (
    <div className={styles['no-token-modal-wrapper']} onClick={dimmerClick}>
      <div
        className={styles['no-token-modal-inner']}
        id={'no-token-modal-inner'}
      >
        <div className={styles['message-box']}>
          <p className={styles.message}>
            예매를 하신 후 이용해 주시기 바랍니다.
          </p>
        </div>
        <div className={styles['no-token-button-box']}>
          <button className={styles.ok} onClick={okClick}>
            확인
          </button>
          <button className={styles.close} onClick={closeClick}>
            취소
          </button>
        </div>
      </div>
    </div>
  );
}

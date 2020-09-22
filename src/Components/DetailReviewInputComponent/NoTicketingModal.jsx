import React from 'react';
import { useCallback } from 'react';
import styles from './NoTokenModal.module.scss';
import { useDispatch } from 'react-redux';
import { getReviewsSagaActionCreator } from '../../Redux/modules/board';
import { history } from '../../Redux/create';

function NoTicktingModal({
  selectedMovie,
  count,
  setTicketingState,
  selectTitle,
}) {
  const dispatch = useDispatch();

  const dimmerClick = useCallback(
    (e) => {
      if (e.target.matches('#no-token-modal-inner')) return;

      setTicketingState(null);
      dispatch(getReviewsSagaActionCreator(selectedMovie, count));
    },
    [dispatch, selectedMovie, count, setTicketingState],
  );

  const okClick = (e) => {
    setTicketingState(null);
    e.preventDefault();
    const title = selectedMovie;
    selectTitle(title);
    history.push('/ticketing', { title: title });
  };

  const closeClick = useCallback(
    (e) => {
      if (e.target.matches('#no-token-modal-inner')) return;

      setTicketingState(null);
      dispatch(getReviewsSagaActionCreator(selectedMovie, count));
    },
    [dispatch, selectedMovie, count, setTicketingState],
  );

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

export default React.memo(NoTicktingModal);

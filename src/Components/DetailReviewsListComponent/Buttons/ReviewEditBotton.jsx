import React from 'react';
import { useState } from 'react';
import styles from '../DetailReviewsList.module.scss';
import DetailReviewEditContainer from '../../../Containers/DetailReviewEditContainer';

function ReviewEditButton({ movie, count, id, starPoint, content, order }) {
  const [state, setState] = useState('none');

  const click = () => {
    setState('active');
  };

  return (
    <>
      <button className={styles.edit} onClick={click}>
        수정
      </button>
      {state === 'active' && (
        <DetailReviewEditContainer
          movie={movie}
          count={count}
          id={id}
          starPoint={starPoint}
          content={content}
          order={order}
          setState={setState}
        />
      )}
    </>
  );
}

export default React.memo(ReviewEditButton);

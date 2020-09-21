import React from 'react';
import styles from '../DetailReviewsList.module.scss';
import DetailReviewEditContainer from '../../../Containers/DetailReviewEditContainer';

export default function ReviewEditButton({
  movie,
  count,
  id,
  starPoint,
  content,
}) {
  const [state, setState] = React.useState('none');

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
          setState={setState}
        />
      )}
    </>
  );
}

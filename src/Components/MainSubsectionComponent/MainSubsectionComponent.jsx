import React from 'react';
import styles from './MainSubsectionComponent.module.scss';

function MainSubsectionComponent() {
  return (
    <section className={styles['sub-section']}>
      <h2 className="a11yHidden">롯데시네마 정보</h2>
      <article className={styles['special']}>
        <header>
          <h3>스페셜관</h3>
          <span>더보기</span>
        </header>
        <ul>
          <li className={styles['special-1']}></li>
          <li className={styles['special-2']}></li>
          <li className={styles['special-3']}></li>
          <li className={styles['special-4']}></li>
          <li className={styles['special-5']}></li>
          <li className={styles['special-6']}></li>
          <li className={styles['special-7']}></li>
          <li className={styles['special-8']}></li>
          <li className={styles['special-9']}></li>
        </ul>
      </article>
      <article className={styles['event']}>
        <header>
          <h3>이벤트</h3>
          <span>더보기</span>
        </header>
        <ul>
          <li className={styles['event-1']}></li>
          <li className={styles['event-2']}></li>
          <li className={styles['event-3']}></li>
          <li className={styles['event-4']}></li>
          <li className={styles['event-5']}></li>
          <li className={styles['event-6']}></li>
        </ul>
      </article>
      <article className={styles['info']}>
        <h3 className="a11yHidden">안내</h3>
        <ul>
          <li className={styles['info-1']}></li>
          <li className={styles['info-2']}></li>
          <li className={styles['info-3']}></li>
          <li className={styles['info-4']}></li>
          <li className={styles['info-5']}></li>
        </ul>
      </article>
    </section>
  );
}

export default React.memo(MainSubsectionComponent);

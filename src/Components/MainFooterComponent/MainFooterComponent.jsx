import React from 'react';
import styles from './MainFooterComponent.module.scss';

export default function MainFooterComponent() {
  return (
    <footer>
      <section className={styles['commercial']}>
        <img
          src="https://caching2.lottecinema.co.kr/lotte_image/2020/BeautyWater/0827/BeautyWater_980180.jpg"
          alt="15세 이상 관람가 기기괴괴 성형수 9월 대개봉 호러 성형 괴담 평점 9.9 너에버 웹툰 원작 역대급 k-애니 비포 앤 애프터 공개"
        ></img>
      </section>
      <section className={styles['footer']}>
        <address>
          <p>팀원 소개 들어갈 것</p>
        </address>
        <ul>
          <li>
            <img src="images\common\footer_award_NCSI5.png" alt="NCSI5" />
          </li>
          <li>
            <img src="images\common\footer_award_kssqi.png" alt="kssqi" />
          </li>
          <li>
            <img src="images\common\footer_award_kcsi.png" alt="kcsi" />
          </li>
          <li>
            <img
              src="images\common\footer_award_greenstar.png"
              alt="greenstar"
            />
          </li>
          <li>
            <img
              src="images\common\footer_award_familyship.png"
              alt="familyship"
            />
          </li>
          <li>
            <img
              src="images\common\footer_award_brandstar.png"
              alt="brandstar"
            />
          </li>
          <li>
            <img
              src="images\common\footer_award_brandcinema.png"
              alt="brandcinema"
            />
          </li>
        </ul>
      </section>
    </footer>
  );
}

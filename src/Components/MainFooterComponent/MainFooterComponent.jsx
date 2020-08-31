import React from "react";
import styles from "./MainFooterComponent.module.scss";

export default function MainFooterComponent() {
    return (
        <footer>
            <section className={styles["commercial"]}>
                <img
                    src="https://caching2.lottecinema.co.kr/lotte_image/2020/BeautyWater/0827/BeautyWater_980180.jpg"
                    alt="15세 이상 관람가 기기괴괴 성형수 9월 대개봉 호러 성형 괴담 평점 9.9 너에버 웹툰 원작 역대급 k-애니 비포 앤 애프터 공개"
                ></img>
            </section>
            <section className={styles["footer"]}>
                <p>footer 내용들어가는 곳</p>
                <ul>
                    <li className={styles["NCSI-1"]}></li>
                    <li className={styles["NCSI-2"]}></li>
                    <li className={styles["NCSI-3"]}></li>
                    <li className={styles["NCSI-4"]}></li>
                    <li className={styles["NCSI-5"]}></li>
                    <li className={styles["NCSI-6"]}></li>
                    <li className={styles["NCSI-7"]}></li>
                </ul>
            </section>
            <div className={styles["background"]}></div>
        </footer>
    );
}

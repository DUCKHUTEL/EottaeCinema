import React from "react";
import styles from "./BookComponent.module.scss";
import BookMoviesContainer from "../../Containers/BookMoviesContainer";
import BookTimeMoviesContainer from "../../Containers/BookTimeMoviesContainer";
import { useState } from "react";
import { useCallback } from "react";
import { LoadingContainer } from "../../Containers/LoadingContainer";
import BookTheaterContainer from "../../Containers/BookTheaterContainer";

function BookComponent() {
    const [steps, setStep] = useState("1");
    const changeStep = useCallback((e) => {
        setStep(e.target.id);
    }, []);

    return (
        <main className={styles.main}>
            <div className={styles.BookContents}>
                <h2 className={styles.a11yHidden}>예매페이지</h2>
                <ul className={styles.steps} onClick={changeStep}>
                    <li
                        className={
                            steps === "1" ? styles.active : styles.disable
                        }
                    >
                        <a href="#" id="1">
                            01
                            <br />
                            상영시간
                        </a>
                    </li>
                    <li
                        className={
                            steps === "2" ? styles.active : styles.disable
                        }
                    >
                        <a href="#" id="2">
                            02
                            <br />
                            인원좌석
                        </a>
                    </li>
                    <li
                        className={
                            steps === "3" ? styles.active : styles.disable
                        }
                    >
                        <a href="#" id="3">
                            03
                            <br />
                            결제
                        </a>
                    </li>
                    <li
                        className={
                            steps === "4" ? styles.active : styles.disable
                        }
                    >
                        <a href="#" id="4">
                            04
                            <br />
                            결제완료
                        </a>
                    </li>
                </ul>
                <section
                    className={steps === "1" ? styles.nowStep : styles.notNow}
                >
                    <BookTheaterContainer />
                    <BookMoviesContainer />
                    <BookTimeMoviesContainer setStep={setStep} />
                </section>
            </div>
            <LoadingContainer />
        </main>
    );
}
export default React.memo(BookComponent);

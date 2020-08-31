import React from "react";
import styles from "./MainMoviesComponent.module.scss";

export default function MainMoviesComponent() {
    return (
        <main className={styles["movies-info"]}>
            <div className={styles["standard-time"]}>08.29 19:15기준</div>

            <ul>
                <li>
                    <figure>
                        <img
                            src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202007/16023_101_1.jpg"
                            alt="다만 악에서 구원하소서"
                        ></img>
                        <figcaption>1</figcaption>
                    </figure>
                    <table>
                        <caption></caption>
                        <thead>
                            <tr>
                                <th colSpan="3">다만 악에서 구원하소서</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>예매율</td>
                                <td>별점</td>
                                <td>하트</td>
                            </tr>
                        </tbody>
                    </table>
                </li>
                <li>
                    <figure>
                        <img
                            src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202007/16023_101_1.jpg"
                            alt="다만 악에서 구원하소서"
                        ></img>
                        <figcaption>2</figcaption>
                    </figure>
                </li>
                <li>
                    <figure>
                        <img
                            src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202007/16023_101_1.jpg"
                            alt="다만 악에서 구원하소서"
                        ></img>
                        <figcaption>3</figcaption>
                    </figure>
                </li>
                <li>
                    <figure>
                        <img
                            src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202007/16023_101_1.jpg"
                            alt="다만 악에서 구원하소서"
                        ></img>
                        <figcaption>4</figcaption>
                    </figure>
                </li>
                <li>
                    <figure>
                        <img
                            src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202007/16023_101_1.jpg"
                            alt="다만 악에서 구원하소서"
                        ></img>
                        <figcaption>5</figcaption>
                    </figure>
                </li>
                <li>
                    <figure>
                        <img
                            src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202007/16023_101_1.jpg"
                            alt="다만 악에서 구원하소서"
                        ></img>
                        <figcaption>6</figcaption>
                    </figure>
                </li>
                <li>
                    <figure>
                        <img
                            src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202007/16023_101_1.jpg"
                            alt="다만 악에서 구원하소서"
                        ></img>
                        <figcaption>7</figcaption>
                    </figure>
                </li>
                <li>
                    <figure>
                        <img
                            src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202007/16023_101_1.jpg"
                            alt="다만 악에서 구원하소서"
                        ></img>
                        <figcaption>8</figcaption>
                    </figure>
                </li>
                <li>
                    <figure>
                        <img
                            src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202007/16023_101_1.jpg"
                            alt="다만 악에서 구원하소서"
                        ></img>
                        <figcaption>9</figcaption>
                    </figure>
                </li>
                <li>
                    <figure>
                        <img
                            src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202007/16023_101_1.jpg"
                            alt="다만 악에서 구원하소서"
                        ></img>
                        <figcaption>10</figcaption>
                    </figure>
                </li>
            </ul>

            <nav>
                <button className={styles["left"]}>이전</button>
                <button className={styles["right"]}>이후</button>
            </nav>
        </main>
    );
}

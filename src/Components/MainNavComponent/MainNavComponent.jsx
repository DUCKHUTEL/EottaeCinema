import React from "react";
import styles from "./MainNavComponent.module.scss";
import { Link } from "react-router-dom";

export default function MainNavComponent() {
    return (
        <div className={styles["bg"]}>
            <nav>
                <ul className={styles["main_nav"]}>
                    <li className={styles["book"]}>
                        {/* <a href="/">예매</a> */}
                        <Link to="/ticketing">예매</Link>
                        <ul>
                            <li>
                                <Link to="/ticketing">예매하기</Link>
                            </li>
                            <li>상영시간표</li>
                            <li>할인안내</li>
                        </ul>
                    </li>
                    <li className={styles["movie"]}>
                        <a href="/">영화</a>
                        <ul>
                            <li>홈</li>
                            <li>현재 상영작</li>
                            <li>상영 예정작</li>
                            <li>아르떼</li>
                            <li>오페라</li>
                            <li>기획전/영화제</li>
                        </ul>
                    </li>
                    <li className={styles["cinema"]}>
                        <a href="/">영화관</a>
                        <ul>
                            <li className={styles["cinema-1"]}>
                                스페셜관
                                <ul>
                                    <li>홈</li>
                                    <li>샤롯데</li>
                                    <li>슈퍼플렉스G</li>
                                    <li>슈퍼플렉스</li>
                                    <li>슈퍼4D</li>
                                    <li>씨네살롱</li>
                                    <li>씨네패밀리</li>
                                    <li>씨네커플</li>
                                    <li>씨네비즈</li>
                                    <li>씨네컴포트(리클라이너)</li>
                                </ul>
                            </li>
                            <li className={styles["cinema-2"]}>
                                서울
                                <ul>
                                    <li>가산디지털</li>
                                    <li>가양</li>
                                    <li>강동</li>
                                    <li>건대입구</li>
                                    <li>김포공항</li>
                                    <li>김포공항</li>
                                    <li>노원</li>
                                    <li>도곡</li>
                                    <li>독산</li>
                                    <li>브로드웨이(신사)</li>
                                    <li>서울대입구</li>
                                    <li>수락산</li>
                                    <li>수유</li>
                                    <li>신도림</li>
                                    <li>신림</li>
                                    <li>에비뉴엘(명동)</li>
                                    <li>영등포</li>
                                    <li>용산</li>
                                    <li>월드타워</li>
                                    <li>은평(롯데몰)</li>
                                    <li>장안</li>
                                    <li>중랑</li>
                                    <li>청량리</li>
                                    <li>합정</li>
                                    <li>홍대입구</li>
                                    <li>황학</li>
                                </ul>
                            </li>
                            <li className={styles["cinema-3"]}>
                                경기/인천
                                <ul>
                                    <li>검단</li>
                                    <li>광교아울렛</li>
                                    <li>광명(광명사거리)</li>
                                    <li>광주터미널</li>
                                    <li>구리아울렛</li>
                                    <li>라페스타</li>
                                    <li>마석</li>
                                    <li>병점</li>
                                    <li>부천(신중동역)</li>
                                    <li>부천역</li>
                                    <li>부평</li>
                                    <li>부평역사</li>
                                    <li>북수원(천천동)</li>
                                    <li>산본피트인</li>
                                    <li>서수원</li>
                                    <li>성남중앙(신흥역)</li>
                                    <li>센트럴락</li>
                                    <li>송탄</li>
                                    <li>수원(수원역)</li>
                                    <li>수지</li>
                                    <li>시화</li>
                                    <li>안산</li>
                                    <li>안산고잔</li>
                                    <li>안성</li>
                                    <li>안양(안양역)</li>
                                    <li>안양일번가</li>
                                    <li>양주고읍</li>
                                    <li>영종하늘도시</li>
                                    <li>오산(원동)</li>
                                    <li>용인기흥</li>
                                    <li>용인역북</li>
                                    <li>위례</li>
                                    <li>의정부민락</li>
                                    <li>인덕원</li>
                                    <li>인천아시아드</li>
                                    <li>인천터미널</li>
                                    <li>주엽</li>
                                    <li>진접</li>
                                    <li>파주아울렛</li>
                                    <li>파주운정</li>
                                    <li>평촌(범계역)</li>
                                    <li>평택비전(뉴코아)</li>
                                    <li>향남</li>
                                </ul>
                            </li>
                            <li className={styles["cinema-4"]}>
                                충청/대전
                                <ul>
                                    <li>대전(백화점)</li>
                                    <li>대전관저</li>
                                    <li>대전둔산(월평동)</li>
                                    <li>대전센트럴</li>
                                    <li>서산</li>
                                    <li>서청주(아울렛)</li>
                                    <li>아산터미널</li>
                                    <li>청주(성안길)</li>
                                    <li>청주용암</li>
                                    <li>충주</li>
                                </ul>
                            </li>
                            <li className={styles["cinema-5"]}>
                                전라/광주
                                <ul>
                                    <li>광주(백화점)</li>
                                    <li>광주광산</li>
                                    <li>군산나운</li>
                                    <li>군산몰</li>
                                    <li>수완(아울렛)</li>
                                    <li>익산모현</li>
                                    <li>전주(백화점)</li>
                                    <li>전주평화</li>
                                    <li>충장로</li>
                                </ul>
                            </li>
                            <li className={styles["cinema-6"]}>
                                경북/대구
                                <ul>
                                    <li>경산</li>
                                    <li>경주</li>
                                    <li>구미프라임1번가</li>
                                    <li>구미공단</li>
                                    <li>대구광장</li>
                                    <li>대구울하</li>
                                    <li>대구현풍</li>
                                    <li>동성로</li>
                                    <li>상인</li>
                                    <li>상주</li>
                                    <li>성서</li>
                                    <li>영주</li>
                                    <li>포항</li>
                                    <li>프리미엄구미센트럴</li>
                                    <li>프리미엄안동</li>
                                    <li>프리미엄칠곡</li>
                                </ul>
                            </li>
                            <li className={styles["cinema-7"]}>
                                경남/부산/울산
                                <ul>
                                    <li>거창</li>
                                    <li>광복</li>
                                    <li>김해부원</li>
                                    <li>김해아울렛(장유)</li>
                                    <li>대영</li>
                                    <li>동래</li>
                                    <li>동부산아울렛</li>
                                    <li>마산(합성동)</li>
                                    <li>부산본점</li>
                                    <li>사상</li>
                                    <li>서면(전포동)</li>
                                    <li>센텀시티</li>
                                    <li>엠비씨네(진주)</li>
                                    <li>울산(백화점)</li>
                                    <li>울산성남</li>
                                    <li>진주혁신(롯데몰)</li>
                                    <li>진해</li>
                                    <li>창원</li>
                                    <li>통영</li>
                                    <li>프리미엄경남대</li>
                                    <li>프리미엄진주(중안)</li>
                                    <li>프리미엄해운대(장산역)</li>
                                </ul>
                            </li>
                            <li className={styles["cinema-8"]}>
                                강원
                                <ul>
                                    <li>남원주</li>
                                    <li>동해</li>
                                    <li>원주무실</li>
                                    <li>춘천</li>
                                </ul>
                            </li>
                            <li className={styles["cinema-9"]}>
                                제주
                                <ul>
                                    <li>서귀포</li>
                                    <li>제주삼화지구</li>
                                    <li>제주아라</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className={styles["event"]}>
                        <a href="/">이벤트</a>
                        <ul>
                            <li>홈</li>
                            <li>영화</li>
                            <li>시사회/무대인사</li>
                            <li>HOT</li>
                            <li>제휴할인</li>
                            <li>우리동네영화관</li>
                        </ul>
                    </li>
                    <li className={styles["store"]}>
                        <a href="/">스토어</a>
                        <ul>
                            <li>베스트</li>
                            <li>관람권</li>
                            <li>스낵음료</li>
                            <li>SALE</li>
                        </ul>
                    </li>
                </ul>
                <ul className={styles["menu"]}>
                    <li className={styles["my"]}>
                        <a href="/">마이</a>
                    </li>
                    <li className={styles["reservation"]}>
                        <Link to="/ticketing">바로예매</Link>
                    </li>
                    <li className={styles["burger-bar"]}>
                        <button>네비게이션바 입니다</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

import React from 'react';
import styles from './CheckComponent.module.scss';
import 'moment/locale/ko';
import moment from 'moment';

function CheckComponent({
  checkData,
  poster,
  bookingSeat,
  bookingData,
  bookingPeople,
}) {
  const { nickName, bookId } = checkData;
  return (
    checkData &&
    bookingData && (
      <article className={styles.checkDataBox}>
        <h3>결제완료</h3>
        <div className={styles.checkBoxHeader}>
          <span className={styles.payIcon}></span>
          <p>{nickName} 회원님, 결제가 성공적으로 완료되었습니다.</p>
        </div>
        <div className={styles.checkBoxBody}>
          <div className={styles.checkData}>
            <img src={poster} alt="예매하신 영화의 포스터입니다." />
            <div className={styles.checkDataDetail}>
              <p>
                <span>예매번호</span>
                <span>{checkData.id}</span>
              </p>
              <p>
                <span>상영일시</span>
                <span>
                  {bookingData.moviedate.slice(0, 10)}(
                  {moment(bookingData.moviedate.slice(0, 10))
                    .format('dddd')
                    .slice(0, 1)}
                  ){bookingData.movieTime.slice(0, 5)}~
                  {bookingData.movieEndTime.slice(0, 5)}
                </span>
              </p>
              <p>
                <span>상영관</span>
                <span>
                  {bookingData.theaterLocation}
                  {bookingData.stage}관
                </span>
              </p>
              <p>
                <span>관람인원</span>
                <span>
                  {bookingPeople.adult ? `성인${bookingPeople.adult}` : ''}
                  {bookingPeople.junior ? `청소년${bookingPeople.junior}` : ''}
                  {bookingPeople.senior ? `시니어${bookingPeople.senior}` : ''}
                  {bookingPeople.handicaped
                    ? `장애인${bookingPeople.handicaped}`
                    : ''}
                </span>
              </p>
              <p>
                <span>좌석</span>
                <span>{bookingSeat.join()}</span>
              </p>
              <button className={styles.getTicket}>
                휴대폰으로 바로 티켓받기
              </button>
            </div>
          </div>
          <div className={styles.payData}>
            <p>
              <span className={styles.cost}>
                주문금액
                <span className={styles.coast}>
                  {bookingPeople.all * 10000}원
                </span>
              </span>
              <span className={styles.minus}></span>
              <span className={styles.discountCost}>
                할인금액
                <span>0원</span>
              </span>
              <span className={styles.result}></span>
              <span className={styles.resCose}>
                총 결제 금액
                <span>{bookingPeople.all * 10000}원</span>
              </span>
            </p>
          </div>
          <div className={styles.payMethod}>
            <span className={styles.payBy}>신용카드</span>
            <span className={styles.useBy}>카카오페이 온라인</span>
          </div>
        </div>
        <ul className={styles.notice}>
          <li className={styles.important}>
            예매 취소는 상영 시작 20분 전 까지 온라인에서 가능합니다.
          </li>
          <li className={styles.important}>
            상영시작 20분전 이후 부터는 영화관 현장에서만 취소 가능합니다.
          </li>
          <li className={styles.important}>
            무대인사 예매 취소는 상영시작 24시간 전 까지 가능합니다.
          </li>
          <li>적입 예정 L.POINT는 양화 관람 다음 날 적립 됩니다.</li>
          <li>
            예고편 상영 등 사정에 의해 본 영화 시작이 10여분 정도 차이 날 수
            있습니다.
          </li>
          <li>
            개인정보 보호 정책에 따라 주민번호로 예매 티켓을 찾을 수 없습니다.
            꼭 예매 번호를 확인해주세요
          </li>
          <li>
            스토어에서 구매한 상품은 마이페이지 > 예매/구매 내역에서 확인 및
            사용 할 수 있습니다.
          </li>
        </ul>
      </article>
    )
  );
}
export default React.memo(CheckComponent);

// @flow
import React from 'react';
import { AllTheaterPointContainer } from '../../Containers/AllTheaterPointContainer';
function BookComponent(props) {
  return (
    <main>
      <h2>예매페이지</h2>
      <ul>
        <li>
          <button>상영시간</button>
        </li>
        <li>
          <button>인원좌석</button>
        </li>
        <li>
          <button>결제</button>
        </li>
        <li>
          <button>결제완료</button>
        </li>
      </ul>
      <section>
        <AllTheaterPointContainer/>
        {/* <BookTheaterContainer/> */}
        {/* <BookMoviesContainer/> */}
      </section>
    </main>
  );
};
export default BookComponent
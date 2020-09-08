import React, { useRef, useCallback, useEffect } from 'react';
import MainNavComponent from '../MainNavComponent/MainNavComponent';
import styles from './MainHeaderComponent.module.scss';

//-event
//1. scroll
//2. click
//3. usememo
export default function MainHeaderComponent(props) {
  console.log(props);
  const [index, path] = props.path;
  const useScroll = (e) => {
    console.log(e);
    const dom = useRef();
  };

  // useEffect(() => {
  //     window.addEventListener("scroll", useScroll);
  // });

  // const useScroll = () => {
  //     const dom = useRef();

  //         const handleScroll = useCallback(([entry]) => {

  //             const {current} = dom;

  //             if(entry.isIntersecting){
  //                 current.style.display = 'none';
  //             }

  //     }, []);

  //     // useEffect(()=>{
  //     //     let observer;
  //     //     const { current } = dom;

  //     //     if (current){

  //     //     }
  //     // })
  // };

  return (
    <header
      className={path ? styles['header-black'] : styles['header-white']}
      onScroll={useScroll}
    >
      <section className={styles['header-section']}>
        <h1>
          <a className="a11yHidden" href="http://localhost:3000/">
            EotteaCinema
          </a>
        </h1>
        <ul className={styles['sns']}>
          <li className={styles['facebook']}>
            <a
              href="https://www.facebook.com/LotteCinema.kr"
              title="롯데시네마 페이스북 새창열림"
              // eslint-disable-next-line react/jsx-no-target-blank
              target="_blank"
            >
              좋아요
            </a>
          </li>
          <li className={styles['youtube']}>
            <a
              href="https://www.youtube.com/channel/UCi4KivcV3a3yhkycFsjpalQ"
              title="롯데시네마 유튜브 새창열림"
              // eslint-disable-next-line react/jsx-no-target-blank
              target="_blank"
            >
              구독하기
            </a>
          </li>
        </ul>
        <ul className={styles['personal']}>
          <li className={styles['memership']}>멤버십</li>
          <li className={styles['customer']}>고객센터</li>
          <li className={styles['login_logout']}>로그아웃</li>
        </ul>
      </section>
      <MainNavComponent path={path} />
    </header>
  );
}

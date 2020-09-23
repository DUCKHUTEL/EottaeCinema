# :ticket:EottaeCinema

---

##프로젝트 기간
2020.08.24 ~ 2020.09.23

조장 백승일 [winbigcoms](https://github.com/winbigcoms)
조원 최예린 [soda-cloud](https://github.com/soda-cloud)
조원 류동우 [Detrox20](https://github.com/Detrox20)

## 롯데시네마 클론 코딩 프로젝트

더 나은 롯데시네마 사이트 만들어보기 ! :fist_left:

[배포 주소](https://eottaecinema.herokuapp.com/)

[github 주소](https://github.com/duckhutel)

![ottea](https://user-images.githubusercontent.com/62285847/93991782-9fd3d280-fdc7-11ea-84c5-7b7909fe0170.png)

## 주제

1. react/ redux 다루기

2. 최적화가 무엇인지 생각해보기

3. 재사용 가능한 컴포넌트 만들기

4. 소통하며 팀 프로젝트하기! :blue_heart:

## 설치 및 실행

- font-End

  ```
  git clone https://github.com/DUCKHUTEL/EottaeCinema.git
  ```

- back-End

  ```
  git clone https://github.com/DUCKHUTEL/EottaeCinema_server.git
  ```

## 기능

1. JWT를 이용한 회원가입/로그인 기능
2. 날짜,영화,영화관으로 영화 검색
3. 좌석 선택 및 예매( 실제 결제는 불가. 결제와 예매 페이지 view 구성)
4. 영화 평가란의 CRUD

## 구성

[flowchart](https://drive.google.com/file/d/1DRJ0QkhGflT3xN_JVAXehGLoW2AcHe0Z/view?usp=sharing)

![Untitled Diagram](https://user-images.githubusercontent.com/62285847/93993774-1c67b080-fdca-11ea-9c41-48c0e522e484.png)

## 서버 및 데이터 베이스 관리

[서버 및 데이터 베이스 관리](https://www.notion.so/Server-Database-62f4c7cb69b4441495b867b6f850942c)

[서버 gitHub](https://github.com/DUCKHUTEL/EottaeCinema_server)

## 진행상황

| 날짜  | 진행상황                                                                                                                                                                |
| ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 08/24 | 컴포넌트 ,heroku를 이용하여 express서버, clearDB를 이용해 mysql을 이용해 서버 배포 및 DB 입력 완료(영화관,영화,예매정보 테이블)                                         |
| 08/25 | 페이지 별 필요한 데이터 및 redux 스토어 구상하기                                                                                                                        |
| 08/26 | 각 페이지 별 컴포넌트 구상 및 롯데시네마 페이지에서 필요 이미지소스 정리                                                                                                |
| 08/28 | 영화선택, 좌석 선택, 예매 레이아웃 작업 완료                                                                                                                            |
| 08/31 | 로그인 및 회원가입을 위한 DB테이블 생성 및 서버 API작업(아이디 중복검사,닉네임 중복검사, 토큰 유효성확인,회원가입,로그인), 클라이언트 로그인 및 회원가입 기능 작업 시작 |
| 09/01 | 상세 페이지 레이아웃 작업 완료, 기능 구현 시작                                                                                                                          |
| 09/02 | 헤더 레이아웃 작업 완료, 기능 구현 시작                                                                                                                                 |
| 09/07 | 영화 평가 게시판을 위한 DB테이블 생성 및 서버 API작업(추천수 혹은 최신순으로 게시판 가져오기,게시글 쓰기, 게시글 수정하기, 게시글 삭제하기, 좋아요 버튼 클릭하기)       |
| 09/10 | 상세페이지 필요 데이터 DB에 추가                                                                                                                                        |
| 09/11 | 헤더 페이지 이동 및 로그인 기능 완료                                                                                                                                    |
| 09/14 | 결제, 결제 확인 페이지 레이아웃 작업 완료                                                                                                                               |
| 09/15 | 결제 및 결제 확인 페이지 완성                                                                                                                                           |
| 09/16 | 클라이언트 0.8 버전 배포                                                                                                                                                |
| 09/17 | 로그아웃 기능 추가                                                                                                                                                      |
| 09/18 | 상세 페이지 완료                                                                                                                                                        |
| 09/21 | 결제확인 페이지에 버튼 추가 및 뷰 완성                                                                                                                                  |
| 09/22 | 에러체크 및 코드정리, 발표 준비                                                                                                                                         |
| 09/23 | 최종 배포 및 발표 :fist_left:                                                                                                                                           |

## 사용 기술

라이선스 - MIT

1. html, css, Javascript
2. react
3. redux
4. redux-saga
5. axios
6. antd
7. node-sass
8. scss
9. redux-actions
10. moment
11. formik
12. yup
13. deepmerge
14. connected-react-router
15. react-owl-carousel
16. react-modal
17. react-custom-crollbars

# 그릿지 테스트 2024-WEB

## /src 구조

###### apis
ㄴ core

index.ts: request api, jwt & not jwt


###### assets
- png images

###### constants
- modal state, global sizes 등 전역으로 사용되는 변수

###### components
- BottomNavBar: 화면비가 줄어들었을 때 밑에 나오는 navbar

- Buttons: 카카오 로그인 버튼

- Feeds: 피드 무한 스크롤 컴포넌트

  ㄴ Comment: 한개의 댓글을 담당하는 컴포넌트

  ㄴ CommentInput: 댓글 입력창

  ㄴ Feed 한개의 피드를 담당하는 컴포넌트

- Header: 헤더

  ㄴ 헤더 프로필 아이콘 클릭시 나오는 드롭다운

  ㄴ 검색

- Input: 회원가입, 로그인에 쓰이는 입력창

- Join: 회원가입페이지에 쓰이는 박스 컴포넌트들

  ㄴ AgreeBox: 동의창 박스

  ㄴ BirthInputBox: 생일 입력

  ㄴ JoinInputBox: 회원가입 정보입력
  
- Modal: 피드 누를시 나오는 모달

- ModifyModal: 수정 누를시 나오는 모달

- Storys: 스토리(더미)들 보여주는 컴포넌트

- Swiper: 피드 사진들을 볼 수 있는 Swiper 라이브러리 컴포넌트

- WriteModal: 피드 글쓰기에서 사용되는 모달

- home: 홈페이지에서만 쓰이는 컴포넌트

- payment: payment page에서만 쓰이는 컴포넌트


###### config
ㄴ constants: 전역변수


###### hooks
- react query mutation hook

  ㄴ useAddBookmark(북마크 추가), useAddComment(댓글 작성), useAddFeed(피드 작성), useAddLike(좋아요), useDeleteFeed(피드 삭제), useModifyModal(피드 수정)

- react query useQuery/useInfiniteQuery

  ㄴ useFeedsPages : 내림차순으로 무한스크롤 피드 로드

  ㄴ useGetProFile: 프로필 정보들 로


###### layout

  - DefaultLayout 로그인, 회원가입 제외한 페이지에서 쓰이는 기본 레이아웃


###### pages

  - 페이지 컴포넌트


###### routes

  - react-router-dom v6 RouteObject array, route path 변수


###### recoil

  ㄴ login: 유저 전역 state

  ㄴ home: 유저 auth 제외 나머지 전역 state


###### types


###### utils
- 전역으로 사용되는 utils method

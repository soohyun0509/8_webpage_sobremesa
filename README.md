# webpage_sobremesa


<div align=center>
  <img src="https://capsule-render.vercel.app/api?type=waving&color=d6e0f0&height=200&section=header&text=SOBREMESA&fontSize=90&fontColor=8d93ab" />
  <h3> 안녕하세요! [산대특] 1st. Team Project 3조입니다. </h3> <br>
  
  <h2> :raised_hands: 팀원 소개 :raised_hands: </h2>
  <h4> 박수현 / 성지혜 / 손비아 / 윤상진 </h4> <br><br>
  
  <h2> :star: 주제 :star: </h2>
  <h3> 레스토랑 웹페이지 :: SOBREMESA </h3>
  <h5> '컴퓨터', '식사 후에 가족들과 이야기하며 보내는 시간'이라는 뜻의 스페인어 </h5> <br><br>

  <h2> :pushpin: Overview :pushpin: </h2>
  <h4> 첫째. 다양한 레이아웃을 이용한 페이지에 수업 시간에 배운 기능을 다양하게 활용해 볼 수 있을 것 같아서</h4>
  <h4> 둘째. SNS와 블로그로 식당 예약, 메뉴, 리뷰 등을 볼 수 있기는 하지만, <br> 홈페이지를 제작하여 이용자들의 접근성을 높이고
        예약과 메뉴를 한번에 볼 수 있도록 가시성을 높이기 위해서</h4>
  <h4> 셋째. 성장하는 한국의 외식 플랫폼을 만들어 보고싶다</h4>
  <h4> 넷째. 고급스러운 분위기의 웹페이지를 만들어 보고싶다</h4> <br>
</div>

  <h5> 요즘 한식, 일식, 중식, 양식 등 여러 외식분야가 발을 넓혀가면서 사람들이 SNS나 전화를 하여 예약하는 경우가 많아지고 있다. 하지만 SNS와 전화로 예약 문의를 했을 경우, SNS 답장이 늦어지거나 이미 예약이 마감되어 있어 부득이하게 계획이 변경되는 경우가 흔하다. 이러한 아쉬운 점을 보안하기 위해 사람들이 쉽게 접근하여 예약을 하고, 메뉴를 확인 할 수 있는 음식점 웹 페이지를 만들기로 결정하였다. </h5>
  <h5>  웹 페이지에는 지금까지 배운 내용을 최대한 활용하여 개발하도록 한다. 예약하기 페이지에는 달력을 만들어 예약 가능한 날짜와 이미 예약이 있는 날짜를 한 눈에 확인하고, 예약변경, 예약취소 등의 기능도 가능하도록 한다. 또한 매달 바뀌는 메인과 서브 메뉴를 갤러리에서 사진과 함께 확인할 수 있게 만들어 이용자들의 편리성을 향상시키고자 한다. </h5> <br> <br>


<div align=center>
  <h2> :dart: Target audience :dart: </h2>
  <h4> 레스토랑을 줄 서서 기다리기 싫은 사람들 </h4> <br><br>

  <h2> :heavy_check_mark: Features :heavy_check_mark: </h2>
  <h4> 각 페이지 별 핵심 기능 </h4> <br><br>
  
  페이지명 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| 파일명 | 핵심 기능 | 설명
  --- |---|---|---
  메인| 레스토랑소개.html | a | 로그인 / 회원가입 버튼 생성, 메인 , 예약, 메뉴, 팀원, 갤러리, 문의사항 버튼 생성
  &nbsp;| &nbsp;| 마우스 이벤트 | 헤더 메뉴들 hover시 이벤트 지정
  &nbsp;| &nbsp;| text-decoration: none | 링크 밑줄제거
  &nbsp;| &nbsp;| 웹 폰트 | 한글에 눈누, 영문에 구글폰트 사용
  &nbsp;| &nbsp;| position | 로고 position: absolute 사용
  예약| 팀프로젝트1_달력.html | new Date() | javascript에서 시간과 날짜를 표현하는 객체를 사용하여 <br>배열과 객체 불러오기 이용
  &nbsp;|&nbsp; |  new Date().getFullYear() | 4자리 년도
  &nbsp;| &nbsp;| new Date().getMonth() | 월 [0~11] (※ 0 = 1월)
  &nbsp;| &nbsp;| new Date().getDate() | 일
  &nbsp;| &nbsp;| new Date().getDay() | 요일[0~6] (※ 0 = 일요일)
  메뉴| menupage.html|  flex | menu_content 하위요소 가로배치
  &nbsp;|&nbsp; |  justify-content | 하위요소 정렬 (가운데 일정하게 공간 만들어줌)
  &nbsp;|&nbsp; |  flex | 메뉴 리스트 가로배치
  &nbsp;|&nbsp; |  border | 글자 밑에 border 넣어서 밑줄 표현
  &nbsp;|&nbsp; |  outline, outline-offset | 메뉴판에 outline 과 outline-offset 사용한 경계선 넣어 넓어 보이게 표현
  &nbsp;|&nbsp; |  padding | 각 li에 padding 줘서 간격 부여
  팀원| 팀원소개하기.html | a | 로그인 / 회원가입 페이지 이동 버튼 생성, 메인, 예약, 메뉴, 팀원, 갤러리, 문의사항 각 이동 페이지 메뉴버튼 생성
  &nbsp;|&nbsp; | border-radius | Exceutive Chef&Owner , Chef de Cuisine , Pastry Chef, General Manager , Sommelier 각 이미지 둥글게 표현
  &nbsp;| &nbsp;| shape-outside:circle() | 원형 이미지 형태에 맞춰 텍스트를 감싸며 배치  
  &nbsp;| &nbsp;| background-image | 이미지 삽입 
  &nbsp;| &nbsp;| background-repeat | 이미지 자동채우기 제거
  &nbsp;| &nbsp;| background-position | 이미지 배경 위치 설정
  &nbsp;| &nbsp;| text-decoration : none | a태그 링크 밑줄제거
  &nbsp;| &nbsp;| text-align | 팀원소개 헤더 가운데 배치
  &nbsp;| &nbsp;| shape-outside:circle() | 원형 이미지 형태에 맞춰 텍스트를 감싸며 배치 
  &nbsp;| &nbsp;| font-weight | 팀원 이름 폰트 굵게 설정
  &nbsp;| &nbsp;| line-height | 팀원 소개글 줄간격 설정
  갤러리| gallery.html | 아이콘 폰트 | 페이지네이션에 활용
  &nbsp;| &nbsp;| position | 이미지들어간 td에 position 설정해서 하위태그인 div에 absolute로 위치 조정
  &nbsp;| &nbsp;| 마우스 이벤트 | js에서 테이블에 마우스이벤트 설정해 img들어간 공간에 mouseover , mouseout 했을때 각각 div.style.display: block과 div.style.display: none 실행되도록 설정
  &nbsp;| &nbsp;| box-shadow | 각 이미지에 box-shadow 넣어 보더 넣지않고 경계 느껴지게 표현
  &nbsp;| &nbsp;| opacity | a 태그에 opacity 넣어 마우스 올리면 흐려지게 표현
  &nbsp;| &nbsp;| addEventListener | mouseout 이벤트 생성
  &nbsp;| &nbsp;| addEventListener | mouseover 이벤트 생성
  &nbsp;| &nbsp;| forEach | 이미지 js로 문서객체로 가져올때 forEach 사용해 인덱스 가져와 이미지의 인덱스와 div의 인덱스가 같을때 각각 .style.display: block과 div.style.display: none 이 실행되도록 설정
  문의사항| customer_re.html | document.getElementById | 문의사항 표에 있는 input에 입력한 데이터를 아래 표시되도록  기능 부여
  &nbsp;&nbsp;|&nbsp; | document.getElementById | 출력된 데이터 클릭하면 옆에 문의사항의 제목과 내용만 출력되도록 설정
  &nbsp;|&nbsp; | querySelector | html 요소 문서객체로 가져왔다
  &nbsp;|&nbsp; | &nbsp; | 버튼 누르면 입력된 값 저장 설정
  &nbsp;|&nbsp; | innerHTML | html에서 입력된 요소 화면 특정부분에 나오도록 설정
  &nbsp;|&nbsp; | &nbsp; | input 박스 사이즈 재설정
  &nbsp;|&nbsp; | border | 타이틀 글자 밑에 border로 밑줄 표현
  로그인| signin.html | flex | 하위요소 가로배치
  &nbsp;|&nbsp; |  justify-content | 하위요소 정렬
  &nbsp;| &nbsp;| 웹 폰트 | 한글에 눈누, 영문에 구글폰트 사용
  &nbsp;| &nbsp;| 가상요소 | 로고 배치
  &nbsp;| &nbsp;| 이중 테두리 | 이중 테두리로 박스 꾸미기
  &nbsp;| &nbsp;| box-shadow | 떠있는 느낌을 주기 위한 그림자 효과
  &nbsp;| &nbsp;| document.getElementById | 입력된 아이디와 비밀번호를 체크
  &nbsp;| &nbsp;| addEventListener | focus 또는 focusout되면 특정 이벤트 발생되도록 지정
  회원가입| signup.html | flex | 하위요소 가로배치
  &nbsp;|&nbsp; |  justify-content | 하위요소 정렬
  &nbsp;| &nbsp;| 웹 폰트 | 영문에 구글폰트 사용
  &nbsp;| &nbsp;| filter | 배경 이미지 어둡게 설정
  &nbsp;| &nbsp;| 아이콘 폰트 | 페이스북, 구글 등
  &nbsp;| &nbsp;| box-shadow | 떠있는 느낌을 주기 위한 그림자 효과
  &nbsp;| &nbsp;| 가상요소 | select의 아래 방향 화살표 아이콘 설정
  
  <br><br><h2> :raised_hands: 역할 분담 :raised_hands: </h2>
  <h4> 박수현 : GIT 통합 및 관리 </h4>
  메뉴 / 갤러리 / 게시판
  <h4> 성지혜 : 발표 </h4>
  메인 / 팀원
  <h4> 손비아 : 일정계획관리 및 Readme </h4>
  로그인 / 회원가입
  <h4> 윤상진 : PPT 제작 </h4>
   예약 <br><br><br>
  
  <h2> :calendar: 일정 계획 :calendar: </h2>
  <h3> 08/24 </h3>
   공통 : 주제 선정 / 페이지 분류 / 페이지 분담 <br> <br> 
   
  <h3> 08/25 </h3>
   공통 : GIT 생성 및 Branch 분리 / 역할 분담 / 프로젝트명 선정 및 로고 제작 / 프로토타입 제작<br> <br> 
   
  <h3> 08/26 </h3>
  공통 : GIT Branch 재분리
  <h4> 박수현 : 갤러리페이지 구성중 </h4>
  1. 메뉴페이지 본문 부분 완성 (헤더, 푸터 합치기 전) <br> 
  2. GIT Merge<br> 
  <h4> 성지혜 : 메인페이지 구성중 </h4>
  1. 메인, 서브페이지에 들어갈 이미지 찾기<br>
  2. 헤더, 메인, 배너, 서브, 푸터 코드 작성 및 실행<br>
  3. 오류수정<br>
  <h4> 손비아 : 회원가입페이지 구성중 </h4>
  1. 웹페이지 레이아웃 구조 생성<br>
  2. 회원가입페이지에 들어갈 이미지 찾기<br>
  3. 배경 이미지 어둡게 조정<br>
  4. 일정 관리 및 readme 작성 <br>
  <h4> 윤상진 : 예약하기페이지 구성중 </h4>
  1. 년,월에 따른 일수 변화 완성<br>
  2. 월 이동에 따른 일수변화 onclick 넣기<br><br> 
  
  <h3> 08/29 </h3>
  <h4> 박수현 : 문의사항 스크립트 기능 넣는중 </h4>
  1. 갤러리 마우스이벤트 생성<br>
  2. 갤러리 사진수집&페이지 완성<br>
  3. 문의사항 HTML&CSS 완성<br>
  4. GIT Merge<br>
  <h4> 성지혜 : 메인페이지, 팀원 소개하기 페이지 수정중 </h4>
  1. 팀원소개하기 레아이웃 변경<br>
  2. 메인페이지에서 팀원소개하기 페이지도 이동 변환 추가<br>
  3. a태그 hover 추가<br>
  <h4> 손비아 : 회원가입페이지,로그인페이지 개발 완료 </h4>
  1. 회원가입페이지에서 회원가입버튼 누를 시 로그인 페이지로 이동하도록 JS추가<br>
  2. 로그인 페이지에서 바른 아이디와 비밀번호를 입력할 경우에만 메인 페이지로 이동하도록 JS추가<br>
  3. 일정 관리 및 readme 작성 <br>
  <h4> 윤상진 : 예약페이지 css 작업 중 </h4>
  1. 년,월 이동에 따른 일수 변화<br>
  2. 예약가능 날짜 표시 / 변경 작업<br>
  3. 버튼 누를시 로그인 페이지 변환<br><br> 
  
  <h3> 08/30 </h3>
  공통 : header와 footer 병합 및 통일감을 위한 디자인 수정 <br>
  <h4> 박수현 </h4>
  1. 각 페이지마다 헤더와 푸터 css 속성 맞게 합침<br>
  2. 헤더,푸터 합친뒤 본래 페이지에 클래스명 따로 안줘서 생긴 스크립트 문제 해결<br>
  3. GIT Merge<br>
  <h4> 성지혜 : 메인, 팀원소개 페이지 완성 </h4>
  1. 헤더와 푸터 합친 뒤 페이지 이동했을때 메인페이지와 이동페이지 푸터 로코 크기가 맞지 않아 코드 수정/ 해결<br>
  <h4> 손비아 : 로그인페이지 JS 추가 </h4>
  1. 로그인 페이지에서 id나 pw 입력창이 focus되면 각 입력창 전체 테두리에 box-shadow 입히기<br>
  2. 회원가입 페이지에서 select 부분에 아이콘폰트로 아래 화살표 추가
  3. 일정 관리 및 readme 작성 <br>
  <h4> 윤상진 </h4>
  1. 달력 '월' 이동 시 누락된 '년' 함수 추가 수정<br>
  2. 기존 변수명, 변수 값 수정<br><br>
  
  <h3> 08/31 </h3>
  <h4> 박수현 : 문의사항 페이지 js 수정 </h4>
  1. Git Merge 충돌 문제 해결
  2. 갤러리 페이지 페이지네이션 수정
  
  <h4> 성지혜 </h4>
  1. 푸터 sns로고에 a태그 추가 
  2. 코드를 합친 뒤 헤더 메뉴에서 버튼을 눌렀을때 이용하지 않는 페이지 오류수정/해결
  3. 발표준비
  
  <h4> 손비아 : 오류 수정 </h4>
  1. 메인페이지 - 플러팅박스 추가
  2. 팀원소개페이지 - 레이아웃 변경 
  <h4> 윤상진 :  </h4>
<br><br>

  <h2> :hammer: Tools :hammer:: </h2>
  <h4> <img src="https://img.shields.io/badge/eclipse-2C2255?style=flat-square&logo=eclipse&logoColor=white"/> </h4> <br><br>
  
  <h2> :blossom: 사용한 Skill :blossom: </h2>
  <h4> <img src="https://img.shields.io/badge/HTML-E04F11?style=flat-square&logo=HTML5&logoColor=white"/> <img src="https://img.shields.io/badge/CSS-1342DD?style=flat-square&logo=CSS3&logoColor=white"/> <img src="https://img.shields.io/badge/JavaScript-FFCA28?style=flat-square&logo=JavaScript&logoColor=white"/> <img src="https://img.shields.io/badge/git-24292F?style=flat-square&logo=github&logoColor=white"/> </h4> <br><br>
  
  <h2> :round_pushpin: 추후 발전 방향 :round_pushpin: </h2>
  1. 반응형 웹페이지로 업그레이드<br>
  2. js추가해서 유효성 검사<br>
  3. 회원가입/로그인/문의하기 백엔드 기능 추가<br>
  4. 실시간 챗봇 예약상담<br>
  5. 2단 레이아웃을 사용하여 공간을 활용하고 사용자의 편의성을 증가<br>
  6. 커스터마이징을 사용하여 서브메뉴 추가<br>

</div>

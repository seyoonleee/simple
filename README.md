![SIMPLE MAIN PAGE](https://user-images.githubusercontent.com/78012131/212270793-1ae31024-ec5c-4eee-b787-84b8ac8717b5.jpg)




# SIMPLE



## 🥲 DCB(Don't Cry Baby)

<br/>
• `FRONTEND` : 서지연, 이다혜, 이세윤, 장찬영<br/>
• `BACKEND` : 김승, 백종호
<br/>
<br/>

## 🎁 SIMPLE

<br/>
• SIMPLE은 만족스러운 캠핑을 위한 아이템을 판매하는 e-commerce입니다.<br/>
• SIMPLE은 캠핑에 감성을 더해주고 그 공간을 더욱 가치있게 바꿔줍니다.<br/>
• SIMPLE은 가심비를 추구하는 MZ세대를 위한 선물을 제공합니다. 가심비는 비용과 상관없이 만족스러운 것을 구매하는 소비 행태입니다. <br/>

<br/>


## 사이트

|사이트  | 구현 모습 | 담당 개발자|
|--|--|--|
|메인 페이지|<img src = "https://user-images.githubusercontent.com/78012131/212270832-a3db4763-49ae-4495-aca3-f663f34072a7.gif" width = "400px">|프론트엔드:서지연/백엔드:백종호|
| 회원가입 |<img src = "https://user-images.githubusercontent.com/78012131/212285843-f94c0a91-ecaf-49fa-a009-ee78629b295d.gif" width = "400px">|프론트엔드:이다혜/백엔드:백종호|
| 로그인 |<img src = "https://user-images.githubusercontent.com/78012131/212284013-5be69786-5fe0-48af-aed8-588fde1360af.gif" width = "400px">|프론트엔드:이다혜/백엔드:백종호|
|카테고리 & 아이템 리스트|<img src = "https://user-images.githubusercontent.com/78012131/212270912-985d50e9-81b0-4c0d-87e4-051aa381b416.gif" width = "400px">|프론트엔드:서지연/백엔드:백종호|
|검색|<img src = "https://user-images.githubusercontent.com/78012131/212270879-3f34fe3c-e3cb-404d-b39f-0c86a0113bc9.gif" width = "400px">|프론트엔드:서지연/백엔드:백종호|
|장바구니||프론트엔드:이세윤/백엔드:김 승|
|상세 페이지|<img src = "https://user-images.githubusercontent.com/78012131/212272684-4238aad5-04ad-4086-857b-f851aea02129.gif" width = "400px">|프론트엔드:장찬영/백엔드:김 |
|결제||프론트엔드:이세윤/백엔드:김 승/백종호|
|네비게이션 바|<img src = "https://user-images.githubusercontent.com/78012131/212284028-5cd81f7c-d12a-4a9f-a648-6240028a5670.gif" width = "400px">|프론트엔드:이다혜|
|마이페이지|<img src = "https://user-images.githubusercontent.com/78012131/212284620-95afec86-d3cf-49b3-901c-0ec7c2decdff.gif" width = "400px">|프론트엔드:이다혜|
|Footer|<img src = "https://user-images.githubusercontent.com/78012131/212285091-b0e6f717-cf88-4f96-8d74-e3d06733d98d.gif" width = "400px">|프론트엔드:이다혜|


##  DB ERD

<img width="800px" alt="image" src="https://user-images.githubusercontent.com/78012131/212272946-540b86fa-9eb8-42a3-bcc2-c1e26bc74d35.png">


## 기술 스택

백엔드
* Express
* Node.js
* TYPEORM
* JWT
* BCRYPT
* ORACLE CLOUD

프론트엔드
* React
* React-Router
* SASS

## 구현 사항 설명
### 1. 메인페이지
 - 제품 하나를 그려줄 수 있는 컴포넌트(product)생성.
 - 데이터 베이스의 제품을 map함수를 사용하여 페이지에 그려줄 수 있는 컴포넌트(products) 생성. 
 - 하나의 컴포넌트(product)를 활용하여 두가지 카테고리("따끈따끈한 신상" & "지갑은 가볍게 양손은 무겁게")에 활용하기 위해 main 컴포넌트에서 통신 후 받은 정보를 products에 props로 넘겨준 뒤 map함수로 화면에 구현.
 - 각각의 제품 클릭시 제품의 id를 받아 detail/${id}로 이동.(router에서 detail의 path는 detail/:id로 변경)
 - cart 아이콘 선택시 item의 클릭 이벤트가 같이 전달되는 이벤트 버블링이 발생하기 때문에 e.stopPropagation()로 자식 요소에 이벤트가 전달되는 것을 막아줌.
 - cart 아이콘 클릭이벤트 발생 시 선택된 아이템에 id값과 name을 전달해주어 id 값으로는 장바구니에 추가될 수 있도록 body에 전달, name은 alert창에 뜰 수 있도록 전달.
 <br/>
 
 - 이벤트 페이지에 구현할 이미지를 한장씩 100vw로 가로길이 지정 후 flex를 적용시켜 가로 정렬.
 - 전체를 감싸는 div는 overflow: hidden으로 숨겨줌(이 div의 가로길이는 100vw)
 - setInterval로 2초마다 transform을 -100vw로 주어 자동으로 사진이 넘어가는 것처럼 보이게 설정.
 - 제품의 좌우 버튼을 이용한 carousel 구현은 data의 길이를 받아 길이가 정해진 화면에 보여지는 갯수를 넘길 경우 길이에서 하나 빼서(화면에 빈 화면은 빼고 보여주기 위해) 그 값에 카드의 길이를 곱한 값을 기준으로 보여주는 화면의 위치 변경

### 2. 카테고리 & 아이템 리스트
 - categoryWrapLeft div안에 category 컴포넌트 추가(wrap -> position relative, category-> position absolute) => 화면 사이즈가 변경되더라도 카테고리 하단에 카테고리 정보가 뜰 수 있도록 함.
 - categoryWrapLeft의 mouseEnter 이벤트 발생 시 isMouseHover state는 true.
 - category에 mouseLeave 이벤트 발생 시 isMouseHover state는 false. => hoverCategory 함수에 boolean 값을 주면 하나의 함수로 두가지 동작(true, false)를 실행할 수 있다.
 - isMouseHover state가 false일 때 category의 class는 hidden으로 변경되어 보이지 않게 됨.
 - searchParams.set을 통해 click event 발생시 id 값을 받아 url에 category=id의 형태로 바꿔줌.
 - searchParams.get을 통해 url의 값을 받아와 useNavigate를 통해 이동시켜줌.
 <br/>
 
 - itemList -> selectList의 각각의 옵션에 value값을 주어 selectList에 change event발생시 searchParmas의 sort값에 value값을 적용시켜주어 url 변경.
 - Nav에서 받은 category와 itemList의 sort값(쿼리스트링)으로 백엔드와의 통신을 하여 그에 맞는 제품을 보여줌.
 
 <br/>
 
 - 스크롤 버튼 -> window.addEventListener('scroll')을 통해 scroll event 감지.
 - Y축 200이상일 경우 버튼 생길 수 있도록 구현.

### 3. 검색창
 - searchParmas.set을 통해 nav에서 입력된 inputValue를 search key에 저장 -> setSearchParams를 통해 url에 띄워줌.
 - searchParams.get을 통해 검색결과를 띄워줌.

## 추가 구현 사항 
* 결제 내역 보여주기
* Pagination
* 장바구니 아이콘 선택시 모달창 띄워주기.
* 프론트엔드 에러 핸들링

## Team

[<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>](https://github.com/mia-seo) | [<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>](https://github.com/sally-dot) |[<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>](https://github.com/seyoonleee)|[<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>](https://github.com/Jangchan0)|[<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>](https://github.com/5ERN) |[<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>](https://github.com/JongHoB) |
---|---|---|---|---|---|
서지연(FE)|이다혜(FE)|이세윤(FE)|장찬영(FE)|김승(BE)|백종호(BE)|

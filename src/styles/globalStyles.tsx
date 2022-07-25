import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}

html {
  * {/* 스크롤 바 제거 */
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
      ::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
      }
    }
}

body {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}


input, button { 
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    overflow: hidden;
    outline: none;
}

button {
  cursor: pointer;
}

/* 유미가 추가한 색상 */
:root {
    --color-border: #d4d4d4;
    --color-placehloder:#c4c4c4;
    --color-gray: #c4c4c4; // Form인풋 색상, 비활성화 색상
    --color-dark-gray: #31393d; //활성화 색상(어두운 회색)으로 어떨지... snplab 웹사이트에서 뽑은 색상
    --color-main: #1cc5f7; //snplab 메인 하늘색 컬러
    --color-main-shade : #0794be; //main컬러로 만든 어두운 버전
    --color-subtitle: #9a9a9a; //서브타이틀 글자색
    --color-privacy: #636363; //개인정보 메인 내용 글자색
    --color-black: #000000;
    --color-white: #ffffff;
    --color-red: #fd8397; // 지원 완료 확인 모달의 확인 버튼
  }
`;

export default GlobalStyle;

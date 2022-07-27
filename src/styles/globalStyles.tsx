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

:root {
    --color-border: #d4d4d4;
    --color-placehloder:#c4c4c4;
    --color-hover: #f7f6fb;
    --color-tabs-background: #f7f7f7;
    --color-sidebar: #d9d9d9;
    --color-gray: #c4c4c4; 
    --color-dark-gray: #31393d; 
    --color-main: #1cc5f7;
    --color-main-shade : #0794be; 
    --color-subtitle: #9a9a9a; 
    --color-privacy: #636363;
    --color-black: #000000;
    --color-white: #ffffff;
    --color-red: #fd8397; 
  }
`;

export default GlobalStyle;

import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}
#root,
html {
  * { /* 연진이 추가한 속성 */
      /* 스크롤 바 제거 */
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

input, button { /* 연진이 추가한 속성 */
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
}

`;

export default GlobalStyle;

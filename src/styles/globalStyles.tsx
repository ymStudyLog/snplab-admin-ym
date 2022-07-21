import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}

#root,
html,
body {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}
`;

export default GlobalStyle;

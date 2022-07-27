import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './router/Router';
import GlobalStyle from './styles/globalStyles';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <RecoilRoot>
    <React.StrictMode>
      <GlobalStyle />
      <Router />
    </React.StrictMode>
  </RecoilRoot>
);

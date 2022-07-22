import React from 'react';
import Router from './router/Router';
import GlobalStyle from './styles/globalStyles';
import Region from './components/modal/Region';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
      <Region />
    </>
  );
};

export default App;

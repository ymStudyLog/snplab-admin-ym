import React from 'react';
import Router from './router/Router';
import GlobalStyle from './styles/globalStyles';
import Region from './components/modal/RegionModal';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
};

export default App;

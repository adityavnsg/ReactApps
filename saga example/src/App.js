import React from 'react';
import Products from './components/Products';
import Header from './components/Header';
import Loading from './components/Loading';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Loading/>
      <Products/>
    </React.Fragment>
  );
}

export default App;

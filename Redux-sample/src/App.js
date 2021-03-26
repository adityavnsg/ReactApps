import React from 'react';
import './App.css';
// import Dashboard from './components/Dashboard';
import Products from './components/saga-components/Products';
import Header from './components/saga-components/Header';
import Loading from './components/saga-components/Loading';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Loading />
      <Products />
    </React.Fragment>
  );
}

export default App;

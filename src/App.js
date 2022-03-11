import './App.css';
import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Para from './components/Para';
import SubContent from './components/SubContent';
import Products from './components/Products';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <MainContent/>
      <Para/>
      <Products/>
      <hr/>
      <SubContent/>
      <Footer/>
    </div>
  );
}

export default App;

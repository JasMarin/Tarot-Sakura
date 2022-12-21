import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  sessionStorage.clear()
  return (
  <>
    <Header title= 'Tarot Sakura'/>
    <Main/> 
  </>
  )
}

export default App;

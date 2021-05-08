import './css/App.css';
import React from 'react'
import MainContainer from './components/Main/MainContainer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App__wrapper">
        <MainContainer />
      </div>
    </BrowserRouter>

  );
}

export default App;

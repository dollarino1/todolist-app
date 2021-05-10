import './css/App.css';
import React, { useState } from 'react'
import Main from './components/Main/Main';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [todos, setTodos] = useState([])
  return (
      <div className="App__wrapper">
        <Main setTodos={setTodos} todos={todos} />
      </div>

  );
}

export default App;

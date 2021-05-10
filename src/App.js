import './css/App.css';
import React, { useState, useEffect } from 'react'
import Main from './components/Main/Main';

function App() {
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])

  useEffect(() => {
    getLocalTodos()
  }, [])
  useEffect (() => {
    filterHandler()
    saveLocalTodos()
  }, [todos, status])

  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed == true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed == false))
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
  }
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }
  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal)
    }
  }
  return (
      <div className="App__wrapper">
        <Main filteredTodos={filteredTodos} setStatus={setStatus} setTodos={setTodos} todos={todos} />
      </div>

  );
}

export default App;

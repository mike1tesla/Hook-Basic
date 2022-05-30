import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav.js';
import React, { useState } from 'react';


// JSX la code html trong JS voi 1 func cos hanf return
// Components thanh phan tu dong chen vao file index.js
const App = () => {
  let number = 2022; // numbers, string
  let obj = { name: 'mike', email: 'mike@gmail.com' };

  // useState
  let [name, setName] = useState("HaiTuyen");
  let [address, setAddress] = useState('');
  const [todos, setTodos] = useState([
    { id: 'todo1', title: 'Watching Channel' },
    { id: 'todo2', title: 'Doing homework' },
    { id: 'todo3', title: 'Playing game' }
  ]);

  const handleEventOnClick = (event) => { // hàm event là hàm có sẵn dùng để hiển thị các thuộc tính thao tác 
    if (!address) {
      alert('emtpy input')
      return;
    }
    //hook not merge state
    //...spread syntax array js
    let newTodo = { id: 'abc', title: address }
    setTodos([...todos, newTodo])
    setAddress('')
  };

  const handleOnchangeInput = (event) => {
    setAddress(event.target.value)
  }

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world with React with {name} and {obj.name} in {number} </h1>
        <div className="todos-container">
          {todos.map(todo => {
            console.log('>>> check todo list: ', todo)
            return (
              <li className="todo-child" key={todo.id}> {todo.title}</li>
            )
          })}
          
        </div>
        <input type="text" value={address} onChange={(event) => handleOnchangeInput(event)} />
        <button type='button' onClick={(event) => handleEventOnClick(event)}>Click me</button>
      </header>
    </div>
  );
}

export default App;

import React from 'react';

import Home from './components/Home';
import NewTodo from './components/NewTodo';


function App() {
  return (
    <div >
       <h1 style={{color:"white", textAlign:"center" ,fontSize:"45px"}}>Todo App</h1>
      <NewTodo/>
      <Home/>
    </div>
  );
}

export default App;

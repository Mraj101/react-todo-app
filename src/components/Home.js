import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Todos from "./Todos";
import style from "./home.module.css";
import NewTodo from "./NewTodo";

const Home = () => {
  const [todos, setTodo] = useState([]);

  const newTodo = (todo) => {
    setTodo((oldTodo) => {
      return [...oldTodo, { id: uuidv4(), todo }];
    })
  }

  const removeTodo =(id)=>{
        setTodo((oldTodo)=> {
          const filteredTodos= oldTodo.filter((todo)=> todo.id !== id )
          return filteredTodos } )
  }

  return (
    <div>
      <NewTodo onNewTodo={newTodo} />
      <div className={`${style.container}`}>
        <Todos todos={todos} onRemoveTodo={removeTodo}  />
      </div>
    </div>
  );
};

export default Home;

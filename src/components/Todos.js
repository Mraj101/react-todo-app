import React from 'react'

import Todo from './Todo'
import style from './todos.module.css'

const Todos = (props) => {
    

  return (
    <div className={style["container-todos"]}>
        {props.todos.map((todo) => <Todo key={todo.id} todo={todo.todo} id={todo.id} onRemoveItem={props.onRemoveTodo} />)}
    </div>
  )
}

export default Todos
import React from 'react'

import Todo from './Todo'
import style from './todos.module.css'

const Todos = (props) => {
    

  return (
    <div className={style["container-todos"]}>
        {props.todos.map((todo,index)=> <Todo key='index' todo={todo}/>)}
    </div>
  )
}

export default Todos
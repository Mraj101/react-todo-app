import React from 'react'

import Todo from './Todo'

const Todos = (props) => {
    

  return (
    <div>
        {props.todos.map((todo)=> <Todo todo={todo}/>)}
    </div>
  )
}

export default Todos
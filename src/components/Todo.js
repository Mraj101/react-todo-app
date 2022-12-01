import React from 'react'

import NewTodo from './NewTodo'

const Todo = (props) => {
    const {id,title,desc} = props.todo
  return (
    <div>
        {title} <br />
        {desc} <br />
    </div>
  )
}

export default Todo
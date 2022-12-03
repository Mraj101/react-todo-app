import React from 'react'

import style from './todo.module.css'



const Todo = (props) => {
    const {title,description} = props.todo
  return (
    <article className={style["container-todo"]}>
      <div>
        <h3>
          {title}
        </h3>
        <pre>
                 {description}
        </pre>
      </div>

      <div>
        <button className={style.btn} >
          <i className='fa fa-trash fa-2x'></i>
        </button>
      </div>

    </article>
  )
}

export default Todo
import React from 'react'

import style from './todo.module.css'



const Todo = (props) => {
    const {title,description} = props.todo
    const { id } =props

    const handleClick=(id)=>{
        props.onRemoveItem(id)
    }


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
        <button onClick={ () => {handleClick(id)} } className={style.btn} >
          <i className='fa fa-trash fa-2x'></i>
        </button>
      </div>

    </article>
  )
}

export default Todo
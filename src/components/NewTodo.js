import React from 'react'

import style from './form.module.css'
const NewTodo = () => {
  return (
    <div>
      <form className={style["form-container"]}>
        <div className={style["form-group"]}>
            <label htmlFor="title">Enter Title:</label>
            <input type="text" name='title' id='title'  />
        </div>

        <div className={style["form-group"]} > 
            <label htmlFor="description">Description: </label>
            <input type="text" id='description' name='description' />
        </div>
  
      </form>
    </div>
  )
}

export default NewTodo
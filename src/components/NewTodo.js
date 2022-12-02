import React,{useState} from 'react'

import style from './form.module.css'
const NewTodo = (props) => {
  const[todo,setTodo]=useState({title:'',description:''})

  props.onNewTodo






  const{title,description}= todo

  const handleChange=(e)=>{
    const fieldName = e.target.name
    setTodo((oldTodo)=>{
      return  {...oldTodo,[fieldName]:e.target.value}
    })
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    setTodo({title:'',description:''})
  }


  return (
    <div>
      <form className={style["form-container"]} onSubmit={handleSubmit} >
        <div className={style["form-group"]}>
            <label htmlFor="title">Enter Title:</label>
            <input onChange={handleChange} type="text" name='title' id='title' value={title} />
        </div>

        <div className={`${style["form-group"]} ${style["form-div2"]}`} > 
            <label htmlFor="description">Description: </label>
            <textarea onChange={handleChange} type="text" id='description' name='description' 
            value={description}/>
        </div>
        <button type='submit'>Save</button>
      </form>
    </div>
  )
}

export default NewTodo
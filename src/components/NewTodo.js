import React,{useState} from 'react'

import style from './form.module.css'




const NewTodo = (props) => {
  const[todo,setTodo]=useState({title:'',description:''})
  const[disable,setDisable]=useState(true)
  const{title,description}= todo


  const handleChange=(e)=>{
    const fieldName = e.target.name
    setTodo((oldTodo)=>{
      return  {...oldTodo,[fieldName]:e.target.value}
    })

    if(title.length>0 && description.length>0)setDisable(false)
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    props.onNewTodo(todo)
    setTodo({title:'',description:''})
    setDisable(true)
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
        <button disabled={disable} type='submit'>SaveTodo</button>
      </form>
    </div>
  )
}

export default NewTodo
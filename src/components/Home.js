import React from 'react'
import Todos from './Todos'

import style from './home.module.css'
import NewTodo from './NewTodo'

const dummyTodo = [
    {
        id:1,
        title:"Title1",
        desc:"This is description for title 1"
    },
      {
        id:2,
        title:"Title2",
        desc:"This is description for title 2"
    },

]
const Home = () => {
  return (
    <div className={`${style.container}`}>
         
          <Todos todos={dummyTodo} />     
    </div>
  )
}

export default Home
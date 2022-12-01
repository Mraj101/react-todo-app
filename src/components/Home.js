import React from 'react'
import Todos from './Todos'

import style from './home.module.css'

const dummyTodo = [
    {
        id:1,
        title:"Title1",
        desc:"This is description for title 1"
    },

]
const Home = () => {
  return (
    <div className={`${style.container}`}>
        <div className={style["container-child1"]}>
          <Todos todos={dummyTodo} />
        </div>
    </div>
  )
}

export default Home
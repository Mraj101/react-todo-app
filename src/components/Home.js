import React from 'react'
import Todos from './Todos'


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
    }
]
const Home = () => {
  return (
      <Todos todos={dummyTodo} />
  )
}

export default Home
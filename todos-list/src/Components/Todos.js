import React from 'react'
import TodoItem from './TodoItem'

export default function Todos(props) {
  return (
    <div className='container '>
      <h3 className='text-center my-5'>Todos List</h3>
      
      {
        // Logic
        props.todos.length === 0 ? "No todos to display" : 
        props.todos.map((todo)=>{
          return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
        })
      }
      
    </div>
  )
}

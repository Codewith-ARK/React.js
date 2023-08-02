import './App.css';
import Header from './Components/Header'
import Todos from './Components/Todos'
import Footer from './Components/Footer'
import React, {useState} from 'react';

function App() {
  const onDelete = (todo)=>{
    console.log('I am onDelete', todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: 'Goto Market',
      desc: 'Goto market to do the job'
  
    },
    {
      sno: 2,
      title: 'Goto Mall',
      desc: 'Goto mall to buy something'
    },
    {
      sno: 3,
      title: 'Goto University',
      desc: 'Goto University to study'
    }
  ]);
  return (
    <>
      <Header title={"ARK's TodoList"} searchBar={true}/>
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
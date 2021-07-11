import { useState } from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Checkout from './components/Checkout'

const App = () => {
  const [tasks, setTasks] = useState( [
    {
        id: 1,
        text: 'Special Coleslaw',
        size: 'Medium',
        reminder: true,
    },
    {
        id: 2,
        text: 'Bubbly Cola',
        size: 'Large',
        reminder: true,
    },
    {
        id: 3,
        text: 'Spicy Salmon Burger',
        size: 'Large',
        reminder: true,
    },
  ])
  
  //  Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() *
    10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }


  // Delete Task

 const deleteTask = (id) => {
   setTasks(tasks.filter((task) => task.id !== 
   id))
  }

   //Toggle Reminder 



  return (
    <Router>
    <div className='container'>
     <Header />
     
     <Route path='/' exact render={(props)=> (
       <>
     <AddTask onAdd= {addTask}/>
      {tasks.length > 0 ? (
       <Tasks tasks={tasks} onDelete=
       {deleteTask}/>
     ) : (
       'Nothing in cart'
     )}

       </>
     ) } />
     <Route path='/checkout' component={Checkout} />
    </div>
    </Router>
  )
}


export default App;

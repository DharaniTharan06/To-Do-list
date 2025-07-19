import { useState } from 'react'
import './App.css'
import {Task} from './Task'

function App() {
  const [Todo,setTodo] = useState([]);
  const [newTask,setTask] = useState("");
  const AddTask = ()=>{
    if(newTask.trim()===""){
      return;//Exit the function if the input is empty or whitespace
    }
    const newTaskobject = {//we are changing it to dictonary as if a string with same name is present two times both get deleted
      id: Todo.length===0? 0 : Todo[Todo.length - 1].id + 1,
      taskname: newTask,
      completed : false
    }
    const newTodo = [...Todo,newTaskobject] /*Here ...Todo mean that we want to add all the elements to the new array(or)any datatype
     along with the newTask*/
    setTodo(newTodo)
    setTask("") //Clears the input feild after adding the task
  }
  const Update = (taskid)=>{
    const newupdate = Todo.map((task)=>{
      if(task.id===taskid){
        return {...task,completed : true} //Here we don't use [] as we have to use the dot notation and {} rrepresents an object
      }
      return task
    })
    setTodo(newupdate)
  }
  const Delete = (taskid)=>{
    const newTodod = Todo.filter((task)=>{ //This function takes a function as input,this filter the array based on what we want and not.
      return task.id!==taskid //This same as the previous logic that we used using if and else
    });
    setTodo(newTodod)
  } //We can't use Delete(task) inside a button(onclick) in react we have to use it as ()=> Delete(task)
  return (
    <div className='App'>
      <h1>To-Do List</h1>
      <div className='addTask'>
        <input type='text' placeholder='Enter a new Task' value={newTask} onChange={(event)=>{setTask(event.target.value)}}/>
        <button onClick={AddTask}>Add Task</button>
      </div>
      <div className='list'>
        {Todo.map((task)=>{
          return <Task taskname={task.taskname} id={task.id} completed={task.completed} Delete = {Delete} Update = {Update} />
        })}
      </div>
    </div>
  )
}

export default App

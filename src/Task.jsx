export const Task = (props)=>{
  return (
    <div className={`todo-item ${props.completed ? 'completed' : ''}`}>
      <p>{props.taskname}</p>
      <button onClick={()=>props.Update(props.id)} className="complete-btn">Complete</button>
      <button onClick={()=>props.Delete(props.id)} className="delete-btn">x</button>
    </div>
  );
}
import React,{ useState } from 'react'
import Listtodo from './Listtodo'

const AddTodo = () => {
  const [todo, settodo] = useState()
  const [whatTodo, setwhatTodo] = useState()
  const [todoTime, settodoTime] = useState()
  const [todoArray, settodoArray] = useState([])

  const addTodo =()=> {
    if(!todo||!whatTodo||!todoTime) return alert("All feild are required");
    let newTodo = {todo, whatTodo, todoTime}
    settodoArray((prev)=>[...prev,newTodo])
  settodo("")
  setwhatTodo("")
  settodoTime("")

  } 
  return (
    <>
    <div className='container'>
    <div className='row'>
        <div className="col-lg-6 p-5 bg-dark mt-5">
          <h1 className='text-white'>Add todo</h1>
          <div className="form-floating">
          <input type="text" className='form-control mb-3 bg-dark text-white shadow-0' placeholder='Todo title' onChange={(e)=>settodo(e.target.value)} value={todo} name="todo"/>
          <label htmlFor="" className='text-white'>Todo title</label>
          </div>
          <div className="form-floating">
          <input type="text" className='form-control mb-3 bg-dark text-white shadow-0' placeholder='What to do' onChange={(e)=>setwhatTodo(e.target.value)} value={whatTodo} name="whatTodo"/>
            <label htmlFor="" className='text-white'>what to do</label>
          </div>
          <div className="form-floating">
          <input type="time" className='form-control mb-3 bg-dark text-white shadow-0' placeholder='What to do' onChange={(e)=>settodoTime(e.target.value)} value={todoTime} name="todoTime"/>
          
            <label htmlFor="" className='text-white'>Time to do</label>
          </div>
          <button className='btn btn-close-white form-control' onClick={()=>addTodo()}>Add todo</button>
        </div>
    </div>
    </div>
    <Listtodo todoArray={todoArray}/>

    
    </>
  )
}

export default AddTodo
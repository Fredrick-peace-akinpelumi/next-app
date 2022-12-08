import React from 'react'

const Listtodo = (props) => {
  return (
    <>
   <table className='table text-center   '>
      <thead>
        <tr>
        <th>S/N</th>
        <th>Todo Title</th>
        <th>What todo</th>
        <th>Todo Tiime</th>
        <th>Actions</th>
        </tr>
      </thead>
    
    {props.todoArray.map((value, i)=>(
            <tr key={i}>
              <td>{i+1}</td>
              <td>{value.todo}</td>
              <td>{value.whatTodo}</td>
              <td>{value.todoTime}</td>
              <td>
                <button className='btn btn-danger'>Del</button>
                <button className='btn btn-warning'>Edit</button>
              </td>
            </tr>
    ))}
    </table>
    </>
  )
}

export default Listtodo
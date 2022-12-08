import React, {useState} from 'react'

import axios from 'axios'

const Signup = () => {
  const [firstname, setfirstname] = useState("")
  const [lastname, setlastname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [user, setuser] = useState({})

  const signup =()=>{
    let allUsers = {firstname, lastname, email, password}
    axios.post("api/signup", allUsers).then((res)=>{
      console.log(res);
    })
  }
  return (
    <>
    <div className="container col-lg-4 p-5 mt-5 shadow">
        <div className="row">
            <input type="text" placeholder='firstname' className='form-control mb-3 border-0 shadow' onChange={(e)=>setfirstname(e.target.value)} value={firstname}/>
            <input type="text" placeholder='lastname' className='form-control mb-3 border-0 shadow' onChange={(e)=>setlastname(e.target.value)} value={lastname}/>
            <input type="text" placeholder='email' className='form-control mb-3 border-0 shadow' onChange={(e)=>setemail(e.target.value)} value={email}/>
            <input type="text" placeholder='password' className='form-control mb-3 border-0 shadow' onChange={(e)=>setpassword(e.target.value)} value={password}/>
            <button className='btn btn-danger' onClick={()=>signup()}>Sign up</button>
        </div>
    </div>
    </>
  )
}

export default Signup
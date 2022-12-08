
import Head from 'next/head'
import useRouter from 'next/router'
import React from 'react'

let router = useRouter
const Products = () => {
    const takeHome =()=>{
        alert("hello world")
        router.push("/")
    }
  return (
    <>

    <div className='mt-5'>
      
        <button className='btn btn-outline-info form-control p-5' onClick={takeHome}>Take him home</button>

    </div>
    </>
  )
}

export default Products
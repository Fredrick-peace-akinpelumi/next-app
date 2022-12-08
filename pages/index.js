
import React from 'react'
import Image from 'next/image'
import AddTodo from '../component/AddTodo'
import style from '../styles/Index.module.css'

const Home = () => {
  return (
    <>
    <div>Home component</div>
    {/* {props.users.map((item)=>(
        <div key={item.id}>
            <h1>{item.name}</h1>
        </div>
    ))} */}
    </>
  )
}

export default Home;
Home.getLayout = function PageLayout(page){
  return (
    <>
    <Image src="/dope.jpg" alt="" width="300" height="300"/>
    <div>Home component</div>

    {/* {page} */}
    </>
  )
}

// export const getStaticProps = async ()=>{
//   let response = await fetch("https://jsonplaceholder.typicode.com/users")
//   let data = await response.json()
//   return{
//     props:{users:data}
//   }
// }
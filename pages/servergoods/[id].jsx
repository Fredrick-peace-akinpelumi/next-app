import React from 'react'

function More({good}) {
  return (
    <>
    <h1>{good.name}</h1>
    <p>{good.price}</p>
    </>
  )
}

export default More

export async function getServerSideProps(){
    fetch(`http://localhost:4000/${context.params.id}`)
    let data = await resp.json()
    return{
        props:{
            good:data.found
        }
    }
}
import React from 'react'

const Goods = ({goods}) => {
  return (
    <>
    {goods.map((good)=>(
        <div key={good.id}>
            <h1>{good.name}</h1>
            <p>{good.price}</p>
        </div>
    ))}
    </>
  )
}

export default Goods
export async function getServerSideProps(){
    let resp = await fetch("http://localhost:4000/");
    let data = await resp.json();
    return{
       props:{
        goods:data.data
       }
    }
}
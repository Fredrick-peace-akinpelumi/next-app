import Link from 'next/link'
import React from 'react'

const index = ({cards}) => {
  return (
    <>
    <div className='d-flex justify-content-around p-3 flex-wrap'>
    {cards.map((card)=>(
    <div className="card " style={{width: "18rem", marginTop:"5vh"}} key={card.id}>
  <div className="card-body">
    <h5 className="card-title text-center">{card.name}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{card.price}</h6>
    <p className="card-text text-end">{card.quantity}</p>
    <Link href={`/card/${card.id}`}>Full details</Link>
    <a href="#" className="card-link text-center"></a>
  </div>
</div>
      
    ))} 
    </div>
   
    </>
  )
}

export default index

export async function getStaticProps(){
    let res = await fetch("http://localhost:4000/")
    let {data} = await res.json()
    return{
        props:{cards:data}
    }
}
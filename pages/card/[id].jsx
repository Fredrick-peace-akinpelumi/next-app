import { useRouter } from 'next/router'
import React from 'react'

const more = ({cards}) => {
    let router = useRouter
    if(router.isFallBack){
        return(
            <div>Loading........</div>
        )
    }
  return (
    <>
     <div className="card " style={{width: "18rem", marginTop:"5vh"}} >
  <div className="card-body">
    <h5 className="card-title text-center">{cards.name}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{cards.price}</h6>
    <p className="card-text text-end">{cards.quantity}</p>
  </div>
</div>
    </>
  )
}

export default more

export async function getStaticPaths(){
    let res= await fetch(`http://localhost:4000/`)
    let data = await res.json()
    let paths = data.data.map((card)=>{
        return{params:{id:`${card.id}`}}
    })

    return{
        paths,
        fallback:true
    }
}

export async function getStaticProps(context){
    context.params.id 
    let res=await fetch(`http://localhost:4000/${context.params.id}`)
    let data = await res.json()
    return{
        props:{cards:data.found},
    }
}
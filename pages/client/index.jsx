import React from 'react'
import useSWR from 'swr'

const fetcher = async ()=>{
    let response = await fetch("http://localhost:4000/1")
    let data = await response.json()
    return data.found
}
const ClientFetching = () => {
    const {data,error}=useSWR('client',fetcher)
    if(error) return <div>Failed to load</div>
    if(!data) return <div>Loading.....</div>
    return(
        <div style={{marginTop:"5vh"}}>
            <h1>{data.name}</h1>
            <h1>{data.price}</h1>
        </div>
    )
  return (
    <div>ClientFetching</div>
  )
}

export default ClientFetching
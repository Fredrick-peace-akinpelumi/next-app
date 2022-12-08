// import { useRouter } from 'next/router'
// import React from 'react'

// function MoreDetails(post) {
//   let router = useRouter
//   if(router.isFallBack){
//     return(
//       <div>Loading.........</div>
//     )
//   }
//   return (
//     <>
//     <div className='mt-5'>
//     <h1>{post.title}</h1>
//     <h2>hellllo</h2>

//     </div>
//     </>
//   )
// }

// export default MoreDetails

// export async function getStaticPaths(){
//     fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//     let data = await response.json()
//    let paths =  data.map((post)=>{
//        return {params:{id:`${post.id}`}} 
//    })
//   //  return{
//   //   paths:paths,
//   //   fallback:false
//   //  }
//     return{
//         paths:[
//             {params:{id:'1'}},
//             {params:{id:'2'}},
//             {params:{id:'3'}},
//             {params:{id:'4'}},
//         ],
//         fallback:true
//     }
// }

// export async function getStaticProps(context){
//     context.params.id
//     fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//     let data = await response.json()
//     return {
//         props:{post:data}
//     }
// }
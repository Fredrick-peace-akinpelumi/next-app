// import Link from 'next/link'
// import React from 'react'

// const Index = (posts) => {
//   return (
//     <>
//         {posts.map((post)=>(
//             <div key={post.id}>
//               <Link href={`/post/${post.id}`}><h1>{post.id} {post.body}</h1></Link>
//               <div></div>
//               <hr/>
//             </div>
//         ))}
//     </>
//   )
// }

// export default Index

// export async function getStaticProps(){
//     let response = await fetch("https://jsonplaceholder.typicode.com/posts")
//     let data = await response.json()
//     return{
//         props:{posts:data}
//     } 
// }
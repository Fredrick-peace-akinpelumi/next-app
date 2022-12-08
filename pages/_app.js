import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from '../component/Navbar'
import { Component } from 'react'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  if(Component.getLayout){
    return Component.getLayout(
    <>
    <Head>
    <title>Home title</title>
  </Head>
    <Component {...pageProps} />
    </>
    )
  }else{
  return(
  <>
  <Head>
    <title>General title</title>
  </Head>
  <Navbar/>
   <Component {...pageProps} />
    </>
  )
  }
}

export default MyApp

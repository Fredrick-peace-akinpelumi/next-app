import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
     <nav className="navbar navbar-expand-lg fixed-top" style={{backgroundColor:"rgb(24,24,24)"}}>
  <div className="container-fluid">
  <a class="navbar-brand" >
      {/* <img className='ms-lg-5' src={logo} alt="Kuda" width="70" height="50"/> */}
    </a>
     {/* <Link className="navbar-brand "  ><img className="w-25" src={logo} alt="" /></Link> */}
    <button className="navbar-toggler text-white  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <div className="mx-lg-auto">
        <ul className="navbar-nav ">
          <li className="nav-item">
            <Link href='/' className="nav-link active text-white ms-3 fs-5" aria-current="page"><i className="fa-solid px-2 fa-house-chimney "></i>Home</Link>
          </li>
          <li className="nav-item">
           <Link href='/product' className="nav-link text-white ms-3 fs-5"><i className="fa-sharp fa-solid  fa-paper-plane"></i>Product</Link>
          </li>
          <li className="nav-item">
             <Link href='/contact' className="nav-link text-white ms-3  fs-5"> <i className="fa-sharp fa-solid fa-chart-simple"></i> contact</Link>
          </li>
          <li className="nav-item">
             <Link href='/contact/more' className="nav-link text-white ms-3  fs-5"><i class="fa-sharp fa-solid fa-circle-three-quarters"></i>more</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar
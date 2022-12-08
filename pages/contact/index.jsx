import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    <>
    <div className="mt-5">
    <div>Contact page</div>
    <Link href="/">Landing page</Link>
    <Link href="/contact/more">Landing page</Link>
    </div>
    </>
  )
}

export default Contact
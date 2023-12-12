import React from 'react'
import Link from 'next/link'

const header
 = () => {
  return (
    <><Link href={"/"}>Home</Link>
    <header>
        <ul>
            <li><Link href={"/about"}>About</Link></li>
            <li><Link href={"/FQA"}>FQA</Link></li>
            <li><Link href={"/news"}>News</Link></li>
            <li><Link href={"/products"}>Products</Link></li>
        </ul>
    </header>
    </>
  )
}

export default header


import React from 'react'
import Header from './header'
import Footer from './footer'

interface Props {
    children: React.ReactNode
}

const layout = ({children}: Props) => {
  return (
    <>
        <Header></Header>
        {children}
        <Footer></Footer>
    </>
  )
}

export default layout

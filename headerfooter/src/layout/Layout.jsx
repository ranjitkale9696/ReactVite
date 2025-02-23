import React from 'react'
import Footer from './Footer'
import Routers from '../routers/Routers'
import Header from './Header'


const Layout = () => {
  return (
    <>
    
   <Header/>
  
   <main>
   <Routers/>
   </main>
   <Footer/>
    </>
  )
}

export default Layout

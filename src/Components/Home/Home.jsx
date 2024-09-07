import React from 'react'
import Footer from '../Footer'
import Hero from './Hero'
import Service from './Service'
import LatestWork from './LatestWork'
import Contact from './Contact'
import SideBar from '../SideBar'

function Home({ sideBar, setSideBar }) {
  return (
    <div className='fullbackgroundcolor px-4 xl:px-12 relative ' >
      <div className=' absolute' >
        <Hero />
        <Service />
        <LatestWork />
        <Contact />
        <Footer />
      </div>
      <div className={`${sideBar ? 'visible h-[100vh] ' : 'h-0 w-0 invisible'} fixed z-50 top-0 right-0`} >
        <SideBar sideBar={sideBar} setSideBar={setSideBar} />
      </div>
    </div>
  )
}

export default Home
import React from 'react'
import { Outlet } from 'react-router-dom'
import MobileNavbar from '../component/navbar/mobile-navbar'


const RootLayout = () => {
  return (
    <div>
        <div className='  sm:hidden mb-15'>
           <MobileNavbar/>
        </div>
        <Outlet />
    </div>
  )
}

export default RootLayout
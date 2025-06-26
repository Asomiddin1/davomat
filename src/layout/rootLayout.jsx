import React from 'react'
import { Outlet } from 'react-router-dom'
import MobileNavbar from '../component/navbar/mobile-navbar'


const RootLayout = () => {
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default RootLayout
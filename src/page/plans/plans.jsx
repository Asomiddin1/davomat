import React from 'react'
import Sidebar from '../../component/student-sidebar/sidebar'
import MobileNavbar from '../../component/navbar/mobile-navbar';

const Plans = () => {
  return (
    <div className="w-full h-screen bg-[#f0f2f5]">
      <div className="sm:hidden">
        <MobileNavbar />
      </div>
      <div className="flex">
        <div className="sm:block hidden">
          <Sidebar />
        </div>
        <div className="w-full py-24 sm:py-6 px-4 sm:px-6 lg:px-8">
          plans page
        </div>
      </div>
    </div>
  );
}

export default Plans
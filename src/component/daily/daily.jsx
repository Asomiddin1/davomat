import React from 'react'
import DateCarousel from '../carousel/carousel'

const Daily = () => {
  return (
    <div>
      <DateCarousel />
      <div className="bg-white shadow-md p-6 rounded-2xl mt-4">
        <h2 className="text-lg font-semibold flex justify-between items-center">
          <span>Kunlik Dars Jadvali</span>
          <span>25 - iyun</span>
        </h2>
        <div className="mt-4">
          <div className="subject-bg py-2 px-4 rounded-lg mb-2">
            <div className="flex justify-between items-center">
              <h1>Php</h1>
              <p>09:00</p>
            </div>
            <p>Xona : 302</p>
            <p>Guruh : 23B</p>
          </div>
        </div>

        <div className="mt-4">
          <div className="subject-bg py-2 px-4 rounded-lg mb-2">
            <div className="flex justify-between items-center">
              <h1>Php</h1>
              <p>09:00</p>
            </div>
            <p>Xona : 302</p>
            <p>Guruh : 23B</p>
          </div>
        </div>

        <div className="mt-4">
          <div className="subject-bg py-2 px-4 rounded-lg mb-2">
            <div className="flex justify-between items-center">
              <h1>Php</h1>
              <p>09:00</p>
            </div>
            <p>Xona : 302</p>
            <p>Guruh : 23B</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Daily
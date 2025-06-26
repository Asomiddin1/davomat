import React from 'react';
import DateCarousel from '../carousel/carousel';

const Daily = () => {
  return (
    <div className="w-full mr-10">
      <div className='  overflow-x-hidden'>
        <DateCarousel />
      </div>

      <div className="bg-white shadow-md p-4 sm:p-6 rounded-2xl mt-4">
        <h2 className="text-base sm:text-lg md:text-xl font-semibold flex justify-between items-center flex-wrap gap-2">
          <span>Kunlik Dars Jadvali</span>
          <span className="text-sm sm:text-base text-gray-600">25 - iyun</span>
        </h2>

        {[1, 2, 3].map((_, index) => (
          <div key={index} className="mt-4">
            <div className="subject-bg bg-gray-100 py-2 px-3 sm:px-4 rounded-lg mb-2">
              <div className="flex justify-between items-center flex-wrap gap-2">
                <h1 className="text-base sm:text-lg font-medium">Php</h1>
                <p className="text-sm sm:text-base text-gray-600">09:00</p>
              </div>
              <p className="text-sm sm:text-base">Xona : 302</p>
              <p className="text-sm sm:text-base">Guruh : 23B</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Daily;



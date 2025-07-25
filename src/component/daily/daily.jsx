import React from "react";
import DateCarousel from "../carousel/carousel"; // Assuming this component exists

const scheduleData = [
  {
    startTime: "09:00",
    endTime: "10:15",
    title: "Yapon tili",
    type: "Ma'ruza",
    room: "203",
    teacher: "Naoki Date",
    color: "bg-gray-500", // Matches the first block's color in the image
    borderColor: "border-gray-500", // Corresponding border color
  },
  {
    startTime: "10:20",
    endTime: "11:40",
    title: "Yapon tili",
    type: "Maruza",
    room: "203",
    teacher: "Naoki Date",
    color: "bg-green-500", // Matches the second block's color in the image
    borderColor: "border-green-500", // Corresponding border color
  },
  {
    startTime: "13:50",
    endTime: "15:05",
    title: "Php dasturlash tili",
    type: "Ma'ruza",
    room: "304",
    teacher: "Erkaboy Qadamboyev",
    color: "bg-orange-500", // Matches the third block's color in the image
    borderColor: "border-orange-500", // Corresponding border color
  },
];

const Daily = () => {
  return (
    <div className="w-full mr-10">
      <div className="overflow-x-hidden mb-4">
        <DateCarousel />
      </div>

      {/* Barcha darslarni o'rab turadigan asosiy konteyner */}
      <div className="bg-white shadow-md p-4 sm:p-6 rounded-2xl">
        <h2 className="text-base sm:text-lg md:text-xl font-semibold flex justify-between items-center flex-wrap gap-2 mb-4 ">
          <span className="text-[black]">Kunlik Dars Jadvali</span>
          <span className="text-sm sm:text-base text-gray-600">25 - iyun</span>
        </h2>

        {/* Bu yerda har bir dars alohida item sifatida ko'rsatiladi */}
        {scheduleData.map((item, index) => (
          <div
            key={index}
            // Added 'border', 'border-solid', and dynamic 'item.borderColor'
            className={`flex items-stretch mb-4 rounded-lg shadow-md overflow-hidden border border-solid ${item.borderColor}`}
          >
            {/* Time Block - Left Side */}
            <div
              className={`flex flex-col justify-center items-center p-4 text-white ${item.color} w-24 flex-shrink-0`}
            >
              <span className="text-lg font-bold">{item.startTime}</span>
              <span className="text-lg font-bold">{item.endTime}</span>
            </div>

            {/* Details Block - Right Side */}
            <div className="flex-grow p-4 bg-white flex flex-col justify-between">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mb-2">{item.type}</p>
              <div className="flex justify-between items-end">
                <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
                  Xona - {item.room}
                </span>
                <span className="text-gray-500 text-sm">{item.teacher}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Daily;

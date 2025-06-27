import React from "react";

const scheduleData = [
  {
    startTime: "08:30",
    endTime: "09:50",
    title: "Web dasturlashga kirish",
    type: "Amaliyot",
    room: "A 450",
    teacher: "Yusupov.B.K",
    color: "bg-gray-500", // Custom color for the time block
  },
  {
    startTime: "10:00",
    endTime: "11:20",
    title: "Ma'lumotlar tuzilmasi va algoritmlar",
    type: "Laboratoriya",
    room: "A 320",
    teacher: "Qalandarov.A.B",
    color: "bg-green-500", // Custom color for the time block
  },
  {
    startTime: "13:30",
    endTime: "14:50",
    title: "Oliy matematika",
    type: "Ma'ruza",
    room: "A 300",
    teacher: "Azimov.D.L",
    color: "bg-orange-500", // Custom color for the time block
  },
];

const ScheduleItem = ({
  startTime,
  endTime,
  title,
  type,
  room,
  teacher,
  color,
}) => {
  return (
    <div className="flex items-center mb-4 rounded-lg shadow-md overflow-hidden">
      {/* Time Block */}
      <div
        className={`flex flex-col justify-center items-center p-4 text-white ${color} w-24 flex-shrink-0`}
      >
        <span className="text-lg font-bold">{startTime}</span>
        <span className="text-lg font-bold">{endTime}</span>
      </div>

      {/* Details Block */}
      <div className="flex-grow p-4 bg-white flex flex-col justify-between">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
        <p className="text-gray-600 text-sm mb-2">{type}</p>
        <div className="flex justify-between items-end">
          <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
            {room}
          </span>
          <span className="text-gray-500 text-sm">{teacher}</span>
        </div>
      </div>
    </div>
  );
};

const Subject = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-center">
      <div className="w-full max-w-md">
        {scheduleData.map((item, index) => (
          <ScheduleItem
            key={index}
            startTime={item.startTime}
            endTime={item.endTime}
            title={item.title}
            type={item.type}
            room={item.room}
            teacher={item.teacher}
            color={item.color}
          />
        ))}
      </div>
    </div>
  );
};

export default Subject;

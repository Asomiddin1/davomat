// src/components/CourseList.js
import React from "react";
import {
  BookOpenIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/solid";

function CourseList() {
  const courses = [
    {
      name: "Matematika",
      teacher: "Prof. Abdullayev A.A.",
      attendance: 89,
      attendedLessons: 32,
      totalLessons: 96,
      status: "Yaxshi",
    },
    {
      name: "Dasturlash asoslari",
      teacher: "Dots. Karimova M.S.",
      attendance: 90,
      attendedLessons: 38,
      totalLessons: 42,
      status: "Yaxshi",
    },
    {
      name: "Fizika",
      teacher: "Prof. Rahmonov B.T.",
      attendance: 83,
      attendedLessons: 25,
      totalLessons: 30,
      status: "Qarzdor",
    },
  ];

  return (
    <section>
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Fanlar bo'yicha ma'lumot
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </section>
  );
}

// Yordamchi komponent
const CourseCard = ({
  name,
  teacher,
  attendance,
  attendedLessons,
  totalLessons,
  status,
}) => {
  const isGood = status === "Yaxshi";
  const statusColor = isGood
    ? "text-green-600 bg-green-100"
    : "text-red-600 bg-red-100";
  const attendanceColor = isGood ? "text-green-600" : "text-red-600";
  const progressBarColor = isGood ? "bg-green-500" : "bg-red-500";
  const progressWidth = (attendedLessons / totalLessons) * 100;

  return (
    <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <BookOpenIcon className="h-6 w-6 text-gray-600" />
          <div>
            <h4 className="text-xl font-semibold text-gray-900">{name}</h4>
            <p className="text-sm text-gray-500">{teacher}</p>
          </div>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor}`}
        >
          {isGood ? (
            <CheckCircleIcon className="h-4 w-4 inline-block mr-1" />
          ) : (
            <ExclamationCircleIcon className="h-4 w-4 inline-block mr-1" />
          )}
          {status}
        </span>
      </div>

      <div>
        <p className={`text-4xl font-bold ${attendanceColor}`}>{attendance}%</p>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
          <div
            className={`${progressBarColor} h-2 rounded-full`}
            style={{ width: `${progressWidth}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          {attendedLessons}/{totalLessons} dars
        </p>
      </div>

      <button className="text-blue-600 font-medium text-sm hover:underline">
        Batafsil
      </button>
    </div>
  );
};

export default CourseList;

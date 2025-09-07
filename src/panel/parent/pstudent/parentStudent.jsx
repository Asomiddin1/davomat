import React from "react";
import {
  EnvelopeIcon,
  BuildingOffice2Icon,
  PhoneIcon,
  ChartBarIcon,
  AcademicCapIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const ParentStudent = () => {
  // Statistik ma’lumotlar
  const stats = [
    { name: "Email", value: "2312136a@jdu.uz", icon: EnvelopeIcon },
    { name: "Fakultet", value: "Kompyuter Fanlari", icon: BuildingOffice2Icon },
    { name: "Telefon", value: "+998 90 123 45 67", icon: PhoneIcon },
    { name: "Umumiy Davomat", value: "02", icon: ChartBarIcon },
    { name: "Joriy Semster", value: "6", icon: AcademicCapIcon },
    { name: "Gpa", value: "4.2", icon: TrophyIcon },
  ];

  // Kurslar
  const courses = [
    {
      name: "Transform Your UX/UI Skills and...",
      date: "28 Oct, 2024",
      lessons: 4,
      quiz: 4,
      assignment: 1,
      progress: 100,
      image: "https://via.placeholder.com/40/a5b4fc",
    },
    {
      name: "Learn The Human-Centered Des...",
      date: "27 Oct, 2024",
      lessons: 4,
      quiz: 3,
      assignment: 1,
      progress: 60,
      image: "https://via.placeholder.com/40/fcd34d",
    },
    {
      name: "Design Systems Bootcamp.",
      date: "26 Oct, 2024",
      lessons: 4,
      quiz: 2,
      assignment: 1,
      progress: 100,
      image: "https://via.placeholder.com/40/a5b4fc",
    },
    {
      name: "Articulating Design Bootcamp.",
      date: "26 Oct, 2024",
      lessons: 4,
      quiz: 2,
      assignment: 1,
      progress: 50,
      image: "https://via.placeholder.com/40/d8b4fe",
    },
  ];

  return (
    <div className="min-h-screen p-4 sm:p-3">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Profil */}
        <div className="bg-white shadow-lg p-4 sm:p-6 rounded-2xl flex items-center gap-4 hover:shadow-xl transition">
          <img
            className="w-20 h-20 rounded-full object-cover border-2 border-indigo-400"
            src="https://www.holmesglen.edu.au/content/holmesglen/holmesglen/au/en/current-students/new-students/_jcr_content/root/container/container/container_copy_copy__911007940/container_1533697349/container_copy/teaser.coreimg.85.1024.jpeg/1699931099815/gettyimages-1438185814--660-x-495px.jpeg"
            alt="profile"
          />
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
              Asomiddin Qarshiyev
            </h2>
            <p className="text-sm text-gray-500">ID : 2312136</p>
          </div>
        </div>

        {/* Statistik kartalar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col gap-2"
            >
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500">{item.name}</p>
                <div className="p-2 bg-indigo-50 rounded-full text-indigo-500">
                  <item.icon className="h-5 w-5" />
                </div>
              </div>
              <p className="text-sm sm:text-base font-bold text-gray-900">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* Kurslar */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
            Course List
          </h2>

          {/* Mobil Card view */}
          <div className="grid gap-4 md:hidden">
            {courses.map((course, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center mb-3">
                  <img
                    src={course.image}
                    alt=""
                    className="h-10 w-10 rounded-lg"
                  />
                  <div className="ml-3">
                    <p className="font-medium text-gray-900 line-clamp-1">
                      {course.name}
                    </p>
                    <p className="text-xs text-gray-500">{course.date}</p>
                  </div>
                </div>
                <div className="flex justify-between text-xs sm:text-sm text-gray-600">
                  <span>Lessons: {course.lessons}</span>
                  <span>Quiz: {course.quiz}</span>
                  <span>Assign: {course.assignment}</span>
                </div>
                <div className="mt-2 flex items-center">
                  <span className="text-xs mr-2 font-medium">
                    {course.progress}%
                  </span>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-500 ${
                        course.progress === 100
                          ? "bg-green-500"
                          : "bg-yellow-400"
                      }`}
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  {[
                    "COURSE NAME",
                    "LESSON",
                    "QUIZ",
                    "ASSIGNMENT",
                    "PROGRESS",
                    "",
                  ].map((h, i) => (
                    <th
                      key={i}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {courses.map((course, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 whitespace-nowrap flex items-center">
                      <img
                        className="h-10 w-10 rounded-lg"
                        src={course.image}
                        alt=""
                      />
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900 line-clamp-1">
                          {course.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {course.date}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-2 text-sm text-gray-700 text-center">
                      {course.lessons}
                    </td>
                    <td className="px-6 py-2 text-sm text-gray-700 text-center">
                      {course.quiz}
                    </td>
                    <td className="px-6 py-2 text-sm text-gray-700 text-center">
                      {course.assignment}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      <div className="flex items-center">
                        <span className="text-sm mr-2 font-medium">
                          {course.progress}%
                        </span>
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full transition-all duration-500 ${
                              course.progress === 100
                                ? "bg-green-500"
                                : "bg-yellow-400"
                            }`}
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-gray-400 hover:text-gray-600">
                        <ChevronDownIcon className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentStudent;

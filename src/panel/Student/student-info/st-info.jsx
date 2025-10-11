import {
  AcademicCapIcon,
  BuildingOffice2Icon,
  ChartBarIcon,
  EnvelopeIcon,
  PhoneIcon,
  TrophyIcon,
  XMarkIcon,
  CheckIcon, 
} from "@heroicons/react/24/outline";
import MobileNavbar from "../navbar/mobile-navbar";
import Sidebar from "../student-sidebar/sidebar";
import { Link, useNavigate } from "react-router-dom"; 


const StudentInfo = () => {
  const navigate = useNavigate(); // useNavigate hook'ini ishlatish

  const stats = [
    { name: "Fakultet", value: "Kompyuter Fanlari", icon: BuildingOffice2Icon },
    { name: "Telefon", value: "+998 90 123 45 67", icon: PhoneIcon },
    { name: "Email", value: "2312136a@jdu.uz", icon: EnvelopeIcon },
    { name: "Umumiy Davomat", value: "92%", icon: ChartBarIcon },
    { name: "Joriy Semster", value: "6", icon: AcademicCapIcon },
    { name: "GPA", value: "4.2", icon: TrophyIcon },
  ];

  const courses = [
    { id: 1, name: "Algoritmlar", grade: "A", attendance: "95%" },
    { id: 2, name: "Ma’lumotlar bazasi", grade: "B", attendance: "89%" },
    { id: 3, name: "Kompyuter tarmoqlari", grade: "C", attendance: "75%" },
    { id: 4, name: "Veb dasturlash", grade: "A", attendance: "98%" },
    { id: 5, name: "Sun’iy intellekt", grade: "F", attendance: "35%" },
  ];

  const handleRowClick = (courseId) => {
    navigate(`subject-detail`);
  };

  return (
    <div className="w-full h-screen custom_bg dark:bg-gray-900 flex">
      {/* Mobil navbar */}
      <div className="sm:hidden fixed top-0 left-0 w-full z-10 bg-[#f0f2f5] dark:bg-gray-900">
        <MobileNavbar />
      </div>

      {/* Sidebar */}
      <div className="hidden sm:block h-screen w-64 flex-shrink-0">
        <Sidebar />
      </div>

      {/* Scroll qiladigan content */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 pt-18 sm:pt-6">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Profil */}
          <div className="bg-white shadow-lg p-4 sm:p-6 rounded-2xl flex items-center justify-between gap-4 hover:shadow-xl transition">
            <div className="flex items-center gap-4">
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
            <div>
              <Link to="groups">
              <button className="py-1 px-2 bg-blue-500 text-[white] rounded font-semibold cursor-pointer">Mening Gruhlarim</button>
              </Link>
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

          {/* Kurslar (Fanlar, baholar va davomat) */}
          <div className="bg-white shadow-lg rounded-2xl p-4 sm:p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Fanlar va Davomat
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-600">
                <thead className="bg-gray-300 text-gray-700 text-sm">
                  <tr>
                    <th className="px-4 py-2">Fan nomi</th>
                    <th className="px-4 py-2">Kretditlari</th>
                    <th className="px-4 py-2">Davomat</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((course) => (
                    <tr
                      key={course.id}
                      className="border-b hover:bg-gray-100 transition cursor-pointer"
                      onClick={() => handleRowClick(course.id)}
                    >
                      <td className="px-4 py-2">{course.name}</td>
                      <td
                        className={`px-4 py-2 font-bold flex items-center gap-2 ${course.grade.startsWith("F") ? "text-red-600" : "text-green-600"
                          }`}
                      >
                        {course.grade}
                        {course.grade.startsWith("F") ? (
                          <XMarkIcon className="h-6 w-6" />
                        ) : (
                          <CheckIcon className="h-6 w-6" />
                        )}
                      </td>
                      <td className="px-4 py-2">{course.attendance}</td>
                    </tr>
                  ))}

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentInfo;
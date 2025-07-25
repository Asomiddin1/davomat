
import MobileNavbar from "../../component/navbar/mobile-navbar";
import Sidebar from "../../component/student-sidebar/sidebar";

const StudentInfo = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 dark:bg-gray-900 overflow-y-hidden">
      <div className="sm:hidden mb-12">
        <MobileNavbar />
      </div>
      <div className="flex overflow-hidden h-screen">
        <div className="hidden sm:block ">
          <Sidebar />
        </div>
        <div className="flex-1 p-4 sm:p-6 lg:p-8  overflow-y-hidden sm:overflow-y-auto">
          {" "}
          {/* Added flex-1 and overflow-y-auto */}
          {/* Main content wrapper with consistent padding */}
          <div className="max-w-4xl mx-auto space-y-6">
            {" "}
            {/* Added space-y for consistent vertical spacing */}
            {/* Profil qismi */}
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6 border border-gray-200 dark:border-gray-700">
              <div className="avatar mask mask-squircle w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0">
                <img
                  src="https://img.daisyui.com/images/profile/demo/distracted1@192.webp"
                  alt="Profile"
                  className="rounded-full object-cover w-full h-full"
                />
              </div>
              <div className="text-center sm:text-left">
                <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mt-2 sm:mt-0">
                  Qarshiyev Asomiddin
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  ID: <span className="font-semibold">2312136</span>
                </p>
                <p className="text-md text-gray-500 dark:text-gray-400 mt-2">
                  <span className="font-medium text-blue-600 dark:text-blue-400">
                    Dasturiy Ta'minot Muhandisligi
                  </span>{" "}
                  talabasi
                </p>
              </div>
            </div>
            {/* Shaxsiy Ma'lumotlar Section */}
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-gray-700 flex items-center">
                <svg
                  className="w-7 h-7 mr-3 text-blue-600 dark:text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path>
                </svg>
                Shaxsiy Ma'lumotlar
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {/* Email */}
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg flex items-center shadow-sm hover:shadow-md transition-shadow duration-200 border border-blue-100 dark:border-blue-900">
                  <svg
                    className="w-6 h-6 mr-4 text-blue-600 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Email
                    </p>
                    <p className="text-gray-900 dark:text-white font-semibold text-base">
                      2312136a@jdu.uz
                    </p>
                  </div>
                </div>

                {/* Fakultet */}
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg flex items-center shadow-sm hover:shadow-md transition-shadow duration-200 border border-purple-100 dark:border-purple-900">
                  <svg
                    className="w-6 h-6 mr-4 text-purple-600 dark:text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    ></path>
                  </svg>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Fakultet
                    </p>
                    <p className="text-gray-900 dark:text-white font-semibold text-base">
                      Kompyuter Fanlari
                    </p>
                  </div>
                </div>

                {/* Telefon */}
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg flex items-center shadow-sm hover:shadow-md transition-shadow duration-200 border border-green-100 dark:border-green-900">
                  <svg
                    className="w-6 h-6 mr-4 text-green-600 dark:text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Telefon
                    </p>
                    <p className="text-gray-900 dark:text-white font-semibold text-base">
                      +998 90 123 45 67
                    </p>
                  </div>
                </div>

                {/* Mutaxassislik */}
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg flex items-center shadow-sm hover:shadow-md transition-shadow duration-200 border border-yellow-100 dark:border-yellow-900">
                  <svg
                    className="w-6 h-6 mr-4 text-yellow-600 dark:text-yellow-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    ></path>
                  </svg>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Mutaxassislik
                    </p>
                    <p className="text-gray-900 dark:text-white font-semibold text-base">
                      Dasturiy Ta'minot Muhandisligi
                    </p>
                  </div>
                </div>

                {/* Manzil */}
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg flex items-center shadow-sm hover:shadow-md transition-shadow duration-200 border border-red-100 dark:border-red-900">
                  <svg
                    className="w-6 h-6 mr-4 text-red-600 dark:text-red-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Manzil
                    </p>
                    <p className="text-gray-900 dark:text-white font-semibold text-base">
                      Toshkent, O'zbekiston
                    </p>
                  </div>
                </div>

                {/* O'quv Yili */}
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg flex items-center shadow-sm hover:shadow-md transition-shadow duration-200 border border-blue-100 dark:border-blue-900">
                  <svg
                    className="w-6 h-6 mr-4 text-blue-600 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      O'quv Yili
                    </p>
                    <p className="text-gray-900 dark:text-white font-semibold text-base">
                      2024-2025
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Akademik Ko'rsatkichlar Section */}
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-gray-700 flex items-center">
                <svg
                  className="w-7 h-7 mr-3 text-blue-600 dark:text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 4C7.31 4 3.5 7.81 3.5 12.5S7.31 21 12 21s8.5-3.81 8.5-8.5S16.69 4 12 4zm0 2.25c.69 0 1.25.56 1.25 1.25S12.69 9.75 12 9.75s-1.25-.56-1.25-1.25S11.31 6.25 12 6.25zm0 11.5c-2.33 0-4.31-1.42-5.18-3.41.09-1.31 2.6-2.09 5.18-2.09 2.58 0 5.09.78 5.18 2.09-.87 1.99-2.85 3.41-5.18 3.41z"></path>
                </svg>
                Akademik Ko'rsatkichlar
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {/* GPA */}
                <div className="bg-blue-100 dark:bg-blue-900/30 p-6 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col justify-center items-center">
                  <p className="text-2xl font-extrabold text-blue-800 dark:text-blue-300">
                    4.2
                  </p>
                  <p className="text-xl text-blue-600 dark:text-blue-400 mt-2 font-medium">
                    GPA
                  </p>
                </div>

                {/* Umumiy Davomat */}
                <div className="bg-green-100 dark:bg-green-900/30 p-6 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col justify-center items-center">
                  <p className="text-2xl font-extrabold text-green-800 dark:text-green-300">
                    92%
                  </p>
                  <p className="text-xl text-green-600 dark:text-green-400 mt-2 font-medium">
                    Umumiy Davomat
                  </p>
                </div>

                {/* Joriy Semestr */}
                <div className="bg-purple-100 dark:bg-purple-900/30 p-6 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col justify-center items-center">
                  <p className="text-2xl font-extrabold text-purple-800 dark:text-purple-300">
                    6
                  </p>
                  <p className="text-xl text-purple-600 dark:text-purple-400 mt-2 font-medium">
                    Joriy Semestr
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentInfo;

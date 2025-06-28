import React, { useState, useRef, useEffect } from "react";
import { CiUser } from "react-icons/ci";
import { FaCalendar } from "react-icons/fa";
import { LuClipboardCheck } from "react-icons/lu";
import { PiStudentFill } from "react-icons/pi";

const TeacherPanel = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef();

  // Tashqariga bosilganda menyuni yopish
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-[#f2eded] min-h-screen">
      {/* Header */}
      <div className="h-[10vh] w-full bg-gradient-to-r from-[#0a47c1] to-[#1d74f1] flex items-center justify-between px-8 shadow-md">
        <div>
          <h1 className="text-xl font-semibold text-white">
            O'qituvchi Boshqaruv Paneli
          </h1>
          <p className="text-sm text-white">Ta'lim markazi</p>
        </div>

        <div className="relative" ref={menuRef}>
          <div
            onClick={() => setOpenMenu(!openMenu)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img
              className="w-10 h-10 rounded-full border-2 border-white object-cover"
              src="https://www.holmesglen.edu.au/content/holmesglen/holmesglen/au/en/current-students/new-students/_jcr_content/root/container/container/container_copy_copy__911007940/container_1533697349/container_copy/teaser.coreimg.85.1024.jpeg/1699931099815/gettyimages-1438185814--660-x-495px.jpeg"
              alt="Profile"
            />
            <div className="text-white">
              <p className="text-sm font-medium">Umid Kamolov</p>
              <p className="text-xs text-[#d4d4d4]">Matematika o'qituvchisi</p>
            </div>
          </div>

          {/* Dropdown menyu */}
          {openMenu && (
            <div className="absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-lg z-50">
              <ul className="py-2 text-sm text-gray-700">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Profil
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Sozlamalar
                </li>
                <li
                  onClick={() => {
                    localStorage.removeItem("user");
                    window.location.href = "/login";
                  }}
                  className="px-4 py-2 hover:bg-red-50 text-red-500 cursor-pointer"
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Pastki qism sizga tegishli o'zgaruvchan content */}
      <div className="px-4 md:px-8 py-6">
        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 shadow  flex justify-between items-center px-4">
            <div>
              <p className="text-sm text-gray-500">Jami talabalar</p>
              <h2 className="text-3xl font-bold text-gray-800">2</h2>
            </div>
            <div className="text-blue-600 text-2xl px-3 ">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
                <CiUser />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow  flex justify-between items-center px-4">
            <div>
              <p className="text-sm text-gray-500">Bo'sh xonalar</p>
              <h2 className="text-3xl font-bold text-gray-800">5</h2>
            </div>
            <div className="text-green-600 text-1xl px-6">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full">
                <FaCalendar />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow  flex justify-between items-center px-4">
            <div>
              <p className="text-sm text-gray-500">Band xonalar</p>
              <h2 className="text-3xl font-bold text-gray-800">3</h2>
            </div>
            <div className="text-red-600 text-2xl px-6">
              <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full">
                <LuClipboardCheck />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow  flex justify-between items-center px-4">
            <div>
              <p className="text-sm text-gray-500">O'rtacha davomat</p>
              <h2 className="text-3xl font-bold text-gray-800">86%</h2>
            </div>
            <div className="text-blue-600 text-2xl px-6">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
                <PiStudentFill />
              </div>
            </div>
          </div>
        </div>

        {/* Dars Belgilash Form */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Dars belgilash</h2>
          <p className="text-sm text-gray-500 mb-6">
            Yangi dars va xona belgilash hamda mavjud darslarni boshqarish
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <select className="border rounded px-4 py-2 w-full">
              <option>Kunni tanlang</option>
              <option>Dushanba</option>
              <option>Seshanba</option>
              <option>Chorshanba</option>
              <option>Payshanba</option>
              <option>Juma</option>
              <option>Shanba</option>
            </select>
            <input type="time" className="border rounded px-4 py-2 w-full" />
            <input
              type="text"
              placeholder="Xona raqami"
              className="border rounded px-4 py-2 w-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <input
              type="text"
              placeholder="Fan nomi"
              className="border rounded px-4 py-2 w-full"
            />
            <input
              type="text"
              placeholder="Guruh nomi"
              className="border rounded px-4 py-2 w-full"
            />
            <button className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 transition">
              Darsni belgilash
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherPanel;

import React, { useState, useRef, useEffect } from "react";

const ParentPanel = () => {
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
    <div className="min-h-screen bg-[#f2eded]">
      {/* Header */}
      <div className="flex items-center justify-between h-[10vh] bg-gradient-to-r from-[#0a47c1] to-[#1d74f1] px-8">
        <div>
          <h1 className="text-xl md:text-2xl font-semibold text-white">
            Ota-onalar paneli
          </h1>
          <p className="text-sm text-[#d4d4d4]">
            Farzandingizning o‘qish jarayonini kuzatib boring
          </p>
        </div>

        {/* Profile menu */}
        <div className="relative" ref={menuRef}>
          <div
            onClick={() => setOpenMenu(!openMenu)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img
              className="w-10 h-10 rounded-full border-2 border-white object-cover"
              src="https://i.guim.co.uk/img/media/59baecefbc73d3bcf4a47b017453a27f19b55175/331_488_2481_1489/master/2481.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d201beebc8267e2197eb367488bafd4b"
              alt="Profile"
            />
            <div className="text-white">
              <p className="text-sm font-medium">Umid Kamolov</p>
              <p className="text-xs text-[#d4d4d4]">Ota ona</p>
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

      {/* Body */}
      <div className="md:px-8 py-6 px-4">
        {/* Student Card */}
        <div className="bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] rounded-2xl text-white p-6 flex flex-col lg:flex-row items-center lg:items-start gap-6 shadow-md mb-8">
          <div className="relative">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="student"
              className="w-28 h-28 rounded-full border-4 border-white shadow-md object-cover"
            />
            <div className="absolute bottom-0 right-0 bg-green-500 w-5 h-5 rounded-full border-2 border-white"></div>
          </div>
          <div className="flex-1 space-y-2">
            <h2 className="text-2xl font-bold">Ahmad Karimov</h2>
            <p className="text-sm text-white/80">Talaba ID: 2023001</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="bg-white/20 p-3 rounded-lg">
                <p className="text-sm text-white/80">📘 Fakultet</p>
                <p className="text-white font-medium">
                  Axborot texnologiyalari
                </p>
              </div>
              <div className="bg-white/20 p-3 rounded-lg">
                <p className="text-sm text-white/80">📖 Mutaxassislik</p>
                <p className="text-white font-medium">Dasturiy injiniring</p>
              </div>
              <div className="bg-white/20 p-3 rounded-lg">
                <p className="text-sm text-white/80">🎓 Semestr</p>
                <p className="text-white font-medium">3-semestr</p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistika cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-4 shadow text-center">
            <p className="text-sm text-gray-500">Jami fanlar</p>
            <h2 className="text-2xl font-bold text-blue-600">5</h2>
          </div>
          <div className="bg-white rounded-xl p-4 shadow text-center">
            <p className="text-sm text-gray-500">O‘rtacha davomad</p>
            <h2 className="text-2xl font-bold text-green-600">89%</h2>
          </div>
          <div className="bg-white rounded-xl p-4 shadow text-center">
            <p className="text-sm text-gray-500">Joriy semestr</p>
            <h2 className="text-2xl font-bold text-purple-600">3</h2>
          </div>
          <div className="bg-white rounded-xl p-4 shadow text-center">
            <p className="text-sm text-gray-500">Qarzdorliklar</p>
            <h2 className="text-2xl font-bold text-red-600">1</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentPanel;

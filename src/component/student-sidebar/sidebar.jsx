import React from "react";
import {
  CalendarDaysIcon,
  ArrowPathIcon,
  UserIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline"; 

const Sidebar = () => {
  const menuItems = [
    {
      name: "Dars jadvali",
      icon: CalendarDaysIcon,
      current: true,
      notification: 0,
    },
    {
      name: "Qayta o'qish",
      icon: ArrowPathIcon,
      current: false,
      notification: 0,
    },
    {
      name: "Talaba ma'lumoti",
      icon: UserIcon,
      current: false,
      notification: 0,
    },
    { name: "Xabarlar", icon: EnvelopeIcon, current: false, notification: 1 },
    {
      name: "Elektron kutubxona",
      icon: GlobeAltIcon,
      current: false,
      notification: 0,
    },
    { name: "Tizim", icon: Cog6ToothIcon, current: false, notification: 0 },
  ];

  const user = {
    name: "Asomiddin Qarshiyev",
    role: "Student",
    imageUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=144&h=144&q=80", // 
  };

  return (
    <div className="flex h-[100vh] bg-white shadow-xl">
      <div className="flex flex-col w-64 border-r border-gray-200">
        {/* HEMIS Student Header */}
        <div className="px-6 py-4 border-b border-gray-200">
          <h1 className="text-xl font-bold text-gray-800">
            Jdu{" "}
            <span className="text-blue-600 text-lg font-normal">Student</span>
          </h1>
        </div>

        {/* User Profile Section (Top) */}
        <div className="flex items-center px-6 py-4 border-b border-gray-200">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src={user.imageUrl}
            alt={user.name}
          />
          <div className="ml-3">
            <p className="text-sm font-semibold text-gray-900">{user.name}</p>
            <p className="text-xs text-gray-500">ID : 2312136</p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-2 py-4 space-y-1">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href="#" // Haqiqiy sahifa yo'liga o'zgartiring
              className={`
                ${
                  item.current
                    ? "bg-blue-500 text-white"
                    : "text-gray-700 bg-gray-100"
                }
                group flex items-center px-4 py-2 text-sm font-medium rounded-md relative mb-2
              `}
            >
              <item.icon
                className={`
                  ${
                    item.current
                      ? "text-white"
                      : "text-gray-400 group-hover:text-gray-500"
                  }
                  mr-3 flex-shrink-0 h-6 w-6
                `}
                aria-hidden="true"
              />
              {item.name}
              {item.notification > 0 && (
                <span className="absolute right-4 top-1/2 -translate-y-1/2 ml-auto inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-500 text-white">
                  {item.notification}
                </span>
              )}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;


import {
  ListBulletIcon,
  ArrowLeftStartOnRectangleIcon,
  HomeIcon,
  AcademicCapIcon
} from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

const SidebarTeacher = () => {
  const location = useLocation(); 
  const menuItems = [
    {
      name: "Dasr jadvali",
      icon: ListBulletIcon,
      notification: 0,
      link: "/tacher-dashboard",
    },
    {
      name: "Gruhlar",
      icon: AcademicCapIcon,
      notification: 0,
      link: "/groups",
    },
     {
      name: "Rooms",
      icon: HomeIcon,
      notification: 0,
      link: "/rooms",
    },
  ];

  const logoutItem = {
    name: "Chiqish",
    icon: ArrowLeftStartOnRectangleIcon,
    link: "/login",
  };

  const user = {
    name: "Asomiddin Qarshiyev",
    role: "Student",
    imageUrl:
      "https://www.holmesglen.edu.au/content/holmesglen/holmesglen/au/en/current-students/new-students/_jcr_content/root/container/container/container_copy_copy__911007940/container_1533697349/container_copy/teaser.coreimg.85.1024.jpeg/1699931099815/gettyimages-1438185814--660-x-495px.jpeg",
  };

  const removeRole = () => {
    localStorage.clear();
  };
  return (
    <div className="flex h-[100vh] bg-white shadow-xl">
      <div className="flex flex-col w-64 border-r border-gray-200">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200">
          <Link to="/" className="flex items-center space-x-2">
            <img
              className="w-10"
              src="https://portfolio.jdu.uz/assets/logo-CTSg48Ew.png"
              alt=""
            />
            <h1 className="text-xl font-bold text-blue-600">
              JDU{" "}
              <span className="text-blue-600 text-lg font-normal">Teachers</span>
            </h1>
          </Link>
        </div>

        {/* User Profile */}
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
          {menuItems.map((item) => {
            const isActive = location.pathname === item.link;
            return (
              <Link
                key={item.name}
                to={item.link}
                className={`
                  ${
                    isActive
                      ? "bg-blue-500 text-white"
                      : "text-gray-700 bg-gray-200"
                  }
                  group flex items-center px-4 py-2 text-sm font-medium rounded-md relative mb-2
                `}
              >
                <item.icon
                  className={`
                    ${
                      isActive
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
              </Link>
            );
          })}
        </nav>

        {/* Logout Button */}
        <div className="mt-auto px-2 py-4 mb-1">
          <Link
            to={logoutItem.link}
            className="bg-red-600 text-white hover:bg-red-700 group flex items-center px-4 py-2 text-sm font-medium rounded-md relative"
          >
            <logoutItem.icon
              onClick={removeRole}
              className="mr-3 flex-shrink-0 h-6 w-6 text-white"
            />
            {logoutItem.name}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SidebarTeacher;

import Daily from "./daily/daily";
import { useEffect, useState } from "react";
import Sidebar from "./student-sidebar/sidebar";
import WeeklySchedule from "./weakly/weakly";
import MobileNavbar from "./navbar/mobile-navbar";

const Dashboard = () => {
  const [dailyData, setDailyData] = useState(true);

  const onToggleDaily = () => {
    setDailyData((prev) => !prev);
  };

 useEffect(() => {
   
    }, []);
  return (
    <div className="flex w-full sm:h-[100vh] overflow-y-hidden ">
      <div className="  sm:hidden ">
        <MobileNavbar />
      </div>
      <div className=" sm:flex  hidden  h-[100vh]  w-64  overflow-y-clip">
        <Sidebar />
      </div>

      <div className="custom_bg w-full px-4  py-3  sm:overflow-y-auto  sm:pt-5 pt-20">
        <div className="bg-white shadow-md py-3 px-6 rounded-2xl flex justify-between items-center">
          <h1 className="text-[22px] font-extralight tracking-normal text-[black]">
            Dars Jadvali
          </h1>
          <div className="flex space-x-2 bg-gray-500 rounded-lg px-2 py-2">
            <button
              onClick={onToggleDaily}
              className={` py-1 px-4 rounded cursor-pointer font-extralight text-[black] ${
                dailyData ? "bg-gray-50" : "bg-gray-400"
              }`}
            >
              Kunlik
            </button>
            <button
              onClick={onToggleDaily}
              className={` py-1 px-4 rounded cursor-pointer font-extralight text-[black] ${
                dailyData ? "bg-gray-400" : "bg-gray-50"
              }`}
            >
              Haftalik
            </button>
          </div>
        </div>

        <div className="mt-3 mb-10">
          {dailyData ? <Daily /> : <WeeklySchedule />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


import Daily from "../daily/daily";
import { useState } from "react";
import Sidebar from "../student-sidebar/sidebar";
import WeeklySchedule from "../weakly/weakly";

const StudentPanel = () => {
  const [dailyData, setDailyData] = useState(true);

  const onToggleDaily = () => {
    setDailyData(prev => !prev);
  }

  return (
    <div className="flex">
      <div className=" sm:flex hidden h-[100vh] bg-white shadow-xl">
        <Sidebar />
      </div>
      <div className="bg-[#f0f2f5] w-full px-4  py-3 ">
        <div className="bg-white shadow-md py-3 px-6 rounded-2xl flex justify-between items-center">
          <h1 className="text-[22px] font-extralight tracking-normal">
            Dars Jadvali
          </h1>
          <div className="flex space-x-2 bg-gray-500 rounded-lg px-2 py-2">
            <button
              onClick={onToggleDaily}
              className={` py-1 px-4 rounded cursor-pointer font-extralight ${
                dailyData ? "bg-gray-50" : "bg-gray-400"
              }`}
            >
              Kunlik
            </button>
            <button
              onClick={onToggleDaily}
              className={` py-1 px-4 rounded cursor-pointer font-extralight ${
                dailyData ? "bg-gray-400" : "bg-gray-50"
              }`}
            >
              Haftalik
            </button>
          </div>
        </div>

 <div className="mt-3">
       {dailyData ? (
            <Daily /> 
           ):(
           <WeeklySchedule />
     )}
        </div>
      </div>
    </div>
  );
}

export default StudentPanel;
// src/components/MetricsGrid.js
import React from "react";
import {
  BookOpenIcon,
  CalendarDaysIcon,
  AcademicCapIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

function MetricsGrid() {
  const metrics = [
    {
      icon: <BookOpenIcon className="h-6 w-6 text-indigo-500" />,
      title: "Jami fanlar",
      value: "5",
      color: "text-indigo-600",
    },
    {
      icon: <CalendarDaysIcon className="h-6 w-6 text-green-500" />,
      title: "O'rtacha davomat",
      value: "89%",
      color: "text-green-600",
    },
    {
      icon: <AcademicCapIcon className="h-6 w-6 text-purple-500" />,
      title: "Joriy semestr",
      value: "3",
      color: "text-purple-600",
    },
    {
      icon: <ExclamationTriangleIcon className="h-6 w-6 text-red-500" />,
      title: "Qarzdorliklar",
      value: "1",
      color: "text-red-600",
    },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <MetricCard key={index} {...metric} />
      ))}
    </section>
  );
}

// Yordamchi komponent
const MetricCard = ({ icon, title, value, color }) => (
  <div className="bg-white p-6 rounded-xl shadow-md flex items-center space-x-4">
    <div className="p-3 bg-gray-100 rounded-full">{icon}</div>
    <div>
      <p className="text-sm text-gray-500">{title}</p>
      <p className={`text-3xl font-bold ${color}`}>{value}</p>
    </div>
  </div>
);

export default MetricsGrid;

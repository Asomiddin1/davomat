// src/components/StudentInfo.js
import React from "react";

function StudentInfo() {
  return (
    <section className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex flex-col items-center">
        <div className="relative mb-4">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=144&h=144&q=80" // Haqiqiy rasm URL'ini qo'ying
            alt="Ahmad Karimov"
            className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
          />
          <span className="absolute bottom-2 right-2 block h-4 w-4 rounded-full bg-green-500 ring-2 ring-white"></span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900">Ahmad Karimov</h2>
        <p className="text-lg text-gray-500 mt-1">Talaba ID: 2023001</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <InfoCard icon="📚" title="Fakultet" value="Axborot texnologiyalari" />
        <InfoCard icon="💻" title="Mutaxassislik" value="Dasturiy injiniring" />
        <InfoCard icon="🗓️" title="Semestr" value="3-semestr" />
      </div>
    </section>
  );
}

// Yordamchi komponent
const InfoCard = ({ icon, title, value }) => (
  <div className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg shadow-sm">
    <div className="text-3xl">{icon}</div>{" "}
    {/* Real ikonkalar bilan almashtiring */}
    <div>
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-lg font-semibold text-gray-800">{value}</p>
    </div>
  </div>
);

export default StudentInfo;

import React from "react";
import MobileNavbar from "../navbar/mobile-navbar";
import Sidebar from "../student-sidebar/sidebar";

const Message = () => {
  // Xabar ma'lumotlari - hozir to'g'ridan-to'g'ri shu komponent ichida
  const messages = [
    {
      id: 1,
      sender: "Alice",
      subject: "Meeting Reminder",
      body: "Just a friendly reminder about our meeting tomorrow at 10 AM.",
      time: "10:30 AM",
      date: "July 24, 2025",
      read: false,
    },
    {
      id: 2,
      sender: "Bob",
      subject: "Project Update",
      body: "The latest project update has been uploaded to the shared drive.",
      time: "Yesterday",
      date: "July 23, 2025",
      read: true,
    },
    {
      id: 3,
      sender: "Charlie",
      subject: "Question about the report",
      body: "I had a quick question regarding the figures in the Q2 report. Can we discuss?",
      time: "July 22",
      date: "July 22, 2025",
      read: false,
    },
    {
      id: 4,
      sender: "David",
      subject: "Welcome to the team!",
      body: "Welcome aboard! We are excited to have you join our team.",
      time: "July 20",
      date: "July 20, 2025",
      read: true,
    },
  ];

  return (
    <div className="w-full h-screen bg-[#f0f2f5] flex flex-col sm:flex-row">
      {" "}
      {/* Umumiy layout uchun flex */}
      <div className="sm:hidden">
        {/* Kichik ekranlarda Mobile Navbar ko'rinadi */}
        <MobileNavbar />
      </div>
      <div className="hidden sm:block">
        {/* Katta ekranlarda Sidebar ko'rinadi */}
        <Sidebar />
      </div>
      {/* Asosiy kontent maydoni */}
      <div className="flex-1 w-full py-24 sm:py-6 px-4 sm:px-6 lg:px-8 overflow-y-auto">
        {" "}
        {/* 'flex-1' asosiy kontentga qolgan joyni egallash imkonini beradi */}
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md my-4 sm:my-6">
          {" "}
          {/* Vertikal margin qo'shildi */}
          <div className="p-4 border-b border-gray-200">
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
              Xabarlar
            </h1>{" "}
            {/* Sarlavha o'lchami responsive */}
          </div>
          <div className="divide-y divide-gray-200">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`p-4 hover:bg-gray-50 cursor-pointer ${
                  !message.read ? "bg-blue-50" : ""
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  {" "}
                  {/* Kichik ekranlarda sender/time ustma-ust bo'lishi mumkin */}
                  <span
                    className={`font-medium ${
                      !message.read ? "text-blue-700" : "text-gray-800"
                    } text-base sm:text-lg`}
                  >
                    {" "}
                    {/* Matn o'lchami responsive */}
                    {message.sender}
                  </span>
                  <span className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-0">
                    {" "}
                    {/* Matn o'lchami va margin responsive */}
                    {message.time} {message.date && `(${message.date})`}
                  </span>
                </div>
                <p className="text-gray-900 font-semibold mt-1 text-sm sm:text-base">
                  {message.subject}
                </p>{" "}
                {/* Matn o'lchami responsive */}
                <p className="text-gray-600 text-xs sm:text-sm truncate mt-1">
                  {message.body}
                </p>{" "}
                {/* Matn o'lchami responsive */}
              </div>
            ))}
            {messages.length === 0 && (
              <div className="p-4 text-center text-gray-500">
                Hech qanday xabar yo'q.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;

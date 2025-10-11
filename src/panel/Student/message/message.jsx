import React from "react";
import MobileNavbar from "../navbar/mobile-navbar"; // Ushbu importlar mavjud deb faraz qilinadi
import Sidebar from "../student-sidebar/sidebar"; // Ushbu importlar mavjud deb faraz qilinadi
import { CheckSquare, GraduationCap, Link, Info } from 'lucide-react'; // Kichik ikonkalarni qo'shish uchun

// Rasmdagi uslubga mos keladigan tizim xabari komponentasi
const SystemMessage = ({ message }) => {
  return (
    <div className="bg-white rounded-lg shadow-md my-4 sm:my-6 border border-green-300">
      <div className="p-4 bg-green-50 border-l-4 border-green-500">
        
        {/* Sarlavha - QAYTA TOPSHIRISH YAKUNLANDI */}
        <div className="flex items-center mb-2">
          <CheckSquare className="w-5 h-5 text-green-600 mr-2" />
          <h2 className="text-lg font-bold text-green-700">
            QAYTA TOPSHIRISH YAKUNLANDI
          </h2>
        </div>

        {/* 1-band - IT fanlaridan topshirish yakunlandi */}
        <div className="flex items-start mt-3 text-gray-700 text-sm">
          <GraduationCap className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
          <p>IT fanlaridan qayta topshirish jarayoni yakunlandi.</p>
        </div>

        {/* 2-band - Baho va natijalar havolasi */}
        <div className="flex items-start mt-3 text-gray-700 text-sm">
          <Link className="w-4 h-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
          <p>
            <strong className="text-blue-700">Baho va natijalar</strong> endi{" "}
            <a
              href="https://data.idu.uz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline font-medium"
            >
              data.idu.uz
            </a>{" "}
            tizimida shaxsiy sahifangizda joylashtirilgan. Kirib ko'rib, o'z natijalaringizni bilib olishingiz mumkin.
          </p>
        </div>

        {/* 3-band - Qo'shimcha savollar uchun murojaat */}
        <div className="flex items-start mt-3 text-gray-700 text-sm">
          <Info className="w-4 h-4 text-cyan-600 mr-2 mt-1 flex-shrink-0" />
          <p>
            Qo'shimcha savollar uchun <strong className="text-cyan-700">IT bo'limiga</strong> murojaat qilishingiz mumkin.
          </p>
        </div>
      </div>
    </div>
  );
};


const Message = () => {
  // Xabar ma'lumotlari - tizim xabari birinchi o'ringa qo'yildi
  const messages = [
    {
      id: 1,
      type: "system", // Yangi: Tizim xabari ekanligini belgilash
      // Tizim xabari uchun boshqa maydonlar shart emas
    },
    {
      id: 2,
      type: "user", // Yangi: Oddiy xabar ekanligini belgilash
      sender: "Bob",
      subject: "Project Update",
      body: "The latest project update has been uploaded to the shared drive.",
      time: "Yesterday",
      date: "July 23, 2025",
      read: true,
    },
    {
      id: 3,
      type: "user",
      sender: "Charlie",
      subject: "Question about the report",
      body: "I had a quick question regarding the figures in the Q2 report. Can we discuss?",
      time: "July 22",
      date: "July 22, 2025",
      read: false,
    },
    {
      id: 4,
      type: "user",
      sender: "David",
      subject: "Welcome to the team!",
      body: "Welcome aboard! We are excited to have you join our team.",
      time: "July 20",
      date: "July 20, 2025",
      read: true,
    },
  ];

  return (
    <div className="w-full h-screen custom_bg flex flex-col sm:flex-row">
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
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">
              Xabarlar
          </h1>

          {/* Xabarlar ro'yxatini alohida render qilish. Tizim xabarini alohida render qilish uchun Messages componentini o'zgartirdim */}
          {messages.map((message) => {
            if (message.type === "system") {
              // Rasmdagi uslubdagi tizim xabarini render qilish
              return <SystemMessage key={message.id} message={message} />;
            } else {
              // Oddiy foydalanuvchi xabarlarini render qilish
              return (
                <div
                    key={message.id}
                    className={`bg-white rounded-lg shadow-md my-4 sm:my-6 p-4 hover:bg-gray-50 cursor-pointer ${
                        !message.read ? "bg-blue-50" : ""
                    }`}
                >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                        <span
                            className={`font-medium ${
                                !message.read ? "text-blue-700" : "text-gray-800"
                            } text-base sm:text-lg`}
                        >
                            {message.sender}
                        </span>
                        <span className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-0">
                            {message.time} {message.date && `(${message.date})`}
                        </span>
                    </div>
                    <p className="text-gray-900 font-semibold mt-1 text-sm sm:text-base">
                        {message.subject}
                    </p>
                    <p className="text-gray-600 text-xs sm:text-sm truncate mt-1">
                        {message.body}
                    </p>
                </div>
              );
            }
          })}
          
          {messages.length === 0 && (
            <div className="p-4 text-center text-gray-500 bg-white rounded-lg shadow-md my-4 sm:my-6">
              Hech qanday xabar yo'q.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;
// src/pages/Pomidor/index.jsx
import React, { useEffect, useState } from "react";
import MobileNavbar from "../../component/navbar/mobile-navbar";
import Sidebar from "../../component/student-sidebar/sidebar";
import PomidoroTimer from "./pomidor-timer"; // PomidoroTimer komponentini import qilish

const Pomidor = () => {
  const [isPopup, setIsPopup] = useState(false);

  useEffect(() => {
    // URLdagi '?popup=true' parametrini tekshiramiz
    const urlParams = new URLSearchParams(window.location.search);
    setIsPopup(urlParams.get("popup") === "true");

    // Agar bu pop-up oyna bo'lsa, body'ga stil berib, skrollbarni o'chirishimiz mumkin
    if (urlParams.get("popup") === "true") {
      document.body.style.overflow = "hidden"; // Skrollbarni o'chirish
      document.body.style.backgroundColor = "#f0f2f5"; // Agar fon rangini bir xil qilishni istasangiz
    } else {
      document.body.style.overflow = ""; // Normal holatga qaytarish
      document.body.style.backgroundColor = "";
    }

    return () => {
      // Komponent unmount bo'lganda stilni qaytarish
      document.body.style.overflow = "";
      document.body.style.backgroundColor = "";
    };
  }, []);

  if (isPopup) {
    // Agar bu alohida pop-up oyna bo'lsa, faqat taymerni render qilamiz
    // Va ba'zi toza stillarni qo'shamiz
    return (
      <div className="w-full h-screen flex items-center justify-center bg-[#f0f2f5] p-4">
        <PomidoroTimer />
      </div>
    );
  }

  // Agar pop-up emas, asosiy sahifa bo'lsa, hamma narsani render qilamiz
  return (
    <div className="w-full h-screen bg-[#f0f2f5]">
      <div className="sm:hidden">
        <MobileNavbar />
      </div>
      <div className="flex">
        <div className="sm:block hidden">
          <Sidebar />
        </div>
        <div className="w-full py-24 sm:py-6 px-4 sm:px-6 lg:px-8">
          <PomidoroTimer />
        </div>
      </div>
    </div>
  );
};

export default Pomidor;

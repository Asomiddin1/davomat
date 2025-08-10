// src/components/Header.js
import React from "react";
import { BookOpenIcon } from "@heroicons/react/24/solid"; // Heroicons kutubxonasidan foydalanish tavsiya etiladi

function Header() {
  return (
    <header className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm">
      <BookOpenIcon className="h-8 w-8 text-indigo-600" />
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Ota-onalar paneli</h1>
        <p className="text-sm text-gray-500 mt-0.5">
          Farzandingizning o'qish jarayonini kuzatib boring.
        </p>
      </div>
    </header>
  );
}

export default Header;

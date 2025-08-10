
import React, { useState, useEffect, useRef } from "react";

const PomidoroTimer = () => {
  const POMODORO_DURATION = 25 * 60; 
  const BREAK_DURATION = 5 * 60; 

  const [timeRemaining, setTimeRemaining] = useState(POMODORO_DURATION);
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  const intervalRef = useRef(null);

  useEffect(() => {
    if (isActive && timeRemaining > 0) {
      intervalRef.current = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      clearInterval(intervalRef.current);
      if (!isBreak) {
        setIsBreak(true);
        setTimeRemaining(BREAK_DURATION);
        setIsActive(false);
      } else {
        setIsBreak(false);
        setTimeRemaining(POMODORO_DURATION);
        setIsActive(false);
      }
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isActive, timeRemaining, isBreak]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setIsActive(false);
    setIsBreak(false);
    setTimeRemaining(POMODORO_DURATION);
  };

  const skipToBreak = () => {
    clearInterval(intervalRef.current);
    setIsActive(false);
    setIsBreak(true);
    setTimeRemaining(BREAK_DURATION);
  };

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };

  const [displayMinutes, displaySeconds] = formatTime(timeRemaining).split(":");

  // Alohida oynani ochish funksiyasi
  const openInSeparateWindow = () => {
    // Joriy URL manziliga `?popup=true` parametrini qo'shamiz
    // Bu URL yangi oynada yuklanadi
    const currentPath = window.location.pathname; // Misol: /pomidor
    const url = `${window.location.origin}${currentPath}?popup=true`;

    const width = 450;
    const height = 400;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;

    const features = `width=${width},height=${height},top=${top},left=${left},resizable=yes,scrollbars=no,status=no,menubar=no,toolbar=no,location=no`;

    const newWindow = window.open(url, "PomodoroTimerWindow", features);

    if (
      !newWindow ||
      newWindow.closed ||
      typeof newWindow.closed == "undefined"
    ) {
      alert(
        "Alohida oyna ochilmadi. Brauzeringiz pop-up'larni bloklagan bo'lishi mumkin."
      );
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm sm:max-w-md mx-auto text-center font-sans">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0">
        <h2 className="text-xl font-semibold text-gray-800">Pomidor taymer</h2>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
          <button
            onClick={openInSeparateWindow}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center justify-center whitespace-nowrap"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 inline-block mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            Alohida oynada ochish
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center text-6xl sm:text-7xl md:text-8xl font-mono mb-8 space-x-1 sm:space-x-2">
        <div className="bg-black text-white px-2 py-1 sm:px-4 sm:py-2 rounded-lg leading-none">
          {displayMinutes[0]}
        </div>
        <div className="bg-black text-white px-2 py-1 sm:px-4 sm:py-2 rounded-lg leading-none">
          {displayMinutes[1]}
        </div>
        <div className="text-black leading-none text-5xl sm:text-6xl md:text-7xl">
          :
        </div>
        <div className="bg-black text-white px-2 py-1 sm:px-4 sm:py-2 rounded-lg leading-none">
          {displaySeconds[0]}
        </div>
        <div className="bg-black text-white px-2 py-1 sm:px-4 sm:py-2 rounded-lg leading-none">
          {displaySeconds[1]}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
        <button
          onClick={toggleTimer}
          className={`flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 rounded-md text-white font-medium focus:outline-none focus:ring-2 focus:ring-opacity-50 w-full sm:w-auto
            ${
              isActive
                ? "bg-red-500 hover:bg-red-600 focus:ring-red-500"
                : "bg-blue-600 hover:bg-blue-700 focus:ring-blue-600"
            }`}
        >
          {isActive ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
          )}
          {isActive ? "Pauza" : "Boshlash"}
        </button>

        <button
          onClick={resetTimer}
          className="flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 rounded-md bg-gray-200 text-gray-800 font-medium hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 w-full sm:w-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004 12m7-7h.582m-1.556 2A8.001 8.001 0 0118 12M4 12v5h.582m15.356-2A8.001 8.001 0 004 12m7 7h.582M7 12h10"
            />
          </svg>
          Qayta boshlash
        </button>

        <button
          onClick={skipToBreak}
          className="flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 rounded-md bg-gray-200 text-gray-800 font-medium hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 w-full sm:w-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            />
          </svg>
          Tanaffusga o'tish
        </button>
      </div>
    </div>
  );
};

export default PomidoroTimer;

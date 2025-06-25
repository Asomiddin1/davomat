import React, { useState } from "react";

const DateCarousel = () => {
  // currentDate ni hozirgi sanaga o'rnatish
  const [currentDate, setCurrentDate] = useState(new Date());

  // Helper function to get day name in Uzbek (based on your image)
  const getDayNameUzbek = (date) => {
    const days = [
      "Yakshanba",
      "Dushanba",
      "Seshanba",
      "Chorshanba",
      "Payshanba",
      "Juma",
      "Shanba",
    ];
    return days[date.getDay()];
  };

  // Helper function to get month name in Uzbek (based on your image)
  const getMonthNameUzbek = (date) => {
    const months = [
      "Yanvar",
      "Fevral",
      "Mart",
      "Aprel",
      "May",
      "Iyun",
      "Iyul",
      "Avgust",
      "Sentabr",
      "Oktabr",
      "Noyabr",
      "Dekabr",
    ];
    return months[date.getMonth()];
  };

  // Function to generate an array of dates to display
  // Endi bu funksiya faqat 7 ta kunni generatsiya qiladi.
  // Responsive ko'rinish uchun Tailwind CSS dan foydalanamiz.
  const getDatesToDisplay = (startDate) => {
    const dates = [];
    for (let i = -3; i <= 3; i++) {
      // Always generate 7 days
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const datesToDisplay = getDatesToDisplay(currentDate);

  const handlePrevDay = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() - 1);
    setCurrentDate(newDate);
  };

  const handleNextDay = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + 1);
    setCurrentDate(newDate);
  };

  return (
    <div className="flex items-center justify-center p-2 sm:p-4 bg-white rounded-lg shadow-md max-w-full overflow-hidden">
      {/* Left Arrow */}
      <button
        onClick={handlePrevDay}
        className="p-1 sm:p-2 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2 sm:mr-4 flex-shrink-0"
        aria-label="Previous Day"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
      </button>

      {/* Dates Container */}
      <div className="flex justify-center space-x-1 sm:space-x-2 md:space-x-4 flex-grow overflow-hidden">
        {datesToDisplay.map((date, index) => {
          const isSelected = date.toDateString() === currentDate.toDateString();
          return (
            <div
              key={date.toISOString()}
              className={`flex flex-col items-center p-1 sm:p-2 rounded-lg cursor-pointer transition-all duration-300 flex-shrink-0
                ${
                  isSelected
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-800 hover:bg-gray-50"
                }
                ${
                  index === 0 || index === 6 ? "hidden sm:flex" : ""
                }  // Eng chetdagi elementlar sm ekranda ko'rinadi
                ${
                  index === 1 || index === 5 ? "hidden md:flex" : ""
                }  // Keyingi chetdagi elementlar md ekranda ko'rinadi
              `}
              onClick={() => setCurrentDate(date)} // Select this date
              style={{ minWidth: "70px" }} // Har bir kun elementi uchun minimal kenglik berish (kerak bo'lsa)
            >
              <span className="text-xs sm:text-sm font-semibold mb-0.5 sm:mb-1">
                {getMonthNameUzbek(date)}
              </span>
              <span
                className={`text-2xl sm:text-3xl font-bold ${
                  isSelected ? "text-blue-600" : "text-gray-800"
                }`}
              >
                {date.getDate()}
              </span>
              <span
                className={`text-xs ${
                  isSelected ? "text-blue-500" : "text-gray-500"
                }`}
              >
                {getDayNameUzbek(date)}
              </span>
            </div>
          );
        })}
      </div>

      {/* Right Arrow */}
      <button
        onClick={handleNextDay}
        className="p-1 sm:p-2 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2 sm:ml-4 flex-shrink-0"
        aria-label="Next Day"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default DateCarousel;

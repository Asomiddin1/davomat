import React, { useState, useEffect, useRef } from "react";

const DateCarousel = () => {
  // Joriy tanlangan sanani saqlash uchun holat (state)
  const [currentDate, setCurrentDate] = useState(new Date());
  // Ekranda ko'rsatiladigan sanalar sonini saqlash uchun holat
  const [datesToShow, setDatesToShow] = useState(7); // Boshlang'ich qiymat: 7 ta sana
  // Karusel konteyneriga murojaat qilish uchun ref
  const carouselRef = useRef(null);

  // Ekranning joriy kengligini saqlash uchun holat
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // --- Ekranning kengligini kuzatish uchun useEffect ---
  useEffect(() => {
    // Ekran o'lchami o'zgarganda ishga tushadigan funksiya
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // 'resize' hodisasini tinglashni boshlash
    window.addEventListener("resize", handleResize);

    // Komponent o'chirilganda 'resize' tinglashni to'xtatish
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); 

  
  useEffect(() => {
    if (windowWidth < 640) {

      setDatesToShow(3); // Minimum 3 ta sana
    } else if (windowWidth >= 640 && windowWidth < 768) {
      
      setDatesToShow(3);
    } else if (windowWidth >= 768 && windowWidth < 900) {
      setDatesToShow(5);
    }else{
      setDatesToShow(7); 
    }
  }, [windowWidth]); 

  

 
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

  // Oy nomini o'zbek tilida qaytaradi
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

  // Joriy sanadan boshlab ko'rsatiladigan sanalar massivini qaytaradi
  const getDatesToDisplay = (startDate, numDates) => {
    const dates = [];
    // Joriy sanadan chapga va o'ngga qancha kun borish kerakligini hisoblash
    const offset = Math.floor(numDates / 2);

    for (let i = -offset; i <= offset; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  // Ko'rsatiladigan sanalar massivini tayyorlash
  const datesToDisplay = getDatesToDisplay(currentDate, datesToShow);

  // --- Navigatsiya funksiyalari ---

  // Oldingi kunga o'tish
  const handlePrevDay = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() - 1);
    setCurrentDate(newDate);
  };

  // Keyingi kunga o'tish
  const handleNextDay = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + 1);
    setCurrentDate(newDate);
  };

  // --- Tanlangan sanani markazga joylashtirish effekti ---
  useEffect(() => {
    if (carouselRef.current) {
      // DOM yangilanishini kutish uchun setTimeout ishlatiladi.
      // Bu, datesToShow o'zgarganda elementlarning to'g'ri o'lchamlari mavjudligini ta'minlaydi.
      setTimeout(() => {
        const selectedElement = carouselRef.current.querySelector(
          ".date-item.is-selected"
        );
        if (selectedElement) {
          const scrollContainer = carouselRef.current;
          // Tanlangan elementni markazga joylashtirish uchun skroll ofsetini hisoblash
          const scrollOffset =
            selectedElement.offsetLeft -
            scrollContainer.offsetWidth / 2 +
            selectedElement.offsetWidth / 2;
          // Yumshoq skroll effekti bilan joylashtirish
          scrollContainer.scrollTo({
            left: scrollOffset,
            behavior: "smooth",
          });
        }
      }, 0); // Kichik bir kechikish
    }
  }, [currentDate, datesToShow]); // currentDate VA datesToShow o'zgarganda ishlaydi

  return (
    <div className="grid grid-cols-[auto_1fr_auto] items-center gap-2 sm:gap-4 bg-white shadow-md rounded-lg p-2 sm:p-4 max-w-full mx-auto overflow-hidden">
      {/* Chap o'q (oldingi kunga o'tish tugmasi) */}
      <button
        onClick={handlePrevDay}
        className="flex-shrink-0 p-2 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
        aria-label="Previous Day"
      >
        <svg
          className="w-5 h-5 text-gray-600"
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
          />
        </svg>
      </button>

      {/* Skrollanadigan sanalar ro'yxati (Grid konteyneri) */}
      <div
        ref={carouselRef}
        // Tailwind Grid klaslari datesToShow holatiga qarab dinamik o'rnatiladi
        className={`grid overflow-x-hidden scrollbar-hide justify-items-center ${
          datesToShow === 3
            ? "grid-cols-3" // 3 ta ustun mobil uchun
            : datesToShow === 5
            ? "grid-cols-5" // 5 ta ustun o'rta ekranlar uchun
            : "grid-cols-7" // 7 ta ustun katta ekranlar uchun
        }`}
        // Har bir ustunni teng kenglikda qilish uchun inline style
        style={{ gridAutoColumns: "minmax(0, 1fr)" }}
      >
        {datesToDisplay.map((date, index) => {
          // Joriy sanani tanlangan sana bilan solishtirish
          const isSelected = date.toDateString() === currentDate.toDateString();
          return (
            <div
              key={index}
              onClick={() => setCurrentDate(date)} // Sanani bosganda uni tanlangan qilish
              className={`
                date-item
                min-w-[65px] sm:min-w-[80px] // Elementlarning minimal kengligi
                text-center
                rounded-lg
                cursor-pointer
                p-2
                transition-all
                duration-200
                ${
                  isSelected
                    ? "bg-blue-100 text-blue-600 font-bold is-selected shadow-inner" // Tanlangan sana stili
                    : "hover:bg-gray-100 text-gray-700" // Oddiy sana stili
                }
              `}
            >
              <div className="text-xs sm:text-sm font-semibold">
                {getMonthNameUzbek(date)} {/* Oy nomi */}
              </div>
              <div className="text-xl sm:text-2xl font-bold">
                {date.getDate()} {/* Kun raqami */}
              </div>
              <div className="text-xs sm:text-sm text-gray-500">
                {getDayNameUzbek(date)} {/* Kun nomi */}
              </div>
            </div>
          );
        })}
      </div>

      {/* O'ng o'q (keyingi kunga o'tish tugmasi) */}
      <button
        onClick={handleNextDay}
        className="flex-shrink-0 p-2 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
        aria-label="Next Day"
      >
        <svg
          className="w-5 h-5 text-gray-600"
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
          />
        </svg>
      </button>
    </div>
  );
};

export default DateCarousel;

import React from "react";

// O'zbekcha oy nomlari qo'lda kiritilgan fallback
const uzbekMonths = [
  "yanvar",
  "fevral",
  "mart",
  "aprel",
  "may",
  "iyun",
  "iyul",
  "avgust",
  "sentabr",
  "oktabr",
  "noyabr",
  "dekabr",
];

const weeklyScheduleData = {
  Dushanba: [
    {
      subject: "Php",
      room: "101",
      group: "A",
      startTime: "09:00",
      endTime: "10:15",
      teacher: "Aliyev A.",
    },
    {
      subject: "Sql",
      room: "Lab B",
      group: "B",
      startTime: "09:00",
      endTime: "10:15",
      teacher: "Valiyev V.",
    },
    {
      subject: "Sql",
      room: "Lab B",
      group: "B",
      startTime: "09:00",
      endTime: "10:15",
      teacher: "Valiyev V.",
    },
    {
      subject: "Sql",
      room: "Lab B",
      group: "B",
      startTime: "09:00",
      endTime: "10:15",
      teacher: "Valiyev V.",
    },
    {
      subject: "OOD",
      room: "203",
      group: "C",
      startTime: "09:00",
      endTime: "10:15",
      teacher: "Salimov S.",
    },
  ],
  Seshanba: [
    {
      subject: "Chemistry",
      room: "Lab C",
      group: "A",
      startTime: "09:00",
      endTime: "10:15",
      teacher: "Karimova K.",
    },
    {
      subject: "History",
      room: "201",
      group: "B",
      startTime: "09:00",
      endTime: "10:15",
      teacher: "Rustamov R.",
    },
  ],
  Chorshanba: [
    {
      subject: "PHP",
      room: "302",
      group: "23B",
      startTime: "09:00",
      endTime: "10:15",
      teacher: "Aliyev A.",
    },
    {
      subject: "Biology",
      room: "105",
      group: "C",
      startTime: "09:00",
      endTime: "10:15",
      teacher: "Saidova S.",
    },
    {
      subject: "Art",
      room: "Studio 1",
      group: "A",
      startTime: "09:00",
      endTime: "10:15",
      teacher: "Hamidov H.",
    },
  ],
  Payshanba: [
    {
      subject: "Literature",
      room: "202",
      group: "B",
      startTime: "09:00",
      endTime: "10:15",
      teacher: "Nazarova N.",
    },
    {
      subject: "PE",
      room: "Gym",
      group: "C",
      startTime: "09:00",
      endTime: "10:15",
      teacher: "Azizov A.",
    },
  ],
  Juma: [
    {
      subject: "Computer Science",
      room: "Lab D",
      group: "A",
      startTime: "09:00",
      endTime: "10:15",
      teacher: "Turgunov T.",
    },
    {
      subject: "Economics",
      room: "301",
      group: "B",
      startTime: "09:00",
      endTime: "10:15",
      teacher: "Sobirov S.",
    },
  ],
  Shanba: [],
  Yakshanba: [],
};

const WeeklySchedule = () => {
  const daysOrder = [
    "Dushanba",
    "Seshanba",
    "Chorshanba",
    "Payshanba",
    "Juma",
    "Shanba",
    "Yakshanba",
  ];

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const dayOfWeek = today.getDay(); // 0=Yakshanba, 1=Dushanba, ..., 6=Shanba
  const diff = dayOfWeek === 0 ? 6 : dayOfWeek - 1; // Joriy haftaning dushanbasini topish uchun farq

  const mondayOfCurrentWeek = new Date(today);
  mondayOfCurrentWeek.setDate(today.getDate() - diff);
  mondayOfCurrentWeek.setHours(0, 0, 0, 0);

  const getFormattedDate = (dayIndex) => {
    const date = new Date(mondayOfCurrentWeek);
    date.setDate(mondayOfCurrentWeek.getDate() + dayIndex);
    const day = date.getDate();
    const month = uzbekMonths[date.getMonth()]; // always safe
    return `${day} - ${month}`;
  };

  const isCurrentDay = (dayIndex) => {
    const dateToCheck = new Date(mondayOfCurrentWeek);
    dateToCheck.setDate(mondayOfCurrentWeek.getDate() + dayIndex);
    dateToCheck.setHours(0, 0, 0, 0);

    return (
      dateToCheck.getFullYear() === today.getFullYear() &&
      dateToCheck.getMonth() === today.getMonth() &&
      dateToCheck.getDate() === today.getDate()
    );
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 my-6 bg-white rounded-xl shadow-2xl text-gray-800">
      <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center text-blue-800">
        🗓️ Haftalik Dars Jadvali
      </h2>
      {/*
        Grid o'lchamlarini moslashtirish:
        - mobile (default): grid-cols-1 (bitta ustun)
        - sm (640px): grid-cols-2 (ikki ustun)
        - md (768px): grid-cols-3 (uch ustun)
        - lg (1024px): grid-cols-4 (to'rt ustun)
      */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {daysOrder.map((day, index) => {
          const isTodayBlock = isCurrentDay(index);
          const defaultBgColor = "rgb(228, 239, 252)"; // Ochiq ko'k rang
          const todayBgClass = "!bg-blue-300 ring-2 ring-blue-500 shadow-lg"; // Bugungi kun uchun rang va soya

          return (
            <div
              key={day}
              className={`border border-gray-300 rounded-lg p-4 transition-all duration-300 hover:shadow-xl hover:border-blue-400 ${isTodayBlock ? todayBgClass : ""
                }`}
              style={!isTodayBlock ? { backgroundColor: defaultBgColor } : {}}
            >
              <h3 className={`font-semibold text-sm sm:text-base text-blue-700 mb-2 pb-2 border-b ${isTodayBlock ? 'border-blue-500' : 'border-blue-300'} flex flex-col items-start`}>
                <span className="text-lg font-extrabold">{day}</span>
                <span className="font-normal text-gray-600 text-xs sm:text-sm mt-0.5">
                  ({getFormattedDate(index)})
                </span>
              </h3>

              {weeklyScheduleData[day] && weeklyScheduleData[day].length > 0 ? (
                <div className="space-y-3">
                  {weeklyScheduleData[day].map(
                    (lesson, lessonIndex, lessonsArray) => (
                      <div
                        key={lessonIndex}
                        className={`text-sm pt-2 ${lessonIndex < lessonsArray.length - 1
                          ? "border-b border-gray-300 pb-3" // Oxirgi elementda pastki chegara yo'q
                          : ""
                          }`}
                      >
                        {/* Dars nomi va vaqtini bir qatorda ko'rsatish */}
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-extrabold text-base text-gray-900 leading-tight">
                            {lesson.subject}
                          </span>
                        </div>

                        {/* Qo'shimcha ma'lumotlar */}
                        <div className="flex justify-between items-start space-x-2">
                          <div>
                            <p className="text-xs sm:text-sm text-gray-700">
                            <span className="font-bold text-gray-800 mr-1">O'qituvchi:</span> {lesson.teacher}
                          </p>
                          <p className="text-xs sm:text-sm text-gray-700">
                            <span className="font-bold text-gray-800 mr-1">Xona:</span> {lesson.room}
                          </p>
                          <p className="text-xs sm:text-sm text-gray-700">
                            <span className="font-bold text-gray-800 mr-1">Gruh:</span> {lesson.group}
                          </p>
                          </div>

                          <div className="flex flex-col  justify-between">
                            <span className="font-semibold text-blue-600 text-sm">{lesson.startTime}</span>
                            ^
                            <span className="font-semibold text-blue-600 text-sm">{lesson.endTime}</span>
                          </div>
                        </div>

                      </div>
                    )
                  )}
                </div>
              ) : (
                <p className="text-sm text-gray-500 italic py-2">Dars yo'q</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeeklySchedule;
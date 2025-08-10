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
      time: "09:00",
      teacher: "Aliyev A.",
    },
    {
      subject: "Sql",
      room: "Lab B",
      group: "B",
      time: "11:00",
      teacher: "Valiyev V.",
    },
    {
      subject: "OOD",
      room: "203",
      group: "C",
      time: "14:00",
      teacher: "Salimov S.",
    },
  ],
  Seshanba: [
    {
      subject: "Chemistry",
      room: "Lab C",
      group: "A",
      time: "09:30",
      teacher: "Karimova K.",
    },
    {
      subject: "History",
      room: "201",
      group: "B",
      time: "12:00",
      teacher: "Rustamov R.",
    },
  ],
  Chorshanba: [
    {
      subject: "PHP",
      room: "302",
      group: "23B",
      time: "09:00",
      teacher: "Aliyev A.",
    },
    {
      subject: "Biology",
      room: "105",
      group: "C",
      time: "10:30",
      teacher: "Saidova S.",
    },
    {
      subject: "Art",
      room: "Studio 1",
      group: "A",
      time: "15:00",
      teacher: "Hamidov H.",
    },
  ],
  Payshanba: [
    {
      subject: "Literature",
      room: "202",
      group: "B",
      time: "10:00",
      teacher: "Nazarova N.",
    },
    {
      subject: "PE",
      room: "Gym",
      group: "C",
      time: "13:00",
      teacher: "Azizov A.",
    },
  ],
  Juma: [
    {
      subject: "Computer Science",
      room: "Lab D",
      group: "A",
      time: "09:00",
      teacher: "Turgunov T.",
    },
    {
      subject: "Economics",
      room: "301",
      group: "B",
      time: "11:30",
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

  const dayOfWeek = today.getDay(); // 0=Yakshanba
  const diff = dayOfWeek === 0 ? 6 : dayOfWeek - 1;

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
    <div className="w-full px-6 py-3 my-6 bg-white rounded-lg shadow-md text-gray-800 overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Haftalik Dars Jadvali
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {daysOrder.map((day, index) => {
          const isTodayBlock = isCurrentDay(index);
          const defaultBgColor = "rgb(228, 239, 252)";
          const todayBgClass = "!bg-blue-300";

          return (
            <div
              key={day}
              className={`border border-gray-200 rounded-md p-2 ${
                isTodayBlock ? todayBgClass : ""
              }`}
              style={!isTodayBlock ? { backgroundColor: defaultBgColor } : {}}
            >
              <h3 className="font-medium text-sm text-blue-700 mb-1 border-b pb-1 flex justify-between items-center">
                {day}{" "}
                <span className="font-normal text-gray-600">
                  ({getFormattedDate(index)})
                </span>
              </h3>
              {weeklyScheduleData[day].length > 0 ? (
                <div className="space-y-1">
                  {weeklyScheduleData[day].map(
                    (lesson, lessonIndex, lessonsArray) => (
                      <div
                        key={lessonIndex}
                        className={`text-xs pb-2 ${
                          lessonIndex < lessonsArray.length - 1
                            ? "border-b border-gray-300 mb-2"
                            : ""
                        }`}
                      >
                        <p className="flex   justify-between  items-center">
                          <span className="font-semibold">
                            {lesson.subject}
                          </span>
                          <p className="font-semibold">{lesson.time}</p>
                        </p>
                        <p>O'qituvchi: {lesson.teacher}</p>
                        <p>Xona: {lesson.room}</p>
                        <p>Guruh: {lesson.group}</p>
                      </div>
                    )
                  )}
                </div>
              ) : (
                <p className="text-xs text-gray-500 italic">Dars yo'q</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeeklySchedule;

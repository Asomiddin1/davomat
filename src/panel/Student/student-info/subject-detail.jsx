import { Link } from "react-router-dom"
import MobileNavbar from "../navbar/mobile-navbar"
import Sidebar from "../student-sidebar/sidebar"
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";

const SubjectDetail = () => {

    // Har bir fanning darslari, sanalari, baholari va davomati bo'yicha ma'lumot
    const detailedAttendanceData = [
        {
            date: "2024-09-02",
            topic: "Kirish: Algoritmlar turlari",
            grade: 5,
            attended: true,
        },
        {
            date: "2024-09-09",
            topic: "Saralash Algoritmlari (Bubble Sort)",
            grade: 4, // Misol uchun, yaxshi baho
            attended: true,
        },
        {
            date: "2024-09-16",
            topic: "Qidiruv Algoritmlari (Binary Search)",
            grade: 0, // Baho qo'yilmagan yoki hali baholanmagan
            attended: true,
        },
        {
            date: "2024-09-23",
            topic: "Graf Algoritmlariga kirish",
            grade: 3, // Misol uchun, qoniqarli
            attended: false, // Kelmaganlik ham alohida
        },
        {
            date: "2024-09-30",
            topic: "Qisqa yo'l algoritmi (Dijkstra)",
            grade: 2, // Misol uchun, yomon baho
            attended: true,
        },
        // Qo'shimcha dars sanalarini shu yerga qo'shishingiz mumkin
    ];

    const currentSubject = "Algoritmlar"; // Namuna uchun fanni nomi

    // Bahoga qarab rang klassini qaytaruvchi funksiya
    const getGradeClass = (grade) => {
        if (grade >= 4) { // 4 va 5 (A'lo va Yaxshi)
            return "bg-green-100 text-green-700";
        }
        if (grade === 3) { // 3 (Qoniqarli)
            return "bg-yellow-100 text-yellow-700";
        }
        if (grade > 0 && grade < 3) { // 1 va 2 (Yomon)
            return "bg-red-100 text-red-700";
        }
        return "text-gray-400"; // Baho 0 bo'lsa (qo'yilmagan)
    };

    return (
        <div className="flex w-full sm:h-[100vh] overflow-y-hidden ">
            <div className="  sm:hidden ">
                <MobileNavbar />
            </div>
            <div className=" sm:flex  hidden  h-[100vh]  w-64  overflow-y-clip">
                <Sidebar />
            </div>
            <div className="custom_bg w-full  sm:overflow-y-auto  p-4 sm:p-6 pt-18 sm:pt-6 ">
                <div className="bg-white shadow-md py-3 px-6 rounded-2xl flex items-center  w-full
                ">
                    <div className="w-[2%] cursor-pointer">
                        <Link to={'/student-info'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                        </Link>
                    </div>
                    <div className="flex w-[98%] justify-center items-center">
                        <h1 className="text-[22px] text-bold sm:ml-[-10%] ml-[-5%]">{currentSubject} Fanidan Davomat</h1>
                    </div>
                </div>

                <div className="mt-6">
                    {/* Batafsil Fanlar va Davomat Jadvali */}
                    <div className="bg-white shadow-lg rounded-2xl p-4 sm:p-6">
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                Dars Sanalari va Baholar
                            </h3>
                            <div className="flex gap-10">
                                <h2><span className="text-lg font-semibold text-gray-900 "> Davomat</span> <br /> 92%</h2>
                                <h2><span className="text-lg font-semibold text-gray-900 ">Kredit</span><br /> <span className="text-green-600">A</span></h2>
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left text-gray-600">
                                <thead className="bg-gray-50 text-gray-700 text-sm border-b">
                                    <tr>
                                        <th className="px-4 py-3">Sana</th>
                                        <th className="px-4 py-3">Mavzu</th>
                                        <th className="px-4 py-3 text-center">Baho</th>
                                        <th className="px-4 py-3 text-center">Kelgan</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {detailedAttendanceData.map((lesson, index) => (
                                        <tr
                                            key={index}
                                            className="border-b hover:bg-gray-50 transition"
                                        >
                                            <td className="px-4 py-3 font-medium text-gray-900">
                                                {lesson.date}
                                            </td>
                                            <td className="px-4 py-3">{lesson.topic}</td>

                                            {/* Baho ustuni: Sonli bahoga qarab rang beriladi */}
                                            <td className="px-4 py-3 text-center font-bold">
                                                {lesson.grade > 0 ? (
                                                    <span
                                                        className={`inline-flex items-center justify-center p-1 rounded-full  w-8`}
                                                    >
                                                        {lesson.grade}
                                                    </span>
                                                ) : (
                                                    <span className="text-gray-400">-</span>
                                                )}
                                            </td>

                                            {/* Davomat ustuni */}
                                            <td className="px-4 py-3 text-center">
                                                {lesson.attended ? (
                                                    <div className="flex items-center justify-center">
                                                        <span className="flex gap-1 text-green-600 "> Keldi <CheckIcon className="h-5 w-5 text-green-600 mx-auto" /></span>
                                                    </div>

                                                ) : (
                                                    <div className="flex items-center justify-center">
                                                        <span className="flex gap-1 text-red-600 ">Kelmadi <XMarkIcon className="h-5 w-5 text-red-600 mx-auto" /></span>
                                                    </div>

                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubjectDetail
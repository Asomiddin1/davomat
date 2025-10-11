import React, { useState } from 'react'; // <-- useState ni import qiling
import MobileNavbar from "../navbar/mobile-navbar";
import Sidebar from "../student-sidebar/sidebar";
import { Link } from 'react-router-dom';

// **YANGILANGAN TALABALAR RO'YXATI (IT23C guruhi)**
const studentsData = [
    { id: '2300160', name: 'Odilov Shohjahon', group: 'IT23C' },
    { id: '2300037', name: 'Amirullayev Ozodbek', group: 'IT23C' },
    { id: '2310116', name: "Turg'unov Sardor", group: 'IT23C' },
    { id: '2310296', name: 'Mahmudov Dilshod', group: 'IT23C' },
    { id: '2310159', name: 'Nazirov Diyorbek', group: 'IT23C' },
    { id: '2310405', name: 'Sharipov Boburjon', group: 'IT23C' },
    { id: '2310714', name: 'Bozorov Abubakr', group: 'IT23C' },
    { id: '2310532', name: 'Ravshanbekov Behruz', group: 'IT23C' },
    { id: '2311346', name: 'Muzaffarov Azizxon', group: 'IT23C' },
    { id: '2311251', name: "O'razboyev Fatxulloh", group: 'IT23C' },
    { id: '2312302', name: "O'rinboyev Sulton", group: 'IT23C' },
    { id: '2311753', name: 'Abdusoatov Jaloliddin', group: 'IT23C' },
    { id: '2312125', name: 'Usmanova Zinfira', group: 'IT23C' },
    { id: '2314733', name: 'Mamurova Nodirabegim', group: 'IT23C' },
    { id: '2312136', name: 'Qarshiyev Asomiddin', group: 'IT23C' },
    { id: '2311813', name: 'Komilov Dilshod', group: 'IT23C' },
    { id: '2312048', name: 'Shavkatov Farux', group: 'IT23C' },
    { id: '2313631', name: 'Nishonboyev Damir', group: 'IT23C' },
    { id: '2313064', name: 'Aytniyazova Lazzat', group: 'IT23C' },
    { id: '2314260', name: 'Mukarramov Shoxruxbek', group: 'IT23C' },
    { id: '2313638', name: 'Otamuradova Mardona', group: 'IT23C' },
    { id: '2315092', name: 'Mirislomov Sultonbek', group: 'IT23C' },
    { id: '2311194', name: 'Adhamov Elyorbek', group: 'IT23C' },
    { id: '2310825', name: "Raxmonov Abdug'affor", group: 'IT23C' },
    { id: '2316499', name: "Yo'ldoshev Og'abek", group: 'IT23C' },
    { id: '2315025', name: 'Ergashev Samandar', group: 'IT23C' },
    { id: '2315323', name: 'Xusanov Muzaffar', group: 'IT23C' },
    { id: '2313301', name: 'Abdulhayev Abdulaziz', group: 'IT23C' },
    { id: '2316514', name: 'Axtamov Shaxriyor', group: 'IT23C' },
    { id: '2312760', name: 'Dilshodbek Usmonov', group: 'IT23C' },
];

const programTabs = ['IT', 'PARTNER','JAPANESE' , 'EMPLOYABILITY','COWORK', 'WLU' ];
// const activeTab = 'IT'; // <-- Bu o'zgaruvchi endi state ga almashtiriladi

const Groups = () => {
    // **1. activeTab holatini yaratish**
    const [activeTab, setActiveTab] = useState('IT'); // Boshlang'ich holat 'IT'

    // **2. Tabni o'zgartiruvchi funksiya**
    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div className="flex w-full sm:h-[100vh] overflow-y-hidden h-[100vh] custom_bg">
            {/* Mobil navigatsiya */}
            <div className="sm:hidden">
                <MobileNavbar />
            </div>

            {/* Saydbar (Katta ekranlar uchun) */}
            <div className="sm:flex hidden h-[100vh] w-64 overflow-y-clip">
                <Sidebar />
            </div>

            {/* Asosiy kontent maydoni */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-8">
                {/* Orqaga qaytish va Sarlavha bloki */}
                <div className="bg-white shadow-md py-3 px-6 rounded-2xl flex items-center w-full mb-5">
                    <div className="w-[2%] cursor-pointer">
                        <Link to={'/student-info'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                        </Link>
                    </div>
                    <div className="flex w-[98%] justify-center items-center">
                        <h1 className="text-lg sm:text-[22px] text-gray-900 font-semibold sm:ml-[-10%] ml-[-5%]">Gruhlar</h1>
                    </div>
                </div>
                
                {/* Gruh/Dastur Navigatsiyasi (Yopishgan holatga keltirildi) */}
                <div className="flex space-x-2 border-b border-gray-200 bg-white p-2 rounded-t-lg shadow-sm overflow-x-auto"> 
                    {programTabs.map((tab) => (
                        <button
                            key={tab}
                            // **3. Bosish (onClick) hodisasini qo'shish**
                            onClick={() => handleTabChange(tab)} 
                            className={`flex-shrink-0 py-2 px-4 text-sm font-medium transition cursor-pointer ${tab === activeTab
                                    ? 'text-indigo-600 border-b-2 border-indigo-600'
                                    : 'text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Jadval Konteyneri */}
                <div className="bg-white shadow-lg overflow-hidden rounded-b-lg"> 
                    <div className="p-4 flex justify-between items-center border-b border-gray-200">
                        {/* **4. activeTab qiymatini ishlatish** */}
                        <h2 className="text-lg font-semibold text-gray-900">Guruhingiz - {activeTab} (Misol uchun)</h2> 

                        {/* Qidiruv Paneli */}
                        <div className="flex space-x-3 items-center">
                            <input
                                type="text"
                                placeholder="Talaba ID, ism yoki guruh bo'yicha qidiruv"
                                className="px-3 py-2 border border-gray-300 rounded-md text-sm w-64 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                    </div>

                    {/* Talabalar jadvali */}
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12">Talaba ID</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-7/12">Talaba</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-3/12">Guruh</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {studentsData.map((student) => (
                                    <tr key={student.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{student.id}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-semibold">{student.group}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Groups;
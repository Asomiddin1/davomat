import React, { useState, useEffect } from "react";

const PlanFormModal = ({ isOpen, onClose, onSave, initialData = null }) => {
  const [planName, setPlanName] = useState("");
  const [description, setDescription] = useState("");
  const [planType, setPlanType] = useState("umumiy");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [priority, setPriority] = useState("orta");
  const [tasks, setTasks] = useState([{ id: 1, text: "", completed: false }]);

  // initialData (tahrirlash uchun mavjud reja ma'lumotlari) kelganda formani to'ldirish
  useEffect(() => {
    if (initialData) {
      setPlanName(initialData.planName || "");
      setDescription(initialData.description || "");
      setPlanType(initialData.planType || "umumiy");
      setStartDate(initialData.startDate || "");
      setEndDate(initialData.endDate || "");
      setPriority(initialData.priority || "orta");
      // Vazifalar bo'lmasa, bitta bo'sh vazifa bilan boshlaymiz
      setTasks(
        initialData.tasks && initialData.tasks.length > 0
          ? initialData.tasks
          : [{ id: 1, text: "", completed: false }]
      );
    } else {
      // Yangi reja yaratish uchun formani tozalash
      setPlanName("");
      setDescription("");
      setPlanType("umumiy");
      setStartDate("");
      setEndDate("");
      setPriority("orta");
      setTasks([{ id: 1, text: "", completed: false }]);
    }
  }, [isOpen, initialData]); // isOpen yoki initialData o'zgarganda ishlaydi

  // Funksiya: Yangi vazifa qo'shish
  const handleAddTask = () => {
    setTasks([...tasks, { id: Date.now(), text: "", completed: false }]);
  };

  // Funksiya: Vazifa matnini o'zgartirish
  const handleTaskChange = (id, newText) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, text: newText } : task))
    );
  };

  // Funksiya: Vazifani o'chirish
  const handleRemoveTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Funksiya: Rejani saqlash/tahrirlash
  const handleSubmit = (e) => {
    e.preventDefault();
    const planToSave = {
      // Agar initialData mavjud bo'lsa, uning ID'sini ishlatamiz, aks holda yangi ID beramiz
      id: initialData ? initialData.id : Date.now(),
      planName,
      description,
      planType,
      startDate,
      endDate,
      priority,
      tasks,
    };
    onSave(planToSave); // Parent komponentga rejani yuboramiz
    onClose(); // Modalni yopamiz
  };

  if (!isOpen) return null;

  const modalTitle = initialData ? "Rejani Tahrirlash" : "Yangi Reja Yaratish";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#00000064] bg-opacity-50 backdrop-blur-sm p-4 overflow-y-auto animate-fade-in">
      <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-2xl w-full max-w-2xl transform transition-all duration-300 scale-100 opacity-100 animate-scale-up">
        <div className="flex justify-between items-center p-5 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {modalTitle}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white rounded-lg p-1.5 ml-auto inline-flex items-center transition-colors duration-200"
            title="Yopish"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="p-6 space-y-6 max-h-[calc(100vh-160px)] overflow-y-auto custom-scrollbar"
        >
          {" "}
          {/* Modal ichidagi scroll */}
          {/* Reja Nomi */}
          <div>
            <label
              htmlFor="modal-planName"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Reja Nomi <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="modal-planName"
              value={planName}
              onChange={(e) => setPlanName(e.target.value)}
              placeholder="Masalan: Frontend kursini tugatish"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm transition-colors duration-200"
              required
            />
          </div>
          {/* Tavsif */}
          <div>
            <label
              htmlFor="modal-description"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Tavsif
            </label>
            <textarea
              id="modal-description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="3"
              placeholder="Bu rejaga doir qo'shimcha ma'lumotlar..."
              className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm transition-colors duration-200"
            ></textarea>
          </div>
          {/* Reja Turi va Ustuvorlik */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="modal-planType"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Reja Turi <span className="text-red-500">*</span>
              </label>
              <select
                id="modal-planType"
                value={planType}
                onChange={(e) => setPlanType(e.target.value)}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-sm border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                required
              >
                <option value="umumiy">Umumiy Reja</option>
                <option value="loyihaviy">Loyihaviy Reja</option>
                <option value="imtihon">Imtihonga Tayyorgarlik</option>
                <option value="kurs">Kursni O'zlashtirish</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="modal-priority"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Ustuvorlik Darajasi <span className="text-red-500">*</span>
              </label>
              <select
                id="modal-priority"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-sm border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                required
              >
                <option value="past">Past</option>
                <option value="orta">O'rta</option>
                <option value="yuqori">Yuqori</option>
                <option value="shoshilinch">Shoshilinch</option>
              </select>
            </div>
          </div>
          {/* Sanalar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="modal-startDate"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Boshlanish Sanasi <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="modal-startDate"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white text-sm transition-colors duration-200"
                required
              />
            </div>
            <div>
              <label
                htmlFor="modal-endDate"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Tugash Sanasi <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="modal-endDate"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white text-sm transition-colors duration-200"
                required
              />
            </div>
          </div>
          {/* Vazifalar Ro'yxati */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              Vazifalar{" "}
              <span className="text-gray-500 text-xs">
                (Kamida 1 ta vazifa)
              </span>
            </label>
            <div className="space-y-3">
              {tasks.map((task, index) => (
                <div key={task.id} className="flex items-center gap-3">
                  <input
                    type="text"
                    value={task.text}
                    onChange={(e) => handleTaskChange(task.id, e.target.value)}
                    placeholder={`Vazifa ${index + 1}`}
                    className="block flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm transition-colors duration-200"
                    required
                  />
                  {tasks.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveTask(task.id)}
                      className="p-2 rounded-full bg-red-100 text-red-600 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-200"
                      title="Vazifani o'chirish"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        ></path>
                      </svg>
                    </button>
                  )}
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={handleAddTask}
              className="mt-4 flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-700 dark:hover:bg-blue-800 transition-colors duration-200"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
              Vazifa qo'shish
            </button>
          </div>
          {/* Tugmalar */}
          <div className="flex justify-end gap-3 mt-6 pt-5 border-t border-gray-200 dark:border-gray-700">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
            >
              Bekor qilish
            </button>
            <button
              type="submit"
              className="px-5 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:bg-green-700 dark:hover:bg-green-800 transition-colors duration-200"
            >
              {initialData ? "Saqlash" : "Rejani saqlash"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlanFormModal;

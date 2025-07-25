import React, { useState } from "react";
import Sidebar from "../../component/student-sidebar/sidebar";
import MobileNavbar from "../../component/navbar/mobile-navbar";
import PlanFormModal from "./CreatePlanModal";

const Plans = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPlan, setEditingPlan] = useState(null);
  const [plans, setPlans] = useState([
    {
      id: 1,
      planName: "React.js o'rganishni tugatish",
      description:
        "Frontend rivojlanish uchun React.js ni to‘liq o‘zlashtirish.",
      planType: "kurs",
      startDate: "2024-09-01",
      endDate: "2024-12-31",
      priority: "yuqori",
      tasks: [
        { id: 101, text: "React asoslari", completed: true },
        { id: 102, text: "State va Lifecycle", completed: false },
        { id: 103, text: "Hooks", completed: false },
      ],
    },
    {
      id: 2,
      planName: "React.js o'rganishni tugatish",
      description:
        "Frontend rivojlanish uchun React.js ni to‘liq o‘zlashtirish.",
      planType: "kurs",
      startDate: "2024-09-01",
      endDate: "2024-12-31",
      priority: "yuqori",
      tasks: [
        { id: 101, text: "React asoslari", completed: true },
        { id: 102, text: "State va Lifecycle", completed: false },
        { id: 103, text: "Hooks", completed: false },
      ],
    },
    {
      id: 3,
      planName: "React.js o'rganishni tugatish",
      description:
        "Frontend rivojlanish uchun React.js ni to‘liq o‘zlashtirish.",
      planType: "kurs",
      startDate: "2024-09-01",
      endDate: "2024-12-31",
      priority: "yuqori",
      tasks: [
        { id: 101, text: "React asoslari", completed: true },
        { id: 102, text: "State va Lifecycle", completed: false },
        { id: 103, text: "Hooks", completed: false },
      ],
    },
    {
      id: 4,
      planName: "React.js o'rganishni tugatish",
      description:
        "Frontend rivojlanish uchun React.js ni to‘liq o‘zlashtirish.",
      planType: "kurs",
      startDate: "2024-09-01",
      endDate: "2024-12-31",
      priority: "yuqori",
      tasks: [
        { id: 101, text: "React asoslari", completed: true },
        { id: 102, text: "State va Lifecycle", completed: false },
        { id: 103, text: "Hooks", completed: false },
      ],
    },
    {
      id: 5,
      planName: "React.js o'rganishni tugatish",
      description:
        "Frontend rivojlanish uchun React.js ni to‘liq o‘zlashtirish.",
      planType: "kurs",
      startDate: "2024-09-01",
      endDate: "2024-12-31",
      priority: "yuqori",
      tasks: [
        { id: 101, text: "React asoslari", completed: true },
        { id: 102, text: "State va Lifecycle", completed: false },
        { id: 103, text: "Hooks", completed: false },
      ],
    },
  ]);

  const handleSavePlan = (plan) => {
    if (editingPlan) {
      setPlans(plans.map((p) => (p.id === plan.id ? plan : p)));
    } else {
      setPlans([...plans, { ...plan, id: Date.now() }]);
    }
    setEditingPlan(null);
    setIsModalOpen(false);
  };

  const handleDeletePlan = (id) => {
    if (window.confirm("Haqiqatan ham bu rejani o‘chirmoqchimisiz?")) {
      setPlans(plans.filter((plan) => plan.id !== id));
    }
  };

  const handleEditPlan = (plan) => {
    setEditingPlan(plan);
    setIsModalOpen(true);
  };

  const handleToggleTaskCompleted = (planId, taskId) => {
    setPlans(
      plans.map((plan) =>
        plan.id === planId
          ? {
              ...plan,
              tasks: plan.tasks.map((task) =>
                task.id === taskId
                  ? { ...task, completed: !task.completed }
                  : task
              ),
            }
          : plan
      )
    );
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "shoshilinch":
        return "bg-red-100 text-red-800";
      case "yuqori":
        return "bg-yellow-100 text-yellow-800";
      case "orta":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 dark:bg-gray-900 overflow-y-hidden">
      <div className="sm:hidden">
        <MobileNavbar />
      </div>

      <div className="flex overflow-hidden h-screen">
        <div className="hidden sm:block">
          <Sidebar />
        </div>

        <div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          <div className="max-w-6xl mx-auto space-y-8 pb-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-between items-center shadow py-4 px-4 rounded-2xl">
                <h1 className="text-2xl font-bold">Rejalar</h1>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-700"
                >
                  Reja qo‘shish
                </button>
              </div>
            </div>

            {plans.length === 0 ? (
              <div className="bg-white shadow-xl rounded-2xl p-8 text-center text-gray-600">
                <p className="text-xl font-semibold">
                  Hozircha hech qanday reja yo‘q.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {plans.map((plan) => (
                  <div
                    key={plan.id}
                    className="relative bg-white shadow-lg rounded-xl p-6 border border-gray-200 flex flex-col justify-between"
                  >
                    {/* Priority Badge - yuqori o‘ngda */}
                    <span
                      className={`absolute top-3 right-3 px-2 py-1 text-[10px] font-semibold rounded-full ${getPriorityColor(
                        plan.priority
                      )}`}
                    >
                      {plan.priority}
                    </span>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {plan.planName}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        {plan.description}
                      </p>
                      <div className="text-sm text-gray-500 mb-2">
                        {plan.startDate} - {plan.endDate}
                      </div>

                      {plan.tasks && (
                        <ul className="text-sm text-gray-600 space-y-1">
                          {plan.tasks.slice(0, 3).map((task) => (
                            <li
                              key={task.id}
                              className="flex items-center gap-2"
                            >
                              <input
                                type="checkbox"
                                className="!w-4 !h-4 shadow"
                                checked={task.completed}
                                onChange={() =>
                                  handleToggleTaskCompleted(plan.id, task.id)
                                }
                              />
                              <span
                                className={
                                  task.completed
                                    ? "line-through text-gray-400"
                                    : ""
                                }
                              >
                                {task.text}
                              </span>
                            </li>
                          ))}
                          {plan.tasks.length > 3 && (
                            <li className="text-xs text-gray-500">
                              +{plan.tasks.length - 3} ta boshqa vazifalar...
                            </li>
                          )}
                        </ul>
                      )}
                    </div>

                    <div className="mt-4 flex justify-between gap-2 border-t pt-3">
                      <button
                        onClick={() => handleEditPlan(plan)}
                        className="bg-[#2980DD]  bg-opacity-25 py-1 px-2  rounded-[8px]  font-medium text-white  text-[14px] "
                      >
                        Tahrirlash
                      </button>
                      <button
                        onClick={() => handleDeletePlan(plan.id)}
                        className=" bg-[#FF0044] text-[14px]  text-white rounded-[10px]  bg-opacity-15  px-2 py-1 ml-4  "
                      >
                        O‘chirish
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal oynasi */}
      <PlanFormModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingPlan(null);
        }}
        onSave={handleSavePlan}
        initialData={editingPlan}
      />
    </div>
  );
};

export default Plans;

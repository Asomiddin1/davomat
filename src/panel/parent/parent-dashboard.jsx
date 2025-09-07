import ParentSidebar from "./psidebar/parent-sidebar";
import ParentStudent from "./pstudent/parentStudent";

const ParentDashboard = () => {
  return (
    <div className="bg-[#f0f2f5] min-h-screen flex">
      {/* Sidebar fixed height */}
      <div className="hidden sm:flex h-screen w-64 flex-shrink-0 border-r">
        <ParentSidebar />
      </div>

      {/* Content scroll qilsin */}
      <div className="flex-1 h-screen overflow-y-auto p-4">
        <ParentStudent />
      </div>
    </div>
  );
};

export default ParentDashboard;

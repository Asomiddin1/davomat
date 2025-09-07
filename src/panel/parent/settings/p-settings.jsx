import ParentSidebar from "../psidebar/parent-sidebar";
import Psettings from "./psettings";

const ParentSettings = () => {
  return (
    <div className="bg-[#f0f2f5] min-h-screen flex">
      <div className="hidden sm:flex h-screen w-64 overflow-y-auto">
        <ParentSidebar />
      </div>
      <div className="flex-1 p-4 overflow-y-auto">
        <Psettings />
      </div>
    </div>
  );
};

export default ParentSettings;

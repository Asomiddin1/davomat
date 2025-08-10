  import Sidebar from "../student-sidebar/sidebar";


  const MobileNavbar = () => {
    return (
      <div className="fixed top-0 left-0 w-full h-[60px] bg-white/30 backdrop-blur-md border-b border-white/20 z-50 flex items-center justify-between px-6">
        <div className="text-black font-semibold text-lg flex items-center gap-2">
          {/* <img
            className="w-10"
            src="https://portfolio.jdu.uz/assets/logo-CTSg48Ew.png"
            alt=""
          /> */}
          <h1 className="text-blue-600">JDU</h1>
        </div>
        <div className="flex items-center space-x-4 cursor-pointer">
          <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
              <label htmlFor="my-drawer-2" className=" drawer-button lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                  />
                </svg>
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-2"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul>
                <Sidebar />
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default MobileNavbar;

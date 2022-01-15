import React from "react";

function Sidebar({ showSidebar }) {
  return (
    <div className="absolute overflow-hidden">
      <div
        className={`w-[80%] sm:w-[40%] md:w-[20%] h-full bg-gray-800 text-white z-10 fixed flex flex-col pt-[75px] right-full transition duration-500 ease-in-out ${
          showSidebar ? "translate-x-full" : ""
        }`}
      >
        <p>sidebar</p>
      </div>
    </div>
  );
}

export default Sidebar;

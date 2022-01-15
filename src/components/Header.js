import React from "react";
import { useState } from "react";
import { MenuIcon } from "@heroicons/react/solid";
import Sidebar from "./Sidebar";

function Header() {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-center items-center p-5 text-white bg-gray-800 w-full z-20">
        <MenuIcon className="h-5 mr-auto cursor-pointer hover:text-gray-300" onClick={toggleSidebar} />
        <p className="text-xl mr-auto">ChatApp</p>
      </div>
      <span className="w-full h-[1px] bg-gray-600 z-20"></span>
      <Sidebar showSidebar={showSidebar} />
    </div>
  );
}

export default Header;

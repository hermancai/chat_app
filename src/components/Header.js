import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectRoomId } from "../features/appSlice";
import { useDocument } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import { doc } from "firebase/firestore";
import { MenuIcon, ExclamationCircleIcon } from "@heroicons/react/outline";
import Sidebar from "./Sidebar";

function Header() {
  const roomId = useSelector(selectRoomId);
  const [roomDetails] = useDocument(roomId && doc(db, "channels", roomId));

  const [showSidebar, setShowSidebar] = useState(true);
  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <div className="flex flex-col w-full fixed">
      <div className="flex justify-center items-center p-5 text-white bg-gray-800 w-full z-20">
        <MenuIcon className="h-7 mr-auto cursor-pointer hover:text-gray-300" onClick={toggleSidebar} />
        {roomId ? (
          <p className="text-xl mr-auto"># {roomDetails ? roomDetails.data().name : ""}</p>
        ) : (
          <div className="flex mr-auto items-center justify-center gap-2">
            <ExclamationCircleIcon className="h-7 animate-pulse text-red-500" />
            <p className="text-xl">Select a Channel</p>
          </div>
        )}
      </div>
      <span className="customDivider z-20"></span>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    </div>
  );
}

export default Header;

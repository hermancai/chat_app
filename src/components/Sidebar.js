import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db, auth } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import ChannelOption from "./ChannelOption";
import { PlusIcon } from "@heroicons/react/solid";

function Sidebar({ showSidebar, setShowSidebar }) {
  const [user] = useAuthState(auth);
  const [channels] = useCollection(collection(db, "channels"));

  const addChannel = () => {
    const channelName = prompt("Please enter a new channel name:");

    if (channelName) {
      addDoc(collection(db, "channels"), {
        name: channelName,
      });
    }
  };

  return (
    <div>
      <div
        className={`w-[80%] sm:w-[40%] md:w-[20%] h-full bg-gray-800
         text-white z-10 fixed flex flex-col space-y-2 pt-2
         right-full transition duration-500 ease-in-out ${showSidebar ? "translate-x-full" : ""}`}
      >
        <div className="flex flex-wrap items-center gap-2 p-3">
          <img alt={user?.displayName} src={user?.photoURL} className="h-8 rounded-full" />
          <p>{user?.displayName}</p>
          <p
            onClick={() => auth.signOut()}
            className="border-white border-2 rounded ml-auto px-2 py-1 w-min justify-self-end cursor-pointer hover:text-red-400 hover:border-red-400"
          >
            Logout
          </p>
        </div>
        <span className="customDivider" />
        <div className="sidebarOption" onClick={addChannel}>
          <PlusIcon className="h-5" />
          <p>Add Channel</p>
        </div>
        <span className="customDivider" />
        {channels &&
          channels.docs.map((doc) => (
            <ChannelOption
              key={doc.id}
              id={doc.id}
              title={doc.data().name}
              showSidebar={showSidebar}
              setShowSidebar={setShowSidebar}
            />
          ))}
      </div>
    </div>
  );
}

export default Sidebar;

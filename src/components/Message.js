import React from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";
import { XIcon } from "@heroicons/react/solid";

function Message({ message, timestamp, user, userImage, belongsToCurrentUser, id, channelId }) {
  const deleteMessage = () => {
    deleteDoc(doc(db, "channels", channelId, "messages", id));
  };

  return (
    <div className="flex flex-row gap-3 items-center hover:bg-gray-200 py-3 px-2">
      <img src={userImage} alt={user} className="h-10 rounded self-start" />
      <div>
        <h4 className="font-bold">
          {user ? user : ""}{" "}
          <span className="text-xs font-light text-gray-500">{new Date(timestamp?.toDate()).toUTCString()}</span>
        </h4>
        <p className="whitespace-pre-wrap">{message}</p>
      </div>
      {belongsToCurrentUser && (
        <div className=" ml-auto flex justify-center items-center cursor-pointer p-2 rounded-full hover:bg-gray-400">
          <XIcon onClick={deleteMessage} className="h-7" />
        </div>
      )}
    </div>
  );
}

export default Message;
